import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: true,
      hide: false,
    };
    setInterval(() => {
      this.setState({
        updating: !this.state.updating,
      });
    }, 1000);
    this.buttonClick = this.buttonClick.bind(this);
    this.render = this.render.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps;
  }

  buttonClick() {
    this.setState({ hide: !this.state.hide });
    clearInterval();
  }

  render() {
    return (
      <>
        <div className="clockroot">
          {this.state.hide === false && (
            <>
              <Clock location={'New York'} offset={-5} />
              <Clock location={'Kyiv'} offset={2} />
              <Clock location={'London'} offset={0} />
            </>
          )}
        </div>
        <button onClick={this.buttonClick}>{!this.state.hide ? 'Hide' : 'Show'}</button>
      </>
    );
  }
}

export default App;
