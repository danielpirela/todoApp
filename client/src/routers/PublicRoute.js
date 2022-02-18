import {useAuth} from '../auth/useAuth'
import {Navigate, Route} from 'react-router-dom'
import { roles } from '../helpers/roles'

const PublicRoute = (props) => {
     
    const {projects} = roles

    const {user} = useAuth()
    
    if(user) return <Navigate to={projects}/>

    return (
        <Route {...props} />
    ) 
}


export {PublicRoute}