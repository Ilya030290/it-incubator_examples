import React from 'react';


type ItemType = {
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    const onClickChangeAccordion = () => {props.onChange()}

    return (
            <h3 onClick={onClickChangeAccordion}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
            <ul>
                {props.items.map((i, index) => {
                 return (
                     <li onClick={() => {props.onClick(i.value)}}
                         key={index}>
                         {i.title}
                     </li>)}
                )}
            </ul>
    );
}

