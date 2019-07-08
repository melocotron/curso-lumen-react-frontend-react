import React, {Component} from 'react';
import './App.css';
import UsersIndex from './components/users/UsersIndex';


// function App() {
//   return (
//     <div className="App">
//       <h1>Users</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return ( 
      <div className = "App">
        <UsersIndex/>
      </div>
    );
  }
}


export default App;