import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {ButtonNativeComponent} from "../components/button/button.native";
import {ButtonContainer} from "../components/button/button.container";

export const Button = () => (
    <ButtonContainer
        render={(props) => (
            <ButtonNativeComponent text={`Native ${props.text}`} onClick={props.onClick}/>
        )}
    />
);

// On-Device Register
storiesOf('Button', module).add('Button native', Button);
