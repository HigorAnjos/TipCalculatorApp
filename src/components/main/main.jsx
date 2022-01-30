import React from 'react';
import Input from './../input/input'
import View from './../view/view'
import './main.css'

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      bill: '',
      tip: '',
      people: '',
      tipin: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  reset = () => {
    this.setState({
      bill: '',
      tip: '',
      people: '',
      tipin: '',
    })
  }

  render() {
    const { people, bill, tip, tipin } = this.state;
    return (
      <div className='container'>
        <Input
          tip={ tip }
          tipin={ tipin }
          people={ people }
          bill={ bill}
          handleChange={ this.handleChange }
        />
        <View
          bill={ bill}
          tipin={ tipin }
          tip={ tip }
          people={ people }
          reset={ this.reset }
        />
      </div>
    );
  }

}

export default Main;