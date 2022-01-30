import React from 'react';
import './main.css'
import Input from './../input/input'
import View from './../view/view'

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      bill: '',
      tip: '',
      people: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { people, bill, tip } = this.state;
    return (
      <div className='container'>
        <Input handleChange={ this.handleChange }/>
        <View bill={ bill} tip={ tip } people={ people } />
      </div>
    );
  }

}

export default Main;