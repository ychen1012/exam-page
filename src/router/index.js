import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import TeacherLogin from "../components/TeacherLogin";
import manage from "../components/manage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: manage
    },

    {
      path:"/admin",
      name:"admin_login",
      component:TeacherLogin
    },
    {
      path:"/manage",
      name:"management",
      component:manage
    }
  ]
})
