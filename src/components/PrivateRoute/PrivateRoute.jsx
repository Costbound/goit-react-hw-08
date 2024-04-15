import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export default function PrivateRoute({ element }) {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <>
            {isLoggedIn ? element : <Navigate to='/login' />}
        </>
    )
}