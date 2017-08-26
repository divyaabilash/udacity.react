import React from 'react'
import ContactList from './ContactList'


class App extends React.Component{
	state={

 contacts:[
    {
      id: 'ryan',
      name: 'Ryan Florence',
      email: 'ryan@reacttraining.com',
      avatarURL: 'http://localhost:5001/public/ryan.jpg'
    },
    {
      id: 'michael',
      name: 'Michael Jackson',
      email: 'michael@reacttraining.com',
      avatarURL: 'http://localhost:5001/public/michael.jpg'
    },
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      email: 'tyler@reacttraining.com',
      avatarURL: 'http://localhost:5001/public/tyler.jpg'
    }
  ]

	}
  render(){
    return (
      <div>
      <ContactList contacts={this.state.contacts}/>
      </div>
      )
  }
}

export default App;