/**
 * 1 Piedra
 * 
 * 2 Papel
 * 
 * 3 Tijera
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (recibir == 0) {
        recibir += 1
        tirada_2 = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    Tirada += 1
    if (Tirada > 3) {
        Tirada = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    tirada_2 = randint(1, 3)
    if (Tirada == tirada_2) {
        basic.showIcon(IconNames.Meh)
    } else if (Tirada == 1 && tirada_2 == 3) {
        basic.showIcon(IconNames.Fabulous)
    } else if (Tirada == tirada_2 + 1) {
        basic.showIcon(IconNames.Fabulous)
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
input.onButtonPressed(Button.B, function () {
    if (enviar == 0) {
        enviar += 1
        radio.sendNumber(Tirada)
    }
})
let tirada_2 = 0
let enviar = 0
let recibir = 0
let Tirada = 0
Tirada = 1
radio.setGroup(2)
recibir = 0
enviar = 0
basic.forever(function () {
    if (enviar == 1 && recibir == 1) {
        if (Tirada == tirada_2) {
            basic.showIcon(IconNames.Meh)
        } else if (Tirada == 1 && tirada_2 == 3) {
            basic.showIcon(IconNames.Fabulous)
        } else if (Tirada == tirada_2 + 1) {
            basic.showIcon(IconNames.Fabulous)
        } else {
            basic.showIcon(IconNames.Angry)
        }
        basic.pause(2000)
        enviar = 0
        recibir = 0
        Tirada = 1
        tirada_2 = 0
    }
})
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
