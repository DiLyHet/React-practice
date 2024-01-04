import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
 
createUser(UserForm){
    console.log(UserForm);
   
}

    render() {
        return(
            <UserForm onSubmit={this.createUser} />
        );
    }
}

export default App;
