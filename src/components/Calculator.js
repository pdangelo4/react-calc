
import React, {Component} from 'react';

class Calculator extends Component {


    render() {
        // let {result} = this.props;
        return (
            <div className="result">
                <p>{this.props.result}</p> 
            </div>
    )
        ;
    }
}


export default Calculator;
