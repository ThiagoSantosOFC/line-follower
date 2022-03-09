function display_obstacle () {
    basic.showNumber(obstacle_count)
}
let obstacle_count = 0
let speed = 0
let is_stoped = false
basic.forever(function () {
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        speed = 30
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, speed)
        is_stoped = false
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        speed = 30
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, speed)
        is_stoped = false
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        speed = 44
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, speed)
        is_stoped = false
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        if (is_stoped == false) {
            mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
            obstacle_count += 1
            is_stoped = true
            display_obstacle()
        } else {
            mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        }
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
