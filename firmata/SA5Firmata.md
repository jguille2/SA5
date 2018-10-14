#SA5Firmata version 5  - Snap4Arduino 1.2.7

Extending StandardFirmata functions for Snap4Arduino.

## Features

### StandarFirmata:

  - Read digital and analog pins.
  - Set ditital states (low or high)
  - Set values (0-255) to PWM pins
  - Manage servos (set angle or state)

!(Snap4Arduino Blocks)[https://github.com/jguille2/SA5/raw/master/images/sa4_blocks.png)

### SA5Firmata extends:

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

!(SA5Firmata Blocks)[https://github.com/jguille2/SA5/raw/master/images/sa5firmata_blocks.png)

### Two flavours

**SA5Firmata_ir** offers all these features (with **IR** features), but _tone_ is not the standard arduino command, to leave free timer2 and implements IR library. So _tone_ is here a blocking (and more limited) function.

**SA5Firmata_tone** has not the _IR_ features but, on the other hand, it uses standard _tone_ function and so, **Tone** is not limited.

## Download and Install

Snap4Arduino 1.2.7 (and above) offers SA5Firmata blocks into its _libraries..._
!(SA5Firmata library)[https://github.com/jguille2/SA5/raw/master/images/sa5firmataLibrary.png]

You can also get that _xml_ files from this download.

But remember! SA5Firmata firmware must be uploaded (only one time!) to your device to get this extra functions enabled. So...

  - Download [SA5Firmata version 5](https://github.com/jguille2/SA5/raw/master/firmata/SA5Firmata_5.zip) and unzip it.
  - To add the specific libraries required to your Arduino IDE, copy directly the _libraries_ folder to your *Arduino* folder. You need Arduino IDE version 1.6.9 or higher from [arduino.cc](https://www.arduino.cc/en/Main/Software)
  - Using Arduino IDE, upload *SA5Firmata_tone.ino* or *SA5Firmata_ir.ino* to your board.
  - Open Snap4Arduino (you can download it [here](http://snap4arduino.rocks))
  - Open _Libraries..._ from Snap4Arduino File menu. You  can choose SA5Firmata or SA5FirmataIR
  - Load the *xml* file with the blocks created for SA5Firmata. *SA5Firmata_bs2.xml* have the basic blocks under Arduino category.
  
## Previous versions

To use SA5Firmata with previous Snap4Arduino versions (1.2.6 or earlier) you can use 
  - You can use [SA5Firmata_tone 2.1](https://github.com/jguille2/SA5/raw/master/firmata/SA5Firmata_tone_2.1.zip) and [SA5Firmata_ir 2.1](https://github.com/jguille2/SA5/raw/master/firmata/SA5Firmata_2.1.zip)

## Libraries dependences

  - [Firmata](https://github.com/firmata/arduino) version 2.5.2 (16/02/2016)
  - [IRremote](https://github.com/z3t0/Arduino-IRremote) version 2.1.0 (20/02/2016)
  - [Nunchuck](https://github.com/GabrielBianconi/ArduinoNunchuk) version 25/03/2014
  - [Servo](https://github.com/arduino/Arduino/tree/master/libraries/Servo) version 1.1.2 (08/03/2016) hacked to allow PWM after detaching

  You can download directly this libraries, copying *libraries* folder to your *Arduino* folder


