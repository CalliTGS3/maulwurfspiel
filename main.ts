input.onButtonPressed(Button.A, function () {
    if (GebeTastenFrei == 1) {
        if (Zufall == 0) {
            Treffer = 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Spielstand)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    if (GebeTastenFrei == 1) {
        if (Zufall == 1) {
            Treffer = 1
        }
    }
})
let Treffer = 0
let Zufall = 0
let GebeTastenFrei = 0
let Spielstand = 0
Spielstand = 0
basic.forever(function () {
    Treffer = 0
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    Zufall = randint(0, 1)
    if (Zufall == 0) {
        led.plot(0, 2)
    } else {
        led.plot(4, 2)
    }
    GebeTastenFrei = 1
    for (let Index = 0; Index <= 10; Index++) {
        basic.pause(50)
    }
    GebeTastenFrei = 0
    if (Treffer == 1) {
        Spielstand += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
})
