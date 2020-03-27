import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import './App.css';

function App() {
    let firstName = '';
    let lastName = '';
    const nameInputListener: ChangeEventHandler<HTMLInputElement> = function (e) {
        if (e.target.className === 'first-name') {
            firstName = e.target.value;
        } else {
            lastName = e.target.value;
        }
    };

    const submitClickListener: MouseEventHandler<HTMLButtonElement> = function (e) {
        alert(`User Name: ${firstName}${lastName}`)
    };

    return (
        <form className="App">
            <h2>Zhang Zhen's React Demo with TypeScript</h2>
            <h3>User Info:</h3>
            <label>First Name:</label>
            <br/>
            <NameInput changeListener={nameInputListener} className='first-name'/>
            <br/>
            <label>Last Name:</label>
            <br/>
            <NameInput changeListener={nameInputListener} className='last-name'/>
            <br/>
            <SubmitInput clickListener={submitClickListener}/>
        </form>
    );
}

function NameInput(props: {
    changeListener: ChangeEventHandler<HTMLInputElement>,
    className: string,
}) {
    return (
        <input type='text' onChange={props.changeListener} className={props.className}/>
    )
}


function SubmitInput(props: {
    clickListener: MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <button onClick={props.clickListener}>Submit</button>
    )
}

export default App;
