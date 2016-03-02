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

## Arduino libraries

  * Installing arduino libraries info: https://www.arduino.cc/en/Guide/Libraries
  * Tested wit Arduino IDE 1.6.7 (Download: https://www.arduino.cc/en/Main/Software - Source: https://github.com/arduino/Arduino)
  * Firmata lib upgraded (to 2.5.1) online by IDE
  * Copy 3rd party libs into path_to_sketchbook/libraries/

