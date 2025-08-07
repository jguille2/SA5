#Arduino timers

  - Atmel AVR ATMega 168 or ATmega328 (**Arduino UNO**) have 3 timers.
  - Atmel AVR ATmega1280 or the ATmega2560 (**Arduino Mega**) have 6 timers.
  
  - **Timer0 and timer2 are 8bit** timers (resolution of 256 values) and timer1 (and 3, 4 and 5) are 16bit timers (65536 values).
  - [More Info](https://arduino-info.wikispaces.com/Timers-Arduino)
  
##Arduino UNO, timers and issues

  - Timer0: **PWM** of pins **5** and **6**; Functions **delay()**, **millis()** and **micros()**.
  - Timer1: **PWM** of pins **9** and **10**; **Servo** library (supports up to 12 motors).
  - Timer2: **PWM** of pins **11** and **3**; Functions **tone()** and **noTone()**.
  
##Arduino Mega, timers and issues

  - Timer0: **PWM** of pins **4** and **13**; Functions **delay()**, **millis()** and **micros()**.
  - Timer1: **PWM** of pins **11** and **12**; **Servo** library (from 13 to 24 servos).
  - Timer2: **PWM** of pins **9** and **10**; Functions **tone()** and **noTone()**.
  - Timer3: **PWM** of pins **2**, **3** and **5**; **Servo** libray (from 25 to 36 servos).
  - Timer4: **PWM** of pins **6**, **7** and **8**; **Servo** library(from 37 to 48 servos).
  - Timer5: **PWM** of pins **46**, **45** and **44**; **Servo** libray (first 12 servos).
  
##Other libaries

  - **IRremote** uses Timer2 interrupts.
  - We can use Timer1 and Timer3 libraries to make interruptions.
  - Tone alternatives libraries are:
    - [**Timer Free Tone**](https://bitbucket.org/teckel12/arduino-timer-free-tone/wiki/Home). It doesn't use timers, but implements blocking functions.
    - [**New Tone**](https://bitbucket.org/teckel12/arduino-new-tone/wiki/Home). Use Timer1.
    - [**ToneAC**](https://bitbucket.org/teckel12/arduino-toneac/wiki/Home). Use Timer1. More quality and volume (2 pins used).
    - [**ToneAC2**](https://bitbucket.org/teckel12/arduino-toneac2/wiki/Home). Use Timer2. Alternative to ToneAC.
    
##Libraries and functions management

Servos, Tone and other libraries (like IRremote) block their PWM pins(see timers). These pins continous working like normal digital pins.

we can't use libraries with interruptions in the same timer.
