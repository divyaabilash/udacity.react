import React from 'react'
import propTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ContactList extends React.Component {
    static propTypes = {
      contacts: propTypes.array.isRequired,
      onDeleteContact: propTypes.func.isRequired
    }
    state = {
      query: ''
    }
    updateQuery = (query) => {
      this.setState({
        query: query.trim()
      })
    }

    updateContact = () => {
      this.setState({
        query: ''
      })
    }

  render() {
  	const {query}=this.state
  	const {contacts, onDeleteContact}=this.props
    let showContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showContacts = contacts
    }
    showContacts.sort(sortBy('name'))
    // console.log(this.props);
     	// console.log(this.state)

     	

    return (
    	<div className="list-contacts">
    	<div className="list-contacts-top">
    	<input 
    	type='text'
    	placeholder='search'
    	className='search-contacts'
    	value={query}
    	onChange={(event) =>(this.updateQuery(event.target.value))}
    	/>
    	<a 
    	href='#create'
    	onClick={()=>{this.props.onAdd()}}
    	className='add-contact'>Addcontact</a>
    	</div>
    	{showContacts.length !== contacts.length &&(
    		<div>showing {showContacts.length} of {contacts.length}
    		<a onClick={()=>this.updateContact()} style={{color:'blue'}}>show all</a>
    		</div>
    		)}
		<ol > {
        showContacts.map((contact) => ( <
          li key = { contact.id } className = 'contact-list-item' >
          <div className = 'contact-avatar'
          style = {
            {
              backgroundImage: `url(${contact.avatarURL})`
            }
          }
          /> 
          <div className = 'contact-details' >
          <p> { contact.name } < /p>
           <p > { contact.email } < /p> 
           </div> 
           <button onClick = {
            () => onDeleteContact(contact) } className = 'contact-remove' > Remove < /button> 
            </li>  
        ))
      } 
      </ol>
      </div>
    )
  }
}

// function ContactList(props){
// 	return(
// 		 <div>

// 		<ol className='contact-list' > 
// 		{
//        	props.contacts.map(person =>(
//           <li key = { person.id } className='contact-list-item' > 
//           <div className='contact-avatar' style={{
//           	backgroundImage:`url(${person.avatarURL})`
//           }}/>
//           <div className='contact-details'>
//           <p>{ person.name }</p>
// 			<p>{person.email}</p>
// 			</div>
// 			<button onClick={()=> props.onDeleteContact(person)} className='contact-remove'>Remove</button>
//            < /li>  
//         ))} 
//       </ol>
//        </div>

//  )
// }

// ContactList.propTypes={
// 	contacts:propTypes.array.isRequired,
// 	onDeleteContact:propTypes.func.isRequired
// }

// class ContactList extends React.Component {
//   render() {
//     // const contact=this.props.contacts;
//     console.log(this.props);
//     return ( 
//     	<ol className='contact-list' > {
//         this.props.contacts.map(person =>

//           <li key = { person.id } className='contact-list-item' > 
//           <div className='contact-avatar' style={{
//           	backgroundImage:'url(${contact.avatarURL})'
//           }}/>
//           <div className='contact-details'>
//           <p>{ person.name }</p>
// 			<p>{person.email}</p>
// 			</div>
// 			<button onClick={()=> this.props.onDeleteContact(person)} className='contact-remove'>Remove</button>
//            < /li>  
//         )
//       } 
//       </ol>
//     );
//   }
// }

export default ContactList;
