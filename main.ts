input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) >= 200 && pins.analogReadPin(AnalogPin.P1) <= 600) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
