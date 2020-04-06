import React, {ChangeEventHandler} from "react";

function NameInput(props: {
    changeListener: ChangeEventHandler<HTMLInputElement>,
    className: string,
    value: string
}) {
    return (
        <input type='text' onChange={props.changeListener} className={props.className} value={props.value}/>
    )
}

export default NameInput