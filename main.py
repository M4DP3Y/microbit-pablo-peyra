i = 0
a = 0
bclicked = 0
atimes = 0

def interact(base: number, altura: number):
    hipotenusa = (base**2 + altura**2)**(1/2)
    basic.clear_screen()
    basic.show_string("Hipotenusa = " + str(hipotenusa))

def numElements():
    global atimes, bclicked
    while bclicked < 1:
        if input.button_is_pressed(Button.A):
            basic.show_string("A")
            basic.clear_screen()
            atimes += 1
            basic.show_string("B y A = " + str(atimes))
        elif input.button_is_pressed(Button.B):
            basic.show_string("B")
            bclicked += 1
            basic.show_string("Calculanto... " + str(atimes))
        basic.pause(50)
    basic.clear_screen()
    interact(atimes, atimes)
    basic.pause(500)

def showIcon():
    basic.clear_screen()
    music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
        MelodyOptions.ONCE)
    for index in range(4):
        basic.show_icon(IconNames.SMALL_DIAMOND)
        basic.pause(100)
        basic.show_icon(IconNames.DIAMOND)
        basic.pause(100)
    basic.clear_screen()

def on_forever():
    global atimes, bclicked
    music.set_built_in_speaker_enabled(True)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.show_string("A para base y altura, B para mostrar Hipotenusa")
    numElements()
    
basic.forever(on_forever)