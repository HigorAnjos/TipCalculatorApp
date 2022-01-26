import React from 'react';
import './view.css'

class View extends React.Component {
  render() {
    return (
      <div id="view-container">
        <div>
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
        <div id="reset">
          <button>RESET</button>
        </div>
      </div>
    );
  }
}

export default View;