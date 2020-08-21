import login from 'Pages/login'

export const routes = [
    {
        path:'/',
        redirect: '/login',
    },
    {
        path:'/login',
        name:'login',
        title:'登录',
        component: login,
    },
    {
        path:'*',
        redirect: '/login',
    }
]