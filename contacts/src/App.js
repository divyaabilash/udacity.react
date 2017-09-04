import React from 'react'
import ContactList from './ContactList'
import * as ContactAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends React.Component{
	state={
		screen:'list', //can be list or create
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

addContact=(contact)=>{
	this.setState((state)=>{
		contacts:state.contacts.push(contact)
	})
}

onNavigate=()=>{
	this.setState({screen:'create'})
}
  render(){
    return (
      <div>
      {this.state.screen==='list' && (<ContactList onDeleteContact={this.removeContact}  onAddContact={this.addContact} contacts={this.state.contacts}
      	onAdd={this.onNavigate}/>
     )}
       {this.state.screen==='create'&&(<CreateContact/>)}
      </div>
      )
  }
}

export default App;