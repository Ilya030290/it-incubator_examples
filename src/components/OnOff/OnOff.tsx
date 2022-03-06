import React from 'react';

type OnOffPropsType = {
    isOn: boolean
    onClick: (On: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const buttonOnStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        marginTop: "5px",
        backgroundColor: props.isOn ? "green" : "white",
        marginLeft: "5px",
        borderRadius: "5px"
    }
    const buttonOffStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        marginTop: "5px",
        marginLeft: "5px",
        backgroundColor: props.isOn ? "white" : "red",
        borderRadius: "5px"
    }
    const radioButtonStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "20px",
        border: "1px black solid",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.isOn ? "green" : "red"
    }

    const onClickChangeButtonToOn = () => props.onClick(true)

    const onClickChangeButtonToOff = () => props.onClick(false)

    return (
        <div>
            <button style={buttonOnStyle} onClick={onClickChangeButtonToOn}>On</button>
            <button style={buttonOffStyle} onClick={onClickChangeButtonToOff}>Off</button>
            <div style={radioButtonStyle}></div>
        </div>
    );
};

