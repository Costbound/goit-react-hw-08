import css from './App.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoader, selectError } from '../../redux/contactsSlice'
import ContactForm from '../ContactFrorm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { fetchContacts } from '../../redux/contactsOps'


export default function App() {
    const dispatch = useDispatch()
    const loading = useSelector(selectLoader)
    const error = useSelector(selectError)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {loading && !error && <p className={css.loader}>Loading...</p>}
            <ContactList />
        </div>
    )
}