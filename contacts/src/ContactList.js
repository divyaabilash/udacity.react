import React from 'react'

class ContactList extends React.Component{
render(){
	const contact=this.props.contacts;
	console.log(this.props);
	return (
		<ol>
		{contact.map(person => <li key={person.id}>{person.name}</li>)}
		</ol>
		);
}
}

export default ContactList;