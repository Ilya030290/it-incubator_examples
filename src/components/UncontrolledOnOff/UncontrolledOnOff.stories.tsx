import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action('on or off clicked')}/>;
export const OffMode = () => <UncontrolledOnOff onChange={action('on or off clicked')}/>;
