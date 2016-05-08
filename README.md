# SA5
Scratch/Snap and Arduino Synchronized

## Working with Snap! and Arduino

  - [Snap4Arduino](http://s4a.cat/snap/) from [citilab](http://citilab.eu/) allows us to work with [Snap!](http://snap.berkeley.edu/) and [Arduino](https://www.arduino.cc/)  together. There are [downloads](http://s4a.cat/snap/#download) for Linux, Mac and Windows.
  - Snap! is a very customizable tool. You can **create your own custom blocks** and also you can **hide primitive** ones. Then, the **starting point** of the work with Snap4Arduino is not unique and it can be adapted to different levels of education, different projects, boards...
  - Snap4Arduino uses **StandardFirmata** firmware to connect our PC with the Arduino board. But firmata has different limitations. You can build different *firmatas* with their *snap blocks* to implement further funcionalities. We have built **ImaginaFirmata** to implement Arduino functions **tone**, **noTone** and **pulseIn**, *microtime functions* like **pulseOut** and **ping** (useful with ultrasonic sensors), **nunchuck** library (reading their 7 sensors) and **IR** library (to send and receive data).

## ImaginaFirmata

  - We have [ImaginaFirmata-beta-0.5](https://github.com/jguille2/SA5/files/254164/ImaginaFirmata0.5.zip).
  - Inside the *zip file -Firmware folder* you have **ImaginaFirmata.ino** and the custom libraries used. You must put this libraries in your user Arduino folder (more info about working with libraries [here](http://www.arduino.cc/en/Guide/Libraries)).
  - With *ImaginaFirmata firmware* you can use Snap4Arduino as usual. But in the *zip file - SnapFiles folder* you have ***blocks_nun-tone-pulses-ping.xml*** *file* to implement new features. Also, you have *blocks_imagina.xml file* with more blocks adapted to ImaginaArduino board.

  
## Working with Snap! and Picaxe

We can use S2P Picaxe software (made to sync Scratch and Picaxe) and work with Snap!. More info here.
