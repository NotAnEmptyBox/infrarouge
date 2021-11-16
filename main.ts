let bool = 0
input.onButtonPressed(Button.A, function () {
    bool = 0
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        bool = 1
    }
    if (bool == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
