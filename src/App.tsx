import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState(false)


    const changeCollapsed = () => setAccordionCollapsed(!accordionCollapsed)

    return (
        <div className={"App"}>
            <div className={'block'}>
                <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
                <Rating value={ratingValue} onClick={setRatingValue}/>
                <OnOff isOn={switchOn} onClick={setSwitchOn}/>
                <UncontrolledAccordion titleValue={'Menu'}/>
                {/*<UncontrolledRating onChange={}/>*/}
                <Accordion onChange={changeCollapsed}
                           items={[{title: 'Ignat', value: 1},{title: 'Artur', value: 2},{title: 'Anton', value: 3}, {title: 'Zhanna', value: 4}]}
                           titleValue={'Menu'}
                           collapsed={accordionCollapsed}
                           onClick={changeCollapsed}
                />
            </div>
        </div>
    );
}



export default App;
