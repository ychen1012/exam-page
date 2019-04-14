import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import TeacherLogin from "../components/TeacherLogin";
import manage from "../components/manage";
import Table from "../components/Table";
import Index from "../components/Index";
import Form from "../components/Form";
import ue from "../components/ue";
import Detail from "../components/Detail";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
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
    },

    {
      path:'/detail',
      component:Detail,
      children:[
        {path: '/tt', component: Table, name: 'ssss'},
        {path: '/index', component: Index, name: 'index'},
        {path: '/form', component: Form, name: '学生管理'},
        {path: '/editor', component: ue, name: 'editor'}

      ]

    }
  ]
})
