import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={"App"}>
            <div className={'block'}>
                <OnOff/>
                <Rating value={ratingValue} onClick={setRatingValue}/>
                <UncontrolledAccordion titleValue={'Menu'}/>
                <UncontrolledRating/>
            </div>
        </div>
    );

}



export default App;
