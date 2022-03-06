import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

export const OnMode = () => <OnOff isOn={true} onClick={action('on or off clicked')}/>;
export const OffMode = () => <OnOff isOn={false} onClick={action('on or off clicked')}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff isOn={value} onClick={setValue}/>
};

