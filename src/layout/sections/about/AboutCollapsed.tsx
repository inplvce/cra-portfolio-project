import React from 'react';
import {Line} from "../../../components/Line/Line";

type AboutCollapsedProps = {
    title: string
    text: string
    label: string
}
export const AboutCollapsed = (props: AboutCollapsedProps) => {
    return (
        <div>
            <Line/>
            {props.label}
            {props.title}
            {props.text}
        </div>
    );
};

