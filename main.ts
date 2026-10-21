input.onButtonPressed(Button.A, function () {
    if (registrados < 25) {
        presentes = presentes + 1
        registrados = registrados + 1
        basic.showNumber(presentes)
    } else {
        basic.showString("\"completo\"")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(presentes)
    basic.showNumber(ausentes)
})
input.onButtonPressed(Button.B, function () {
    if (registrados < 25) {
        fijar_ausentes = ausentes + 1
        registrados = registrados + 1
        basic.showNumber(presentes)
    } else {
        basic.showString("\"completo\"")
    }
})
let fijar_ausentes = 0
let registrados = 0
let ausentes = 0
let presentes = 0
presentes = 0
ausentes = 0
registrados = 0
basic.forever(function () {
    if (registrados < 25) {
        basic.showString("\"REGISTRANDO\"")
    } else {
        if (presentes == 22) {
            basic.showString("\"ASISTENCIA ALTA\"")
        } else {
            if (true) {
            	
            } else {
            	
            }
        }
    }
})
