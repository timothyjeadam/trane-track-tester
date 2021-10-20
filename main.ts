basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        led.toggle(4, 4)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        led.toggle(2, 2)
    }
})
