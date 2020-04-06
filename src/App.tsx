import React, {ChangeEvent} from 'react';
import './App.css';
import NameInput from "./Components/NameInput";
import SubmitButton from "./Components/SubmitButton";

interface State {
    firstName: string,
    lastName: string,
}

class App extends React.Component<{}, State> {


    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
    }

    handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.className === 'first-name') {
            this.setState({firstName: e.target.value})
        } else if (e.target.className === 'last-name') {
            this.setState({lastName: e.target.value})
        }
    };

    handleSubmit = () => {
        alert(`User Name: ${this.state.firstName} ${this.state.lastName}`)
    };


    render() {
        return (
            <form className="App">
                <h2>Zhang Zhen's React Demo with TypeScript</h2>
                <h3>User Info:</h3>
                <div>
                    <label>First Name:</label>
                    <br/>
                    <NameInput
                        changeListener={this.handleNameInput}
                        className='first-name'
                        value={this.state.firstName}/>
                </div>
                <br/>
                <div>
                    <label>Last Name:</label>
                    <br/>
                    <NameInput
                        changeListener={this.handleNameInput}
                        className='last-name'
                        value={this.state.lastName}/>
                </div>
                <br/>
                <SubmitButton clickListener={this.handleSubmit}/>
            </form>
        );
    }
}

export default App;
