# SA5Firmata 2.0 version

Extending StandardFirmata functions for Snap4Arduino.

## Features

StandarFirmata:

  - Read digital and analog pins.
  - Set ditital states (low or high)
  - Set values (0-255) to PWM pins
  - Manage servos (set angle or state)

SA5Firmata extends:

  - Tone function. It doesn't use standard arduino command, to leave free timer2 and implements IR library. This is a blocking function.
  - PulseIn function.
  - A pulseOut function (send a microseconds pulse)
  - Ping function to read distance from Ultrasonic sensors.
  - Read Nunchuk sensors (joyX, joyY, butZ, butC, accX, accY and accZ) from I2C connection.
  - Read humidity and temperature from a DHT11 sensor.
  - Send IR messages by a IR emitter on pin 3. Sony and RC5 protocols availables.
  - Read IR message from a IR recevier on pin 11.
  - You can Enable/Disable IR receiving, to leave free timer 2 and enable PWM on pins 3 and 11.
  - Servo library hacked, to avoid "the detach" disconnecting servos. Then PWM on pins 9 and 10 are again available.

SA5Firmata_tone:

  - Every SA5Firmata functions except IR.
  - Tone functions use standard arduino command. So, this is not a blocking function.

## Download and Install

  - Download [SA5Firmata 2.0](https://github.com/jguille2/SA5/files/695087/SA5Firmata_2.0.zip)
  - Add specific libraries to your Arduino IDE. You can download directly this libraries, copying *libraries* folder to your *Arduino* folder. Tested with Arduino IDE 1.6.9 from [arduino.cc](https://www.arduino.cc/en/Main/Software)
  - Load SA5Firmata2.ino into your board
  - Open Snap4Arduino (you can download it [here](http://snap4arduino.org))
  - Load the *xml* file with the blocks created for SA5Firmata. *SA5Firmata_bs2.xml* have the basic blocks under Arduino category.
  
----
  - You can use [SA5Firmata_tone 2.0](https://github.com/jguille2/SA5/files/695088/SA5Firmata_tone_2.0.zip) to use a more powerful tone function (not blocking), but this hasn't IR features.
    - Download it and load SA5Firmata2_tone.ino to your board.
    - You have SA5Firmata_tone_bs2.xml blocks. But you can use standard SA5Firmata blocks (unless IR).

## Libraries

  - [Firmata](https://github.com/firmata/arduino) version 2.5.2 (16/02/2016)
  - [IRremote](https://github.com/z3t0/Arduino-IRremote) version 2.1.0 (20/02/2016)
  - [Nunchuck](https://github.com/GabrielBianconi/ArduinoNunchuk) version 25/03/2014
  - [Servo](https://github.com/arduino/Arduino/tree/master/libraries/Servo) version 1.1.2 (08/03/2016) hacked to allow PWM after detaching

  You can download directly this libraries, copying *libraries* folder to your *Arduino* folder

## SA5Firmata.ino
  - Added includes for IRremote and Nunchuck libs and create their objects
  - Added mark in *SYSEX* command *CAPABILITY_QUERY* to report firmware and version. In SA5Firmata, digital pins from 2 to version number have SHIFT (0x05) mode available like a mark
  - Added *SYSEX* commands (from 0xC0 to 0xCF)
  - Added setup code for *nunchuk* inicialization.

## SA5bs2.xml

### Checking board has SA5Firmata2.ino - Code for all blocks

  ```javascript
  board = this.context.board; //Definition should change according to the context
  if (board.pins[2].supportedModes.indexOf(0x05) === -1) {
    throw new Error("Please upload SA5Firmatax.ino on x=2 or higher");
  }
  ```
### Nunchuk reporters - 0xC0 to 0xC6

  * joyX 0xC0 - return 1 byte. From 0 (left position) to 255 (right position). Center = 128
  * joyY 0xC1 - return 1 byte. From 0 (down) to 255 (up). Center = 128
  * accX 0xC4 - return 10 bits. Resting [left->280, center->508, right->736] -> acceleration increases values in the same direction
  * accY 0xC5 - return 10 bits. Resting [back->280, center->508, front->736] -> acceleration increases values in the same direction
  * accZ 0xC6 - return 10 bits. Resting [down->280, middle->508, up->736] -> acceleration increases values in the same direction
  * butZ 0xC2 - return 1 bit. 0 -> NonPressed, 1 -> Pressed
  * butC 0xC3 - return 1 bit. 0 -> NonPressed, 1 -> Pressed

    * Launchers - cS and cC are *command string* and *command code* (like *joyX* and *0xC0*)
      
      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("cS", callback(data));
      var sdata =[0xF0,//START_SYSEX,
				cC,//cS command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

    * Response definitions

	  * For *joy* and *acc* commands:

        ```javascript
        board = this.context.board; //Definition should change according to the context
        world.Arduino.firmata.SYSEX_RESPONSE[cC] = function(board) {
      	  var cS = (board.currentBuffer[2] & 0x7F) | ((board.currentBuffer[3] & 0x7F) << 7);
      	  board.emit("cS", cS);
        }
        ```

	  * For *but* commands:

        ```javascript
        board = this.context.board; //Definition should change according to the context
        world.Arduino.firmata.SYSEX_RESPONSE[cC] = function(board) {
      	  var cS = (board.currentBuffer[2] & 0x7F);
      	  board.emit("cS", cS);
        }
        ```

### Tone command - 0xC7

Implements tone(pin,frequency,*duration) and noTone(pin)

  * Arduino values
    * pin -> We use 1 byte (0-255). Firmata uses 0 and 1 pin.
    * frequency -> Hz -> unsigned int (2 bytes 0-65535) //Arduino Uno, min 32Hz
    * duration (optional) -> milliseconds -> unsigned long (4 bytes 0-4294967295 more than 49 days!!)
  * Sending values
    * We send 56 bit -> We need 8 bytes with 7b/B data
    * Data: duration(32)-frequency(16)-pin(8)
    * Sending MSB -> LSB
  * Launcher
    
    ```javascript
    //Create blocs wit vars: pin, freq (frequency 0-65535 Hz) and dur (duration 0-4294967295 milliseconds)
    board = this.context.board;  //Definition should change according to the context
    if (pin === undefined || freq === undefined || pin <= 1 || pin > 255 || freq < 0 || freq > 65535) {
      throw new Error("Required var pin (2-255) and frequency (0-65535)");
    }
    var dur = dur || 0;
    dur = dur & 0xFFFFFFFF; //clamping value to 32 bits
    var data =[0xF0, //START_SYSEX
     		0xC7,  //Tone Command
      		(dur >> 25) & 0x7F,
      		(dur >> 18) & 0x7F,
      		(dur >> 11) & 0x7F,
      		(dur >> 4) & 0x7F,
      		((dur << 3) & parseInt("01111000",2)) | ((freq >> 13) & parseInt("0111",2)),
      		(freq >> 6) & 0x7F,
      		((freq << 1) & parseInt("01111110",2)) | ((pin >> 7) & parseInt("01",2)),
      		pin & 0x7F,
      		0xF7  //END_SYSEX
    ];
    board.transport.write(new Buffer(data));
    ```
    
  * Firmata notes
    * Var types: pin->byte (8bits), freq->unsigned int (16bits) and dur->unsigned long (32bits)
    * We use a blocking process -> we need tot disable interrupts for keep right values of frequency and duration.

### PulseIn - reporter 0xC8

  * Arduino values
    * pin ->We use 1 byte (0-255)
    * value ->type of pulse to read (HIGH/LOW) -> 1bit (1/0)
    * timeout (optional)->microseconds to wait for the pulse to be completed ->unsigned long (32 bits-> 0-4294967295 more than 71 minutes). It's optional and its default value is one second -> 1000000.
    * pulse (pulseIn return value) -> microseconds (pulse length) ->unsigned long (32 bits-> 0-4294967295)

  * Launcher
    
    ```javascript
    //Create blocs wit vars: pin, stValue (HIGH/LOW) and timeout (0-4294967295 microseconds)
    board = this.context.board;  //Definition should change according to the context
    value = 1;
	if (stValue == "LOW") {value = 0;} //only explicit LOW return a low pulse 
    if (pin === undefined || pin <= 1 || pin > 255) {
      throw new Error("Required var pin (2-255)");
    }
    var timeout = timeout || 0; //undefined will be 0, and 0 causes Arduino's default (1s)
    timeout = timeout & 0xFFFFFFFF; //clamping value to 32 bits
    board.once("pulseIn-"+pin, callback(data));
    var data =[0xF0, //START_SYSEX
      		0xC8,  //PulseIn Command
      		(timeout >> 25) & 0x7F,
      		(timeout >> 18) & 0x7F,
      		(timeout >> 11) & 0x7F,
      		(timeout >> 4) & 0x7F,
      		((timeout << 3) & parseInt("01111000",2)) | ((value << 2) & parseInt("0100",2)) | ((pin >> 6) & parseInt("011",2)),
      		(pin & parseInt("0111111",2)),
      		0xF7  //END_SYSEX
    ];
    board.transport.write(new Buffer(data));
    ```
  * Response definition

    ```javascript
    board = this.context.board; //Definition should change according to the context
    world.Arduino.firmata.SYSEX_RESPONSE[0xC8] = function(board) {
      var pulse = (board.currentBuffer[2] & 0x7F) << 25| (board.currentBuffer[3] & 0x7F) << 18 | (board.currentBuffer[4] & 0x7F) << 11 | (board.currentBuffer[5] & 0x7F) << 4 | (board.currentBuffer[6] & 0x7F) >> 3;
      var pin = (board.currentBuffer[6] & parseInt("0111",2)) << 5 | (board.currentBuffer[7] & parseInt("011111",2));
      board.emit("pulseIn-"+pin, pulse);
    }
    ```

### microsecondsPulseOut command 0xC9

  * Arduino values
    * pin ->We use 1 byte (0-255)
    * value ->type of pulse to make (HIGH/LOW) -> 1bit (1/0)
    * time1 (time before), time2 (pulse time) and time3 (time after) in microseconds. We use 11 bits (0-2047 microseconds)
    * We need 42 data bits -> 6 bytes (with 7 data-bits/byte)

  * Launcher
    
    ```javascript
    //Create blocs wit vars: pin, stValue (HIGH/LOW), time1, time2 and time3 (0-2047 microseconds)
    board = this.context.board;  //Definition should change according to the context
    value = 1;
    if (stValue == "LOW") {value = 0;} //only explicit LOW causes a low pulse 
    if (pin === undefined || pin <= 1 || pin > 255) {
      throw new Error("Required var pin (2-255)");
    }
    //undefined time will be 0 seconds
    var time1 = time1 || 0;
    var time2 = time2 || 0;
    var time3 = time3 || 0;
    //clamping time values to 11 bits
    time1 = time1 & parseInt("011111111111",2);
    time2 = time2 & parseInt("011111111111",2);
    time3 = time3 & parseInt("011111111111",2);
    var data =[0xF0, //START_SYSEX
      		0xC9,  //microsecondsPulseOut Command
      		(time1 >> 4) & 0x7F,
      		((time1 << 3) & parseInt("01111000",2)) | ((time2 >> 8) & parseInt("0111",2)),
      		(time2 >> 1) & 0x7F,
      		((time2 << 6) & parseInt("01000000",2)) | ((time3 >> 5) & parseInt("0111111",2)),
      		((time3 << 2) & parseInt("01111100",2)) | ((value << 1) & parseInt("010",2)) | ((pin >> 7) & parseInt("01",2)),
      		(pin & 0x7F), 
      		0xF7  //END_SYSEX
    ];
    board.transport.write(new Buffer(data));
    ```

### Ping reporter 0xCA

  * Arduino values
    * pinSen -> 1 byte (2-255) for sender pin
    * pinRec -> 1 byte (2-255) for receiver pin
    * pulse -> pulse length response in microseconds -> 2 bytes (0-65535). The maximum distance detected from sensor is about 4m -> 8m of sound tour. 10m would be (29,41µs/cm) 29,41 ms
    * time1 (time before sended pulse) -> 5 bits (0-31) microseconds (typical value is 2 µs)
    * time2 (time of the sended pulse) -> 5 bits (0-31) microseconds (typical value is 5 µs)

  * Launcher
    
    ```javascript
    //Create blocs with vars: pinSen, pinRec (2-255), time1 and time2 (0-31 microseconds)
    board = this.context.board;  //Definition should change according to the context
    if (pinSen === undefined || pinSen <= 1 || pinSen > 255 || pinRec === undefined || pinRec <= 1 || pinRec > 255) {
      throw new Error("Required vars pinSen and pinRec (2-255)");
    }
    board.once("ping-"+pinRec, callback(data));
    var data =[0xF0, //START_SYSEX
      		0xCA,  //Ping Command
      		(pinSen >> 1) & 0x7F,
      		(pinSen << 6) | (time1 & parseInt("011111",2)),
      		(pinRec >> 1) & 0x7F,
      		(pinRec << 6) | (time2 & parseInt("011111",2)),
      		0xF7  //END_SYSEX
    ];
    board.transport.write(new Buffer(data));
    ```
  * Response definition

    ```javascript
    board = this.context.board; //Definition should change according to the context
    world.Arduino.firmata.SYSEX_RESPONSE[0xCA] = function(board) {
      var pulse = (board.currentBuffer[2] & 0x7F) << 9| (board.currentBuffer[3] & 0x7F) << 2 | (board.currentBuffer[4] & parseInt("01100000",2)) >> 5;
      var pin = (board.currentBuffer[4] & parseInt("011111",2)) << 3 | (board.currentBuffer[5] & parseInt("0111",2));
      board.emit("ping-"+pin, pulse);
    }
    ```

### IR receiver - reporter 0xCB

  * Arduino values
    * int RECV_PIN = 11 then, pin for IR receiver is fixed

  * Launcher

    ```javascript
    //Reporter block
    board = this.context.board; //Definition should change according to the context
    board.once("IRrec", callback(data));
    board.transport.write(new Buffer(data));
    ```

  * Response definition

    ```javascript
    board = this.context.board; //Definition should change according to the context
    world.Arduino.firmata.SYSEX_RESPONSE[0xCB] = function(board) {
      var irResult = (board.currentBuffer[2] & 0x7F) << 25| (board.currentBuffer[3] & 0x7F) << 18 | (board.currentBuffer[4] & 0x7F) << 11 | (board.currentBuffer[5] & 0x7F) << 4 | (board.currentBuffer[6] & 0x7F) >> 3;
      board.emit("IRrec", irResult);
    }
    ```

### Enabling IR - command 0xCC

Enabling IR. It use timer2 and then, this disables PWM on digital pins 3 and 11
  
### Disabling IR - command 0xCD: Disabling IR

Enabling PWM on digital pins 3 and 11

### Sending IR - command 0xCE

  * Sending values
    * We send 4bytes (28 data bits)
	* 24 bits to send the *message* (6 hexadecimal digits)
	* 4 bits to send protocol type (coder)

  * Launcher
    
    ```javascript
    //Create blocs wit vars: message (24 bits) and coder (string encoded in a 4 bits integer)
    board = this.context.board;  //Definition should change according to the context
    if (message === undefined || coder === undefined) {
      throw new Error("Message and coder are required");
    }
	message = message & parseInt("FFFFFF",16);
	if (coder == "RC5") {
	  scoder = 1;
	} else if (coder == "RC6") {
	  scoder = 2;
	} else {
	  scoder = 0;
	}
    var data =[0xF0, //START_SYSEX
      		0xCE,  //Send IR
      		(message >> 17) & 0x7F,
      		(message >> 10) & 0x7F,
      		(message >> 3) & 0x7F,
      		((message << 4) & parseInt("01110000",2)) | (scoder & parseInt("01111",2)),
      		0xF7  //END_SYSEX
    ];
    board.transport.write(new Buffer(data));
    ```

### DHT11 - reporter 0xCF

Request humidity/temperature from DHT11 sensor
Based on http://playground.arduino.cc/Main/DHT11Lib

  * Arduino values
    * pin ->We use 6 bits (0-63)
    * param -> 1 bit. 0->Humidity, 1->Temperature
    * We need 7 data bits -> 1 byte (with 7 data-bits/byte)

  * Launcher
    
    ```javascript
    //Create blocs with vars: pin(2-63) and param (0-1)
    board = this.context.board;  //Definition should change according to the context
    if (pin === undefined || pin <= 1 || pin > 63) {
      throw new Error("Required var pin (2-63)");
    }
    board.once("DHT11-"+pin+"-"+param, callback(data));
    if (param != 1) param = 0;
    var data =[0xF0, //START_SYSEX
      		0xCF,  //DHT11 Command
      		((pin << 1) |  param)& 0x7F,
      		0xF7  //END_SYSEX
    ];
    board.transport.write(new Buffer(data));
    ```

  * Response definition

    ```javascript
    board = this.context.board; //Definition should change according to the context
    world.Arduino.firmata.SYSEX_RESPONSE[0xCF] = function(board) {
      var response = (board.currentBuffer[2] & 0x7F) << 1 | (board.currentBuffer[3] & 0x01);
      var pin = board.currentBuffer[4] >> 1;
      var param = board.currentBuffer[4] & 0x01;
      board.emit("DHT11-"+pin+"-"+param, response);
    }
    ```

