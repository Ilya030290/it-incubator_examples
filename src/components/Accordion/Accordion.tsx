import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
                { !props.collapsed && <AccordionBody/> }
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    const onClickChangeAccordion = () => {props.onClick()}

    return (
            <h3 onClick={onClickChangeAccordion}>{props.title}</h3>
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
export default Accordion;
