import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contactsSlice'


export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts)

    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <Contact key={contact.id} data={ contact }/>
                )
            })}
        </ul>
    )
}