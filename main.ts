basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 800)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 300)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 100)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 100)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 300)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 800)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(200)
})
