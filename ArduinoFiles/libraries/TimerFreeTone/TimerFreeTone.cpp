// ---------------------------------------------------------------------------
// Created by Tim Eckel - teckel@leethost.com
// Copyright 2016 License: GNU GPL v3 http://www.gnu.org/licenses/gpl-3.0.html
//
// See "TimerFreeTone.h" for purpose, syntax, version history, links, and more.
// ---------------------------------------------------------------------------

#include "TimerFreeTone.h"

void TimerFreeTone(uint8_t pin, unsigned long frequency, unsigned int duration) {
	if (!frequency) { delay(duration); return; }               // Frequency is false (zero), nothing to play, just delay for duration and return.
	uint32_t notch = 500000 / frequency;                       // Calculate how fast to toggle the pin.
	uint32_t loops = ((unsigned long)duration * 500L) / notch; // Calculate the number of loops to run.
#ifdef __AVR__
	uint8_t pinBit = digitalPinToBitMask(pin);                                  // Get the bitmask for the pin.
	uint8_t *pinOutput = (uint8_t *) portOutputRegister(digitalPinToPort(pin)); // Get the port register for the pin.
	uint8_t *portMode = (uint8_t *) portModeRegister(digitalPinToPort(pin));    // Get the port mode register for the pin.
	*portMode |= pinBit;                                                        // Set pin to output mode.
#else
	pinMode(pin, OUTPUT);                                                       // Set pin to output mode.
#endif
	for (uint32_t i=0; i<loops; i++) { // Loop for the desired number of loops.
	#ifdef __AVR__
		*pinOutput |= pinBit;          // Set pin high.
		delayMicroseconds(notch);      // Square wave duration (how long to leave pin high).
		*pinOutput &= ~pinBit;         // Set pin low.
	#else
		digitalWrite(pin,HIGH);        // Set pin high.
		delayMicroseconds(notch);      // Square wave duration (how long to leave pin high).
		digitalWrite(pin,LOW);         // Set pin low.
	#endif
		delayMicroseconds(notch);      // Square wave duration (how long to leave pin low).
	}
}