import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Keypad from './components/Keypad';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = e => {

        if(e === "="){
          this.setState({
            result: eval(this.state.result)
        })
        }
        else if(e === "clear"){
          this.setState({
            result: ""
        })
        }
        else if(e === "±"){
            this.setState({
              result: this.state.result * -1
          })
        }
        else {
            this.setState({
                result: this.state.result + e
            })
        }
    };



    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <Calculator result={this.state.result}/>
                    <Keypad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;