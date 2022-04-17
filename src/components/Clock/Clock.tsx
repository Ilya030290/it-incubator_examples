import React, {useEffect, useState} from 'react';

type PropsType = {
    title: string
}

const getTwoDigitsString = (num: number) => num < 10 ? "0" + num : num;

export const Clock: React.FC<PropsType> = ({title}) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <div>
            {title}:
            <span style={{paddingLeft: '10px'}}>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
}

