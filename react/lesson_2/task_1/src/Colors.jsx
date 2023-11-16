import React from 'react';
import moment from 'moment';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  setBodyColor = (color, e) => {
    console.log(e);
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: RED }}
          className="colors__button"
          onClick={e => this.setBodyColor(RED)}
        ></button>
        <button
          style={{ backgroundColor: GREEN }}
          className="colors__button"
          onClick={e => this.setBodyColor(GREEN)}
        ></button>
        <button
          style={{ backgroundColor: BLUE }}
          className="colors__button"
          onClick={e => this.setBodyColor(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
