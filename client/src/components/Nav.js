import {NavLink} from 'react-router-dom'
import {routes} from '../helpers/routes'

const Nav = () => {
  
  const {
    home,
    login,
    register,
    projects,
    account,
    admin,
  } = routes

  return (
    <nav className="my-5 rounded-xl bg-gray-900 p-4 justify-start items-center flex" >
      <div className="flex justify-start items-center w-7/12">
        <NavLink className="focus:text-yellow-500 px-1 transform hover:scale-110 text-yellow-500 font-black text-xl" to={home}>Task Manager</NavLink>
        <NavLink className="focus:text-yellow-500 px-1 transform hover:scale-110 hover:text-yellow-500 font-regular text-gray-200" to={projects} >Projects</NavLink>
        <NavLink className="focus:text-yellow-500 px-1 transform hover:scale-110 hover:text-yellow-500 font-regular text-gray-200" to={admin.users}>User</NavLink>
      </div>
      <div className="w-5/12 focus:text-yellow-500 flex justify-end">
        <NavLink className="focus:text-yellow-500 px-1 transform hover:scale-110 hover:text-yellow-500" to={login}>Login</NavLink>/
        <NavLink className="focus:text-yellow-500 px-1 transform hover:scale-110 hover:text-yellow-500" to={register}>Register</NavLink>
        <NavLink className="focus:text-yellow-500 px-1 transform hover:scale-110 hover:text-yellow-500" to={account}>Account</NavLink>
      </div>
    </nav>
  )
}

export {Nav}