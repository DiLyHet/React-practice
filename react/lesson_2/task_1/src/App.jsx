import React from 'react';
import Expand from './Expand';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  showButton = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      
        <Expand title={'HOOKS'} showButton={this.showButton} isOpen={this.state.isOpen}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      
    );
  }
}
