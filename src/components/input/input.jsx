import React from 'react';
import './../input/input.css'

class Input extends React.Component {
  render() {
    const { people, bill, handleChange } = this.props;
    return (
      <div id="input-container">
        <div id="input-data">
          <h2>Bill</h2>
          <input name="bill" value={ bill } onChange={ handleChange }></input>
        </div>
        <div id="select-tip">
          <h2>Select Tip %</h2>
          <div id="button-grid">
            <button value={5} name="tip" onClick={ handleChange }>5%</button>
            <button value={10} name="tip" onClick={ handleChange }>10%</button>
            <button value={15} name="tip" onClick={ handleChange }>15%</button>
            <button value={25} name="tip" onClick={ handleChange }>25%</button>
            <button value={50} name="tip" onClick={ handleChange }>50%</button>
            <input></input>
          </div>
        </div>
        <div id="num-people">
          <h2>Number of People</h2>
          <input value={people} name="people" onChange={ handleChange }></input>
        </div>
      </div>
    )
  }
}

export default Input;