let i = 0
let a = 0
let bclicked = 0
let atimes = 0
function interact(base: number, altura: number) {
    let hipotenusa = (base ** 2 + altura ** 2) ** (1 / 2)
    basic.clearScreen()
    basic.showString("Hipotenusa = " + ("" + hipotenusa))
}

function numElements() {
    
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            atimes += 1
            basic.showString("B y A = " + ("" + atimes))
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            bclicked += 1
            basic.showString("Calculanto... " + ("" + atimes))
        }
        
        basic.pause(50)
    }
    basic.clearScreen()
    interact(atimes, atimes)
    basic.pause(500)
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
    }
    basic.clearScreen()
}

basic.forever(function on_forever() {
    
    music.setBuiltInSpeakerEnabled(true)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.showString("A para base y altura, B para mostrar Hipotenusa")
    numElements()
})
