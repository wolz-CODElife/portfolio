import React from 'react'
import { contacts } from '../data/contacts'
import { IconContacts } from '../icons/icons'
import './css/Contacts.css'

const Contacts = () => {
    
    return (
        <div className='Contacts'>
            <h1 className='title'>Contacts <IconContacts /> </h1>
            <div className="gallery">
                {contacts.map(contact => (
                    <a href={contact.link} target="_blank" rel="noopener noreferrer" key={contact.type}>
                        <img src={contact.thumbnail} alt={contact.type} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Contacts
