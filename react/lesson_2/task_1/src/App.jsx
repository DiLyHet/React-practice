import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
 
createUser(UserForm){
    console.log(UserForm);
    event.preventDefault();
}

    render() {
        return(
            <UserForm submitHandler={this.createUser} />
        );
    }
}

export default App;
