# SA5
Snap! and Arduino 5ynchronized

## Working with Snap! and Arduino

  - [Snap4Arduino](http://snap4arduino.rocks) allows us to work with [Snap!](http://snap.berkeley.edu/) and [Arduino](https://www.arduino.cc/)  together. There are [downloads](http://s4a.cat/snap/#download) for Linux, Mac and Windows.
  - Snap! is a very customizable tool. You can **create your own custom blocks** and also you can **hide primitive** ones. Then, the **starting point** of the work with Snap4Arduino is not unique and it can be adapted to different levels of education, different projects, boards...
  - Snap4Arduino uses **StandardFirmata** firmware to connect our PC with the Arduino board. This implement several basic functions:
    - Read digital and analog pins.
    - Set ditital states (low or high)
    - Set values (0-255) to PWM pins
    - Manage servos (set angle or state)

!(Snap4Arduino Blocks)[images/sa4_blocks.png)

## SA5Firmata

[Download, Install and more Info](https://github.com/jguille2/SA5/blob/master/firmata/SA5Firmata.md)

Extends firmata with:

  - Tone functions.
  - PulseIn function.
  - A pulseOut function (send a microseconds pulse)
  - Ping function to read distance from Ultrasonic sensors.
  - Read Nunchuk sensors (joyX, joyY, butZ, butC, accX, accY and accZ) from I2C connection.
  - Read humidity and temperature from a DHT11 sensor.
  - Send IR messages by a IR emitter on pin 3. Sony and RC5 protocols availables.
  - Read IR message from a IR recevier on pin 11.
  - You can Enable/Disable IR receiving, to leave free timer 2 and enable PWM on pins 3 and 11.
  - Servo library hacked, to avoid "the detach" disconnecting servos. Then PWM on pins 9 and 10 are again available. 

!(SA5Firmata Blocks)[images/sa5firmata_blocks.png)

## Another "Firmata" boards

Snap4Arduino can connect with any device that can run firmata software (not only Arduinos). For example, ESP8266 (and then, nodeMCU) are easily connectable.

## Serial connections

We need a serial connection with the devices that we connect. Usually is a USB connection, but we can also use a serial connection by Bluetooth.

Also, we can use a network connection if these connection offers a serial signal (we can build this with a ESP8266 as a wifi module).

## Working with Snap! and Picaxe

We can use S2P Picaxe software (made to sync Scratch and Picaxe) and work with Snap!. More info [here](https://github.com/jguille2/SA5/blob/master/Picaxe/README.md).

## Working with Snap! and other devices

Using [S2Bot](http://www.picaxe.com/Teaching/Other-Software/Scratch-Helper-Apps) you can play with Snap! and other devices like BBC Microbit, LEGO WeDo (1 and 2.0) and Boost...

