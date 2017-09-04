import React from 'react'
import ContactList from './ContactList'
import {Route} from 'react-router-dom'
import * as ContactAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends React.Component{
	state={
		contacts:[]
  }

componentDidMount(){
	ContactAPI.getAll().then((contacts)=>{
		this.setState({
			contacts:contacts
		})
	})
}

removeContact =(contact) => {
this.setState((state)=>({
contacts: state.contacts.filter((con)=>
	con.id !== contact.id )
}))
ContactAPI.remove(contact)
}



  render(){
    return (
      <div>
      <Route exact path="/" render={ ()=>(
	<ContactList onDeleteContact={this.removeContact} 
	contacts={this.state.contacts}/>)
  }/>
  <Route path="/create" component={CreateContact}/>
   </div>
      )
  }
}

export default App;