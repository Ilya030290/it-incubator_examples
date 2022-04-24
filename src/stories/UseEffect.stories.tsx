import React, {useState, useEffect} from "react";


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1);
    const [value, setValue] = useState(1);

    console.log("Simple Example");
    // Примеры срабатывания useEffect
    useEffect(() => {
        console.log("useEffect render every time");
    })

    useEffect(() => {
        console.log("useEffect render only first Time");
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every time when was changed counter");
    }, [counter])

    useEffect(() => {
        console.log("useEffect first render and every time when was changed value");
    }, [value])

    return (
        <>
            <div>
                Hello Value: {value}
                <button onClick={() => setValue(value * 2)}>Value x2</button>
            </div>
            <div>
                Hello Counter: {counter}
                <button onClick={() => setCounter(counter + 1)}>Counter +</button>
            </div>
        </>
    )

}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1);
    const [value, setValue] = useState(1);

    console.log("SetTimeout Example");

   useEffect(() => {

       const timeoutId = setTimeout(() => {
           console.log("SetTimeout");
       }, 1500);

       return clearTimeout(timeoutId);
    }, [value])

    useEffect(() => {
        const intervalId = setInterval(() => {

            console.log("SetInterval");
            setCounter((state) => state + 1);
        }, 2000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])


    return (
        <>
            <div>
                Hello Value: {value}
                <button onClick={() => setValue(value * 2)}>Value x2</button>
            </div>
            <div>
                Hello Counter: {counter}
            </div>
        </>
    )

}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState<number>(1);

    console.log("Component rendered");

    useEffect(() => {
        console.log("Effect occurred:" + counter);
        return () => {
            console.log("RESET Effect")
        }
    }, [counter]);

    const increase =() => {
        setCounter(counter + 1);
    }

    return (
      <>
          Hello, counter: {counter} <button onClick={increase}>+</button>
      </>
    );
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState<string>('');

    console.log("Component rendered with" + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key);
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text]);

    return (
        <>
            Typed text: {text}
        </>
    );
}