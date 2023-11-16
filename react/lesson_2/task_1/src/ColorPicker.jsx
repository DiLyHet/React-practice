import React from 'react';
import './index.scss';

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state ={
      currentColor: ''
    };
  }
  setColor = color => {
    this.setState({
      currentColor: color
    })
   
  };

  render() {
    return (
      <div className="picker">
        <div className="picker__title">{this.state.currentColor}</div>
        <button className="picker__button_coral picker__button" onMouseEnter={e => this.setColor('Coral')} onMouseLeave={e=> this.setColor('')}></button>
        <button className="picker__button_aqua picker__button" onMouseEnter={e => this.setColor('Aqua')} onMouseLeave={e=> this.setColor('')}></button>
        <button className="picker__button_bisque picker__button" onMouseEnter={e => this.setColor('Bisque')} onMouseLeave={e=> this.setColor('')}></button>
      </div>
    );
  }
}

export default ColorPicker;
