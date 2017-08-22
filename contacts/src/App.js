import React from 'react'
import ContactList from './ContactList'

const contacts=[
    {
      id: 'ryan',
      name: 'Ryan Florence',
      email: 'ryan@reacttraining.com',
      avatarURL: 'ryan.jpg'
    },
    {
      id: 'michael',
      name: 'Michael Jackson',
      email: 'michael@reacttraining.com',
      avatarURL: 'michael.jpg'
    },
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      email: 'tyler@reacttraining.com',
      avatarURL: 'tyler.jpg'
    }
  ]


class App extends React.Component{
  render(){
    return (
      <div>
      <h1>Hello World!</h1>
      <ContactList contacts={contacts}/>
      </div>
      )
  }
}

export default App;