import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
class ContactList extends Component{

render(){
  const contact=['rena','rani'];
return (
  <div>
  <ol>
  {contact.map(person => <li key={person}>{person}</li>)}
    </ol>
  </div>
)
}
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <ContactList/>
      </div>
    );
  }
}

export default App;
