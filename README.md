# SA5
Snap!/Scratch and Arduino Synchronized

## Working with Snap! and Arduino

  - [Snap4Arduino](http://s4a.cat/snap/) from [citilab](http://citilab.eu/) allows us to work with [Snap!](http://snap.berkeley.edu/) and [Arduino](https://www.arduino.cc/)  together. There are [downloads](http://s4a.cat/snap/#download) for Linux, Mac and Windows.
  - Snap! is a very customizable tool. You can **create your own custom blocks** and also you can **hide primitive** ones. Then, the **starting point** of the work with Snap4Arduino is not unique and it can be adapted to different levels of education, different projects, boards...
  - Snap4Arduino uses **StandardFirmata** firmware to connect our PC with the Arduino board. This implement several basic functions:
    - Read digital and analog pins.
    - Set ditital states (low or high)
    - Set values (0-255) to PWM pins
    - Manage servos (set angle or state)


## SA5Firmata

[Download, Install and more Info](https://github.com/jguille2/SA5/blob/master/firmata/SA5Firmata.md)

Extends firmata with:

  - Tone functions. It doesn't use standard arduino commands, to leave free timer2 and implements IR library.
  - PulseIn function.
  - A pulseOut function (send a microseconds pulse)
  - Ping function to read distance from Ultrasonic sensors.
  - Read Nunchuk sensors (joyX, joyY, butZ, butC, accX, accY and accZ) from I2C connection.
  - Read humidity and temperature from a DHT11 sensor.
  - Send IR messages by a IR emitter on pin 3. Sony and RC5 protocols availables.
  - Read IR message from a IR recevier on pin 11.
  - You can Enable/Disable IR receiving, to leave free timer 2 and enable PWM on pins 3 and 11.
  - Servo library hacked, to avoid "the detach" disconnecting servos. Then PWM on pins 9 and 10 are again available. 

## Working with Snap! and Picaxe

We can use S2P Picaxe software (made to sync Scratch and Picaxe) and work with Snap!. More info [here](https://github.com/jguille2/SA5/blob/master/Picaxe/README.md).


## ImaginaFirmata (deprecated)

  - We have [ImaginaFirmata-beta-0.5](https://github.com/jguille2/SA5/files/254164/ImaginaFirmata0.5.zip).
  - Inside the *zip file -Firmware folder* you have **ImaginaFirmata.ino** and the custom libraries used. You must put this libraries in your user Arduino folder (more info about working with libraries [here](http://www.arduino.cc/en/Guide/Libraries)).
  - With *ImaginaFirmata firmware* you can use Snap4Arduino as usual. But in the *zip file - SnapFiles folder* you have ***blocks_nun-tone-pulses-ping.xml*** *file* to implement new features. Also, you have *blocks_imagina.xml file* with more blocks adapted to ImaginaArduino board.
