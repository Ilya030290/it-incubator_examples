import React, {useState} from 'react';

const OnOff = () => {
    let [on, setOn] = useState(false)

    const buttonOnStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        marginTop: "5px",
        backgroundColor: on ? "green" : "white",
        marginLeft: "5px",
        borderRadius: "5px"
    }
    const buttonOffStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        marginTop: "5px",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red",
        borderRadius: "5px"
    }
    const radioButtonStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "20px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }
    return (
        <div>
            <button style={buttonOnStyle} onClick={() => setOn(true)}>On</button>
            <button style={buttonOffStyle} onClick={() => setOn(false)}>Off</button>
            <div style={radioButtonStyle}></div>
        </div>
    );
};

export default OnOff;