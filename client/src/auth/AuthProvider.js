import {createContext, useState} from 'react';
import { roles } from '../helpers/roles';

const AuthContext = createContext();
console.log(AuthContext);

const AuthProvider = ({children}) =>{

  console.log(children);
  const initialState = {id: 1, role: roles.admin}
    
  const [user, setUser] = useState(initialState);

    const contextValue = {  
    user,
    } 

  return (
    <AuthContext.Provider value={contextValue}>
        { children }
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}
