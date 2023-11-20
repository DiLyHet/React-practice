import React from 'react';
import './index.scss';

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div className='mailbox'>
        <div className="mailbox__text">Messages</div>
        {this.props.unreadMessages > 0 && (
          <div className="mailbox__count">{this.props.unreadMessages}</div>
        )}
      </div>
    );
  }
}

export default Mailbox;
