
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class ResetButton extends Component {
    
    
    constructor() {
        super()
        this.reset = this.reset.bind(this);
    }


    render() {
        return (
        <div className='resetButton'>
            <button onClick={this.reset}>Reset</button>
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