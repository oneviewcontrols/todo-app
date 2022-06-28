import React, { Component } from 'react'
import './Counter.css'

function Counter() {
    return (
      <div className='counter'>
         <button>Add One</button>
         <span className="count">0</span>
      </div>
    );
  }

  export default Counter;

