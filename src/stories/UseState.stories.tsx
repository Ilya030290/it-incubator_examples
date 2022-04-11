import React, {useState} from "react";

export default {
    title: "useState demo"
}


const generateData = () => {
    let randomCount = Math.random();
    console.log("generateData");
    return randomCount;
}

export const Example1 = () => {

    console.log("Example1");


    const [counter, setCounter] = useState(generateData);

    const changerOfCounter = (state: number) => {
        let randomValue = Math.round(Math.random() * 10) * 5;
        return state + randomValue;
    }

    return (
        <>
            <button onClick={() => setCounter(changerOfCounter)}>+</button>
            {counter}
        </>
    )
}

