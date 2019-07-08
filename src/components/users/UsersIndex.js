import React from 'react';
import axios from 'axios';

class UsersIndex extends React.Component {
  state = {users: []};
  render() {
    const {users} = this.state;
    return (
      <div>
      <h1>Users</h1>
      <ul>
        {
          users.map( user => (
            <li key={user.id.toString()}>{user.name}</li>
          ))
        }
      </ul>
      </div>
    );
  }
  componentDidMount() {
    const url = 'http://localhost:8085/api/v1/users';
    // const url = 'http://projects-backend.webtraining.fun/api/v1/users';
    axios.get(url, {
      headers: {
        'Content-Type': 'applications/json',
        'X-Requested-With': 'XmlHttpRequest'
      },
      data : {}, // issue ! send an empty object as "data"
    }).then(response => {
      //console.log(response)
      this.setState({users: response.data})
    });
  }

}

export default UsersIndex;