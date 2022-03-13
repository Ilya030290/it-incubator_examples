import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return (
        <Accordion
            collapsed={true}
            onChange={callback}
            titleValue={'Menu'}
            items={[]}
            onClick={onClickCallback}
        />
    )
}

export const UsersUnCollapsedMode = () => {
    return (
        <Accordion
            collapsed={false}
            onChange={callback}
            titleValue={'Users'}
            items={[{title: 'Ignat', value: 1},{title: 'Artur', value: 2},{title: 'Anton', value: 3}, {title: 'Zhanna', value: 4}]}
            onClick={onClickCallback}
        />
    )
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion
            titleValue={'Users'}
            collapsed={value}
            onChange={() => setValue(!value)}
            items={[{title: 'Ignat', value: 1},{title: 'Artur', value: 2},{title: 'Anton', value: 3}, {title: 'Zhanna', value: 4}]}
            onClick={(value) => {alert(`user with ID ${value} should be happy`)}}
        />
    );
};