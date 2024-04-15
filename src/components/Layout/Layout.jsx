import css from './Layout.module.css'
import AppBar from '../AppBar/AppBar'
import { Route } from 'react-router'

export default function Layout() {
    return (
        <div className={css.container}>
            <AppBar />
        </div>
    )
}