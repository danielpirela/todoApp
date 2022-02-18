const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    projects: '/projects',
    project: (id) => id ? `/projects/:${id}` : '/projects/:id',
    account: '/acount',
    admin: {
        users: '/admin/users',
    },
    error404: '*'
}


export {routes}