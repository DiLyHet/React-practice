import React from 'react';

class Expand extends React.Component {
  state = {
    isExpanded: false,
  };

  toggleContent = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };

  render() {
    const { isExpanded } = this.state;
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContent}>
            <i className={isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>
        {isExpanded && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

export default Expand;
