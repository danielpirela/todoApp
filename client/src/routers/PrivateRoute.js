import {useAuth} from '../auth/useAuth'
import {Navigate, Route} from 'react-router-dom'


const PrivateRoute = ({hasRoles:roles ,props}) => {
    

    const user = null
    
    if(!user) return <Navigate to="/login"/> 

    return (
        <Route {...props} />
    )
}


export {PrivateRoute}