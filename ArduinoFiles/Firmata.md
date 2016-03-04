# Arduino sketches and firmata library

## ImaginaFirmata.ino

  * Base: StandardFirmata.ino from Firmata 2.5.1 (26/12/2015) (Source: https://github.com/firmata/arduino)
  * Imagina global includes and vars
    * define IMAGINA_BOARD to 0xC0
    * ArduinoNunchuk lib included from https://github.com/GabrielBianconi/ArduinoNunchuk
    * 
  * Marking digital pins with IMAGINA_BOARD mode for firmware detection
    * When code requires ImaginaFirmata firmware, we can use:

    ```javascript
    if (this.pins[pinVar].supportedModes.indexOf(IMAGINA_BOARD) === -1) {
        throw new Error("Please upload ImaginaFirmata to the board");
    }
    ```

  * Nunchuk commands (0xC1 to 0xC7)
    * JoyX 0xC1
      * Launcher
    
    ```javascript
    this.JoyX = function(callback) {
        var data =[
		          0xF0,//START_SYSEX,
		          0xC1,//JoyX command
		          0xF7//END_SYSEX
	       ];
        this transport.write(new Buffer(data));
        this.once("JoyX", callback);
      };
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
      //Create blocs wit vars: pin, frequency and duration
      if (this.pins[pin].supportedModes.indexOf(IMAGINA_BOARD) === -1) {
        throw new Error("Please upload ImaginaFirmata to the board");
      }
      if (pin === undefined || frequency === undefined || pin <= 0 || pin > 255 || frequency <= 0 || frequency > 65535) {
        throw new Error("Required var pin (0-255) and frequency (0-65535)");
      }
      var duration = duration || 0;
      duration = duration & 0xFF; //clamping value to 32 bits
      //TODO var data =[	0xF0,
      //			0xC8,
      //			
      ```
## Arduino libraries

  * Installing arduino libraries info: https://www.arduino.cc/en/Guide/Libraries
  * Tested wit Arduino IDE 1.6.7 (Download: https://www.arduino.cc/en/Main/Software - Source: https://github.com/arduino/Arduino)
  * Firmata lib upgraded (to 2.5.1) online by IDE
  * Copy 3rd party libs into path_to_sketchbook/libraries/

