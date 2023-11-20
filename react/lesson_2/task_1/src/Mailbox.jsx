import React from 'react';
import './index.scss';

class Mailbox extends React.Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: 7,
    };
  }

  render() {
    return (
      <div className='mailbox'>
        <div className="mailbox__text">Messages</div>
        {this.state.unreadMessages > 0 && (
          <div className="mailbox__count">{this.state.unreadMessages}</div>
        )}
      </div>
    );
  }
}

export default Mailbox;
