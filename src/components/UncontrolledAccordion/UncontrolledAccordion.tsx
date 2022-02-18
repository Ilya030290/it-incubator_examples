import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const changeCollapsed = () => setCollapsed(!collapsed)
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={changeCollapsed}>TOGGLE</button>
            { !collapsed && <AccordionBody/> }
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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
export default UncontrolledAccordion;