import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class CounterButton extends Component {
    
    
    constructor() {
        super()
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    render() {
        return (
        <div >
            <button className='counterButton' onClick={this.increment}>+{this.props.by}</button>
            <button className='counterButton' onClick={this.decrement}>-{this.props.by}</button>
        </div>
        )
    }

    increment() {
        // This references the property passed in
        // when it's created in Counter
        // incrementMethod={....}
        this.props.incrementMethod(this.props.by);
      }

      decrement() {
        // This references the property passed in
        // when it's created in Counter
        // incrementMethod={....}
        this.props.decrementMethod(this.props.by);
      }
  }

  CounterButton.defaultProps = {
    by : 1
  }

  CounterButton.propTypes = {
    by : PropTypes.number
  }

  export default CounterButton;