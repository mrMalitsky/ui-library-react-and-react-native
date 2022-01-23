import React from "react";
import {Button} from "react-native";
import {ButtonPropsInterface} from "./props.interface";

export function ButtonNativeComponent(props: ButtonPropsInterface ) {
    return (<Button title={props.text} onPress={props.onClick} />);
}
