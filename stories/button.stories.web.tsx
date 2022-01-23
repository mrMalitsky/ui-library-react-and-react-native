import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {ButtonWebComponent} from "../components/button/button.web";
import {ButtonContainer} from "../components/button/button.container";

export default {
    title: 'Button WEB',
};

export const Button = () => (
    <ButtonContainer
        render={(props) => (
            <ButtonWebComponent text={`WEB ${props.text}`} onClick={props.onClick}/>
        )}
    />
);
