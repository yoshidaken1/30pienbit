radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    if (receivedNumber == 0) {
        plenbit.stdMotion(plenbit.StdMotions.HighFive)
    }
    if (receivedNumber == 1) {
        plenbit.stdMotion(plenbit.StdMotions.Hug)
    }
    if (receivedNumber == 2) {
        plenbit.stdMotion(plenbit.StdMotions.AHem)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    radio.sendNumber(1)
    radio.sendNumber(2)
})
radio.setGroup(30)
