import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class CounterButton extends Component {
    
    
    constructor() {
        super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }


    render() {
        return (
        <div className='counterButton'>
            <button onClick={this.increment}>{this.props.sign}{this.props.by}</button>
        </div>
        )
    }

    increment() {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + this.props.by}
            }
        )
        // This references the property passed in
        // when it's created in Counter
        // incrementMethod={....}
        this.props.incrementMethod(this.props.by);
      }
  }

  CounterButton.defaultProps = {
    by : 1,
    sign : "+"
  }

  CounterButton.propTypes = {
    by : PropTypes.number,
    sign : PropTypes.string
  }

  export default CounterButton;