import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'
import './Counter.css'


class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this)
    }


    render() {
        return (
            <div>
                <div className="counter">
                    <div>
                        <CounterButton incrementMethod={this.increment}/>
                        <CounterButton by={5} incrementMethod={this.increment}/>
                        <CounterButton by={10} incrementMethod={this.increment}/>                    
                    </div>
                    <div>
                        <CounterButton sign={""} by={-1} incrementMethod={this.increment}/>
                        <CounterButton sign={""} by={-5} incrementMethod={this.increment}/>
                        <CounterButton sign={""} by={-10} incrementMethod={this.increment}/>
                    </div>                             
                </div>
                <span className="count">{this.state.counter}</span>   
                <ResetButton resetMethod={this.reset}/>
            </div>
        );
      }

      increment(by) {
        //console.log(`Increment From Parent = ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        )           
      }

      reset() {
        this.setState({
            counter: 0
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

