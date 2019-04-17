import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import TeacherLogin from "../components/TeacherLogin";
import Table from "../components/Table";
import Index from "../components/Index";
import Form from "../components/Form";
import ue from "../components/ue";
import Detail from "../components/Detail";
import studentIndex from "../components/student/studentIndex";
import exam from "../components/student/exam";
import examInfo from "../components/student/examInfo";
import score from "../components/student/score";


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
      path:'/detail',
      component:Detail,
      children:[
        {path: '/question', component: Table, name: '题目管理'},
        {path: '/index', component: Index, name: '考试管理'},
        {path: '/studentManager', component: Form, name: '学生管理'},
        {path: '/editor', component: ue, name: '成绩管理'}

      ]

    },

    {
      path: '/student',
      component: studentIndex,
      children:[
        {path: '/exam',component:exam,name:'开始做答'},
        {path: '/examInfo',component:examInfo,name:'考试查询'},
        {path: '/score' ,component:score,name:'成绩查询'}

]
    }
  ]
})
