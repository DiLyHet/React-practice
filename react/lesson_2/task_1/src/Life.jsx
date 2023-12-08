import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
    this.state = {
      currentValue: 0,
    };
    setInterval(() => {
      this.setState({
        currentValue: Math.random(),
      });
    }, 5000);
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return this.state !== nextState || this.props !== nextProps;
  }
  render() {
    console.log('return React element to build DOM');
    return <div>{this.state.currentValue}</div>;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }
}

export default Life;
