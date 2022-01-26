import React from 'react';
import './../input/input.css'

class Input extends React.Component {
  render() {
    return (
      <div id="input-container">
        <div id="input-data">
          <h2>Bill</h2>
          <input></input>
        </div>
        <div id="select-tip">
          <h2>Select Tip %</h2>
          <div id="button-grid">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input></input>
          </div>
        </div>
        <div id="num-people">
          <h2>Number of People</h2>
          <input></input>
        </div>
      </div>
    )
  }
}

export default Input;