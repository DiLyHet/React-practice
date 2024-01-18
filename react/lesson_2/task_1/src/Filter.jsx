import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
        <span className="filter__count">{this.props.count}</span>
        <input type="text" className="filter__input" value={this.props.filterText} onChange={this.props.onChange}/>
      </>
    );
  }
}

export default Filter;
