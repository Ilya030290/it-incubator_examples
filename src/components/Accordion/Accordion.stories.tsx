import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion collapsed={true} onClick={callback} titleValue={'Menu'}/>

export const UsersUnCollapsedMode = () => <Accordion collapsed={false} onClick={callback} titleValue={'Users'}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onClick={() => setValue(!value)}/>;
};