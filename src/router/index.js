import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Foo = {template: '<div>foo</div>'};
const UserProfile={template:'<div>userProfile</div><router-view></router-view>'}
const User = {
  template: '<div>User {{$route.params.username}} {{$route.params.post_id}}</div>',
  // watch:{
  //   '$route'(to,from){
  //
  //   }
  // }
  beforeRouteUpdate(to, from, next) {
    console.log({to, from, next})
  }
};

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: '登录页面',
    hidden: true,
    component: resolve => require(['../components/login/Login.vue'], resolve)
  },
  {
    path: '/readme',
    meta: {
      title: 'Readme',
      icon: 'el-icon-menu'
    },
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: 'Readme',
        path: '/',
        meta: {
          title: 'Readme',
          icon: 'el-icon-menu'
        },
        component: resolve => require(['../components/page/Readme.vue'], resolve)
      }
    ]
  },
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/test',
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        path: '/',

        component: resolve => require(['../components/page/Test.vue'], resolve),
        children:[
          {
            path:'/',
            alias:'go',
            components:{
              default:Foo,
              a:Foo,
              b:Foo,
            }
          }
        ]
      },
      // {
      //   path:'go',
      //   component:resolve=>require(['../components/page/Test.vue'],resolve)
      // }

    ]

  },
  {
    path:'/user/',
    component:resolve => require(['../components/page/Test2.vue'], resolve),
    children:[
      // {
      //   path:':id/',
      //   name:'user',
      //   component:UserProfile,
        // children:[
        //   {
        //     path:'post/:post_id',
        //     component:Post_id
        //   }
        // ]
      // }
    ]
  },
  {
    path: '/user/:id',
    name:'user',
    component: resolve => require(['../components/page/Test2.vue'], resolve),
    },

  {
    path: '/user/:username/post/:post_id',
    component: User
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})


export const asyncRouterMap = [
  {
    path: '/permission',
    meta: {
      title: 'permission',
      icon: 'el-icon-setting',
      roles: ['admin']
    },
    component: resolve => require(['../components/common/Home.vue'], resolve),
    children: [
      {
        name: 'permission',
        path: '/permission',
        meta: {
          title: 'permission',
          icon: 'el-icon-menu',
          roles: ['admin']
        },
        component: resolve => require(['../components/page/Permission.vue'])
      }
    ]
  }
]
