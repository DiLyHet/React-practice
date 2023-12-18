import React from 'react';
import moment from 'moment';

class Dimension extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return <div class="dimensions">{`${window.innerWidth}px - ${window.innerHeight}px`}</div>;
  }
}

export default Dimension;
