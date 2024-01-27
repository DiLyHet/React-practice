import React from 'react';

export default class Expand extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  hideButton = () => {
    this.setState({
      isOpen: false,
    });
  };

  showButton = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{this.props.title}</span>
            <button className="expand__toggle-btn" onClick={this.showButton}>
              <i className={this.state.isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
            </button>
          </div>
          {this.state.isOpen &&
          <div className="expand__content">
            <p>{this.props.content}</p>
          </div>}
        </div>
      </div>
    );
  }
}
