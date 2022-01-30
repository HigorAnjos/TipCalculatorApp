import React from 'react';
import './view.css'

class View extends React.Component {
  render() {

    const { people, bill, tip, tipin, reset } = this.props;

    let displayAmout;
    let displayPeople;
    if (people && bill && (tip || tipin)) {
      
      const percentage = Number(tip) || Number(tipin)

      displayAmout =  (
        <div
          className='display'
        >{(Number(bill) * percentage/100).toFixed(2)}
        </div>
      ); 
    
      displayPeople = (
      <div
        className='display'
      >{((Number(bill) * percentage/100) / Number(people)).toFixed(2)}
      </div>);
    } else {
      displayAmout =  (
        <div
          className='display'
        >$0.00
        </div>
      ); 
    
      displayPeople = (
      <div
        className='display'
      >$0.00
      </div>);

    }

    return (
      <div id="view-container">
        <div id="info">
          <div id="view-amount">
            <div className="title">
              <h2>Tip Amount</h2>
              <h3>/ person</h3>
            </div>
            {displayAmout}
          </div>
          <div id="view-amount">
            <div className="title">
              <h2>Total</h2>
              <h3>/ person</h3>
            </div>
            {displayPeople}
          </div>
        </div>
        <div id="reset">
          <button onClick={ reset }>RESET</button>
        </div>
      </div>
    );
  }
}

export default View;