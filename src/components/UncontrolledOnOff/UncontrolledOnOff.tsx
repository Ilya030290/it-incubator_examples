import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}

const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={buttonOnStyle}
                    onClick={onClicked}>
                On
            </button>
            <button style={buttonOffStyle}
                    onClick={offClicked}>
                Off
            </button>
            <div style={radioButtonStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;