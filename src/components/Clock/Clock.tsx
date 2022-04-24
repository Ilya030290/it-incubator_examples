import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: "analog" | "digital"
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = ({mode}) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    let clockModeView;
    switch (mode) {
        case "analog":
            clockModeView = <AnalogClockView date={date}/>;
            break;
        case "digital":
        default:
            clockModeView = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {clockModeView}
        </div>
    );
}



