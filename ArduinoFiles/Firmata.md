# Arduino sketches and firmata library

## ImaginaFirmata.ino

  * Base: StandardFirmata.ino from Firmata 2.5.1 (26/12/2015) (Source: https://github.com/firmata/arduino)
  * Other libraries:
    * ArduinoNunchuk lib included from https://github.com/GabrielBianconi/ArduinoNunchuk
    * IRremote 2.1.0 from https://github.com/z3t0/Arduino-IRremote
    * TimerFreeTone v1.3 beta from https://bitbucket.org/teckel12/arduino-timer-free-tone/wiki/Home

  * Marking digital pins with SHIFT mode (0x05) for firmware detection
    * When code requires ImaginaFirmata firmware, we can use:

    ```javascript
    board = this.context.board; //Definition should change according to the context
    if (board.pins[pin].supportedModes.indexOf(0x05) === -1) {
        throw new Error("Please upload ImaginaFirmata to the board and use a digital pin");
    }
    ```

    or without a referenced *pin*

    ```javascript
    board = this.context.board; //Definition should change according to the context
    var checkedFirmware = false;
    for (i = 2; i < (board.pins.length - 1); i++) {
        if (!(board.pins[i].supportedModes.indexOf(0x05) === -1)) {
           checkedFirmware = true;
           break;
        }
    }
    if (!checkedFirmware) {
        throw new Error("Please upload ImaginaFirmata to the board");
    }
    ```

  * Nunchuk commands (0xC0 to 0xC6)
    * joyX 0xC0

      * Value: return 1 byte. From 0 (left position) to 255 (right position). Center = 128

      * Launcher
    
      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("joyX", callback(data));
      var sdata =[0xF0,//START_SYSEX,
				0xC0,//joyX command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC0] = function(board) {
      	var joyX = (board.currentBuffer[2] & 0x7F) | ((board.currentBuffer[3] & 0x7F) << 7);
      	board.emit("joyX", joyX);
      }
      ```

    * joyY 0xC1

      * Value: return 1 byte. From 0 (down) to 255 (up). Center = 128

      * Launcher
    
      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("joyY", callback(data));
      var sdata =[0xF0,//START_SYSEX,
				0xC1,//joyY command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC1] = function(board) {
      	var joyY = (board.currentBuffer[2] & 0x7F) | ((board.currentBuffer[3] & 0x7F) << 7);
      	board.emit("joyY", joyY);
      }
      ```

    * butZ 0xC2

      * Value: return 1 bit. 0 -> NonPressed, 1 -> Pressed

      * Launcher

      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("butZ", callback(data));
      var sdata =[0xF0,//START_SYSEX,
				0xC2,//butZ command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC2] = function(board) {
      	var butZ = (board.currentBuffer[2] & 0x7F);
      	board.emit("butZ", butZ);
      }
      ```

    * butC 0xC3

      * Value: return 1 bit. 0 -> NonPressed, 1 -> Pressed

      * Launcher

      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("butC", callback(data));
      var sdata =[0xF0,//START_SYSEX,
				0xC3,//butC command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC3] = function(board) {
      	var butC = (board.currentBuffer[2] & 0x7F);
      	board.emit("butC", butC);
      }
      ```

    * accX 0xC4

      * Value: return 10 bits. Resting [left->280, center->508, right->736] -> acceleration increases values in the same direction

      * Launcher

      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("accX", callback(data));
      var sdata =[0xF0,//START_SYSEX,
				0xC4,//accX command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC4] = function(board) {
      	var accX = (board.currentBuffer[2] & 0x7F) | ((board.currentBuffer[3] & 0x7F) << 7);
      	board.emit("accX", accX);
      }
      ```

    * accY 0xC5

      * Value: return 10 bits. Resting [back->280, center->508, front->736] -> acceleration increases values in the same direction

      * Launcher

      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("accY", callback(data));
      var sdata =[0xF0,//START_SYSEX
				0xC5,//accY command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC5] = function(board) {
      	var accY = (board.currentBuffer[2] & 0x7F) | ((board.currentBuffer[3] & 0x7F) << 7);
      	board.emit("accY", accY);
      }
      ```

    * accZ 0xC6

      * Value: return 10 bits. Resting [down->280, middle->508, up->736] -> acceleration increases values in the same direction

      * Launcher

      ```javascript
      board = this.context.board; //Definition should change according to the context
      board.once("accZ", callback(data));
      var sdata =[0xF0,//START_SYSEX
				0xC6,//accZ command
				0xF7//END_SYSEX
	  ];
      board.transport.write(new Buffer(sdata));
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC6] = function(board) {
      	var accZ = (board.currentBuffer[2] & 0x7F) | ((board.currentBuffer[3] & 0x7F) << 7);
      	board.emit("accZ", accZ);
      }
      ```

  
  * Tone comand (0xC7) Implements tone(pin,frequency,*duration) and noTone(pin)
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
    
    * Arduino Sysex
      * Var types: pin->byte (8bits), freq->unsigned int (16bits) and dur->unsigned long (32bits)

  * PulseIn command 0xC8

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
  * microsecondsPulseOut command 0xC9

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
  * Ping command 0xCA

    * Arduino values
      * pinSen -> 1 byte (2-255) for sender pin
      * pinRec -> 1 byte (2-255) for receiver pin
      * pulse -> pulse length response in microseconds -> 2 bytes (0-65535). The maximum distance detected from sensor is about 4m -> 8m of sound tour. 10m would be (29,41µs/cm) 29,41 ms
      * time1 (time before sended pulse) -> 5 bits (0-31) microseconds (typical value is 2 µs)
      * time2 (time of the sended pulse) -> 5 bits (0-31) microseconds (typical value is 5 µs)

    * Launcher
    
      ```javascript
      //Create blocs wit vars: pinSen, pinRec (2-255), time1 and time2 (0-31 microseconds)
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
  * IR receiver command 0xCB

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

## Arduino libraries

  * Installing arduino libraries info: https://www.arduino.cc/en/Guide/Libraries
  * Tested wit Arduino IDE 1.6.7 (Download: https://www.arduino.cc/en/Main/Software - Source: https://github.com/arduino/Arduino)
  * Firmata lib upgraded (to 2.5.1) online by IDE
  * Copy 3rd party libs into path_to_sketchbook/libraries/

