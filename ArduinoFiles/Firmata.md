# Arduino sketches and firmata library

## ImaginaFirmata.ino

  * Base: StandardFirmata.ino from Firmata 2.5.1 (26/12/2015) (Source: https://github.com/firmata/arduino)
  * Imagina global includes and vars
    * ArduinoNunchuk lib included from https://github.com/GabrielBianconi/ArduinoNunchuk
    * 
  * Marking digital pins with SWIFT mode (0x05) for firmware detection
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
      var data =[0xF0,//START_SYSEX,
		0xC0,//joyX command
		0xF7//END_SYSEX
	       ];
      board.transport.write(new Buffer(data));
      board.once("joyX", callback);
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
      var data =[0xF0,//START_SYSEX,
		0xC1,//joyY command
		0xF7//END_SYSEX
	       ];
      board.transport.write(new Buffer(data));
      board.once("joyY", callback);
      ```

      * Response definition

      ```javascript
      board = this.context.board; //Definition should change according to the context
      world.Arduino.firmata.SYSEX_RESPONSE[0xC1] = function(board) {
      var joyY = (board.currentBuffer[2] & 0x7F) | ((board.currentBuffer[3] & 0x7F) << 7);
      board.emit("joyY", joyY);
      }
      ```
  
  * Tone comand (0xC8) Implements tone(pin,frequency,*duration) and noTone(pin)
    * Arduino values
      * pin -> We use 1 byte (0-255)
      * frequency -> Hz -> unsigned int (2 bytes 0-65535) //Arduino Uno, min 32Hz
      * duration (optional) -> ms -> unsigned long (4 bytes 0-4294967)
    * Sending values
      * We send 56 bit -> We need 8 bytes with 7b/B data
      * Data: duration(32)-frequency(16)-pin(8)
      * Sending MSB -> LSB
    * Launcher
    
      ```javascript
      //Create blocs wit vars: pin, freq (frequency 0-65535 Hz) and dur (duration 0-4294967 mseg)
      board = this.board;  //Definition should change according to the context
      IMAGINA_BOARD = 0xC0;
      //if (board.pins[pin].supportedModes.indexOf(IMAGINA_BOARD) === -1) {
      //  throw new Error("Please upload ImaginaFirmata to the board");
      //}
      if (pin === undefined || freq === undefined || pin <= 0 || pin > 255 || freq < 0 || freq > 65535) {
        throw new Error("Required var pin (0-255) and frequency (0-65535)");
      }
      var dur = dur || 0;
      dur = dur & 0xFFFF; //clamping value to 32 bits
      var data =[0xF0, //START_SYSEX
      		0xC8,  //Tone Command
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

## Arduino libraries

  * Installing arduino libraries info: https://www.arduino.cc/en/Guide/Libraries
  * Tested wit Arduino IDE 1.6.7 (Download: https://www.arduino.cc/en/Main/Software - Source: https://github.com/arduino/Arduino)
  * Firmata lib upgraded (to 2.5.1) online by IDE
  * Copy 3rd party libs into path_to_sketchbook/libraries/

