# SA5
Snap! and Arduino 5ynchronized

## Firmata for S4AConnector Snap! extension

  - [S4AConnector](https://github.com/jguille2/snap_s4aConn) Snap! library allows us to connect "All Firmata Boards" to [Snap!](http://snap.berkeley.edu/)
  Then, you can connect all your UNO, Nano, Mega, Leonardo, Micro, Due, 101, ESP8266, NodeMCU... to your Snap! projects and dynamically control their functionalities.
  S4AConnector continues the work of Snap4Arduino project.
  - With **StandardFirmata** firmware we have enough to obtain the basic functionalities:
    - Read digital and analog pins.
    - Set ditital states (low or high)
    - Set values (0-255) to PWM pins
    - Manage servos (set angle or state)
  - These are the main blocks of this extension
  
![S4A Connector main blocks](https://github.com/jguille2/SA5/raw/master/historic/images/s4a_blocks.png)

  - And also, we can us
## SA5Firmata to extend firmata features

**[SA5 firmawares](https://github.com/jguille2/SA5/blob/master/sa5firmata/SA5Firmata.md)** extends firmata with:

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
  - Neopixels management

And then, with SA5 firmware we have extra blocks to manage our boards.

![SA5Firmata Blocks](https://github.com/jguille2/SA5/raw/master/historic/images/sa5firmata_blocks.png)


