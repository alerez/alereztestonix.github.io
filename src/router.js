import Vue from 'vue';
import Router from 'vue-router';
import Activity from "./components/nav/Activity";
//import Content from "./components/Content";
import Tasks from "./components/nav/Tasks";

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: Tasks
        },
        {
            path: '/activity',
            name: 'activity',
            component: Activity
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Tasks,
        }

        ]
})

