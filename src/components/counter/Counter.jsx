import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CounterButton from './CounterButton'
import './Counter.css'


class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }


    render() {
        return (
          <div className="counter">
             <CounterButton incrementMethod={this.increment}/>
             <CounterButton by={5} incrementMethod={this.increment}/>
             <CounterButton by={10} incrementMethod={this.increment}/>
             <span className="count">{this.state.counter}</span>
          </div>
        );
      }

      increment(by) {
        //console.log(`Increment From Parent = ${by}`)
        this.setState({
            counter: this.state.counter + by
        })
           
      }
}

Counter.defaultProps = {
    by : 0
  }

  Counter.propTypes = {
    by : PropTypes.number
  }

  export default Counter;

