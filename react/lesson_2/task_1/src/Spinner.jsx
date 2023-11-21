import React from 'react';
import './index.scss';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(this.props.onSpinner, 2000);
  }
  

  render() {
    return <span className="spinner" style={{ height: this.props.size, width: this.props.size}}></span>;
  }
}

export default Spinner;