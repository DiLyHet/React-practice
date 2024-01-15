import React from 'react';

class Filter extends React.Component {
  render() {
    
    return (
      <>
        <span className="filter__count">{this.props.count}</span>
        <input type="text" className="filter__input" onChange={this.props.onChange}/>
      </>
    );
  }
}

export default Filter;
