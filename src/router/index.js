import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = []
const context = require.context('./modules', true, /\/[\w]+\.(js|ts)$/)
context.keys().forEach(_ => {
    const path = _.replace('./', '')
    routes.push(...require('./modules/' +  path).routes)
})
export default new Router({
    routes: [
        ...routes
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
