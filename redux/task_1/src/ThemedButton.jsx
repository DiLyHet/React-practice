import React, { useEffect } from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component {
  render() {
    console.log(this.context);
    return (
      <button
        {...this.props}
        style={{ backgroundColor: this.context.background, color: this.context.fontColor }}
        className="clock"
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
