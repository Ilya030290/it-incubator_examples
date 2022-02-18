import React from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className={"App"}>
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledRating />
        </div>
    );

}

type PageTitlePropsType = {
    title: string
}


function PageTitle(props:PageTitlePropsType) {
    return (
        <h1>{ props.title }</h1>
    );
}


export default App;
