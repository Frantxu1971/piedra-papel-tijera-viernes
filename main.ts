input.onButtonPressed(Button.A, function () {
    Tirada += 1
    if (Tirada > 3) {
        Tirada = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    tirada_CPU = randint(1, 3)
    if (Tirada == tirada_CPU) {
        basic.showIcon(IconNames.Meh)
    } else if (Tirada == 1 && tirada_CPU == 3) {
        basic.showIcon(IconNames.Fabulous)
    } else if (Tirada == tirada_CPU + 1) {
        basic.showIcon(IconNames.Fabulous)
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
/**
 * 1 Piedra
 * 
 * 2 Papel
 * 
 * 3 Tijera
 */
let tirada_CPU = 0
let Tirada = 0
Tirada = 1
basic.forever(function () {
    if (Tirada == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # #
            . # # # .
            `)
    } else if (Tirada == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
