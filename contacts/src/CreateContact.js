import React from 'react'
import ImageInput from './ImageInput'
import {Link} from'react-router-dom'
class CreateContact extends React.Component{
	render(){
		return(
			<div>
			<Link to='/' className='close-create-avater'>Back</Link>
			<form className='create-contact-form'>
			<ImageInput className='create-contact-avater-input' name='avaterURL' maxHeight={64}/>
			</form>
			<div className='create-contact-details'>
			<input name='name' type='text' placeholder='name'/>
			<input name='email' type='email' placeholder='email'/>
			<button>Add contact</button>
			</div>
			</div>
			)
	}
}

export default CreateContact

