import css from './App.module.css'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'
import Layout from '../Layout/Layout'



export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <Layout />
    )
}