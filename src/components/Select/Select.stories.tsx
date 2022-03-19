import React, {useState} from 'react';
import {Select} from './Select';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState<string>("2")

    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
        </>

    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string | null>(null)
    return (
        <>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
        </>

    )
}
