import React from 'react';
import './index.scss';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
   
  }
  

  render() {
    return <span className="spinner" style={{ height: this.props.size, width: this.props.size}}></span>;
  }
}

export default Spinner;