import React, {useState} from "react";
import {ButtonPropsInterface} from "./props.interface";

export function ButtonContainer({render}: { render: (props: ButtonPropsInterface) => JSX.Element }) {
    const [count, onCount] = useState( 0);
    const title = `Button clicks`;

    return <div> {
        render({text: title, onClick: () => onCount(count + 1)})
    } </div>
}
