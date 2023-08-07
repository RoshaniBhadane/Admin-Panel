import { Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthenticationContext } from "../../context/Authentication"

const ProtectedRoute = () => {
    const { isLoggedIn } = useContext(AuthenticationContext)
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoute