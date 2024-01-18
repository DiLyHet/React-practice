import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilterText: '',
      currentCount: 0,
      
    };
  }


  onChangeHandler(event) {
    console.log(event);
    console.log(this);
    this.setState({ currentFilterText: event.target.value });
  }
  render() {
    const filteredList = this.props.users.filter(elem =>
      elem.name.toLowerCase().includes(this.state.currentFilterText.toLowerCase()),
    );
    return (
      <div>
        <div className="filter">
          <Filter filterText={this.state.currentFilterText}
            onChange={event => {
              this.onChangeHandler(event);
            }}
            count={filteredList.length}
          />
        </div>
        <ul className="users">
          {filteredList.map((element, index) => {
            return <User name={element.name} age={element.age} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
