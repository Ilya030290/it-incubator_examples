import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const changeCollapsed = () => dispatch({type: "TOGGLE-COLLAPSED"})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={changeCollapsed}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
