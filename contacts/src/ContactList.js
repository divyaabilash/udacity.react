import React from 'react'

class ContactList extends React.Component {
  render() {
    // const contact=this.props.contacts;
    console.log(this.props);
    return ( 
    	<ol className='contact-list' > {
        this.props.contacts.map(person =>
          
          <li key = { person.id } className='contact-list-item' > 
          <div className='contact-avatar' style={{
          	backgroundImage:'url(${contact.avatarURL})'
          }}/>
          <div className='contact-details'>
          <p>{ person.name }</p>
			<p>{person.email}</p>
			</div>
			<button className='contact-remove'>Remove</button>
           < /li>  
        )
      } 
      </ol>
    );
  }
}

export default ContactList;
