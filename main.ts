basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(500)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
