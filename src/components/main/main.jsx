import React from 'react';
import './main.css'
import Input from './../input/input'
import View from './../view/view'

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <Input />
        <View />
      </div>
    );
  }

}

export default Main;