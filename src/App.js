import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <h1>Users</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {users: []};
  render() {
    const {users} = this.state;
    return ( 
      <div className = "App">
        <h1>Users</h1>
        {
          users.map( user => (
            <li key={user.id.toString()}>{user.name}</li>
          ))
        }
      </div>
    );
  }
  componentDidMount() {
    const url = 'http://localhost:8085/api/v1/users';
    axios.get(url, {
      headers: {
        'Content-Type': 'applications/json'
      },
      data : {}, // issue ! send an empty object as "data"
    }).then(response => {
      //console.log(response)
      this.setState({users: response.data})
    });
  }
}


export default App;