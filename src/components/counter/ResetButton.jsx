
import React, { Component } from 'react'
import './Counter.css'

class ResetButton extends Component {
    
    
    constructor() {
        super()
        this.reset = this.reset.bind(this);
    }


    render() {
        return (
        <div >
            <button className='resetButton' onClick={this.reset}>Reset</button>
        </div>
        )
    }

    reset() {
        // This references the property passed in
        // when it's created in Counter
        // incrementMethod={....}
        this.props.resetMethod();
      }
  }

  export default ResetButton;