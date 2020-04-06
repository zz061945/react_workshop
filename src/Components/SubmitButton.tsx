import React, {MouseEventHandler} from "react";


function SubmitButton(props: {
    clickListener: MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <button onClick={props.clickListener}>Submit</button>
    )
}

export default SubmitButton