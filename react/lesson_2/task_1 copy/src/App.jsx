import React from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: {
            firstName: 'First name',
            lastName: 'Last name'
        }
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
        userData: {
            ...this.state.userData,
            [name]: value
        }
    })
    
}

  render() {
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userData={this.state.userData.firstName} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}
