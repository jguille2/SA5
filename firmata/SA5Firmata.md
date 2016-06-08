# SA5Firmata
## Libraries
  - We tested using Arduino IDE 1.6.9 from [arduino.cc](https://www.arduino.cc/en/Main/Software) and 1.7.10 from [arduino.org](http://www.arduino.org/downloads).
  - [Firmata](https://github.com/firmata/arduino). Version 2.5.2 (16/02/2016)
  - [IRremote](https://github.com/z3t0/Arduino-IRremote) Version 2.1.0 (20/02/2016)
  - [Nunchuck](https://github.com/GabrielBianconi/ArduinoNunchuk). Version 25/03/2014
  - [Servo](https://github.com/arduino/Arduino/tree/master/libraries/Servo). Version 1.1.2 (08/03/2016) hacked to allow PWM after detaching.

  You can download directly this libraries, copying *libraries* folder to your *Arduino* folder

## SA5Firmata.ino

Notes:
- Added includes for IRremote and Nunchuck libs and create their objects
- Added mark (in *SYSEX* command *CAPABILITY_QUERY* (digital pins in SA5Firmata have SHIFT (0x05) mode available like a mark)
- Added *SYSEX* commands (from 0xC0 to 0xCF)
- Added setup code for *nunchuk* inicialization.