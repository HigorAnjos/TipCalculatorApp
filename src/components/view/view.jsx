import React from 'react';
import './view.css'

class View extends React.Component {
  render() {

    const { people, bill, tip } = this.props;

    let display;
    if (people && bill && tip) {
      display = (
        <div id="info">
          <div id="view-amount">
            <div className="title">
              <h2>Tip Amount</h2>
              <h3>/ person</h3>
            </div>
            <div className='display'>
              { (Number(bill) * Number(tip)/100).toFixed(2) }
            </div>
          </div>
          <div id="view-amount">
            <div className="title">
              <h2>Total</h2>
              <h3>/ person</h3>
            </div>
            <div className='display'>
              { ((Number(bill) * Number(tip)/100) / Number(people)).toFixed(2) }
            </div>
          </div>
        </div>
      );
    } else {
      display = (
        <div id="info">
          <div id="view-amount">
            <div className="title">
              <h2>Tip Amount</h2>
              <h3>/ person</h3>
            </div>
            <div className='display'>
              $0.00
            </div>
          </div>
          <div id="view-amount">
            <div className="title">
              <h2>Total</h2>
              <h3>/ person</h3>
            </div>
            <div className='display'>
              $0.00
            </div>
          </div>
        </div>
      );
    }

    return (
      <div id="view-container">
        {display}
        <div id="reset">
          <button>RESET</button>
        </div>
      </div>
    );
  }
}

export default View;