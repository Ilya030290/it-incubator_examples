import React from "react";
import {ClockViewPropsType} from "./Clock";


const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num;

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>Digital clock</span>:
            <span style={{paddingLeft: '10px'}}>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </>
    );
}