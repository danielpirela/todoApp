import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Layout} from '../components/layouts/Layout'
import {HomePage} from '../pages/HomePage'
import {LoginPage} from '../pages/LoginPage'
import {RegisterPage} from '../pages/RegisterPage'
import {AcountPage} from '../pages/AcountPage'
import {ProjectsPage} from '../pages/ProjectsPage'
import {ProjectPage} from '../pages/ProjectPage'
import {UserPage} from '../pages/admin/UserPage'
import {Error404Page} from '../pages/Error404Page'

import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'

import {roles} from '../helpers/roles'
import {routes} from '../helpers/routes'

const AppRouter = () => {
  
  const {
    home,
    login,
    register,
    projects,
    project,
    account,
    admin,
    error404
  } = routes
  

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={home} element={<HomePage/>} />
          <Route path={login} element={<LoginPage/>} />
          <Route path={register} element={<RegisterPage/>} />
          <Route path={account} element={<AcountPage/>} />
          <PrivateRoute path={projects} element={<ProjectsPage/>} />
          {/* <Route path={project} element={<ProjectPage/>} /> */}
          <Route hasRoles={roles.admin} path={admin.users} element={<UserPage/>} />
          <Route path={error404} element={<Error404Page/>} />  
        </Routes>
      </Layout>
    </Router>
  )
}

export {AppRouter}