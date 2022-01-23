import React from "react";
import {ButtonPropsInterface} from "./props.interface";

export function ButtonWebComponent(props: ButtonPropsInterface ) {
    return (<button onClick={props.onClick}>{props.text}</button>);
}
