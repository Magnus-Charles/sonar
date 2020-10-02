// Created by: magnus
// Created on: Oct 2020
// 
// This program is used to find distance with a sonar
let distance_to_object = 0
basic.showIcon(IconNames.Square)
basic.pause(200)
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
})
