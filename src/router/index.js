import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

/**
 * Layout 整体布局，左边菜单栏，右边contain children子路由，用于填充contain
*/
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/auditManager',
    component: Layout,
    redirect: '/auditManager/form',
    name: 'AuditManager',
    meta: { title: '审计管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '审计立项', icon: 'form' }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '审计抽样', icon: 'table' }
      },
      {
        path: 'auditConfirm',
        name: 'AuditConfirm',
        component: () => import('@/views/auditConfirm/index'),
        meta: { title: '审计确认', icon: 'form' }
      },
      {
        path: 'form2',
        name: 'Form2',
        component: () => import('@/views/form/index'),
        meta: { title: '审计报告征求意见', icon: 'form' }
      },
      {
        path: 'form3',
        name: 'Form3',
        component: () => import('@/views/form/index'),
        meta: { title: '审计报告', icon: 'form' }
      },
      {
        path: 'form4',
        name: 'Form4',
        component: () => import('@/views/form/index'),
        meta: { title: '后续审计', icon: 'form' }
      }
    ]
  },
  {
    path: '/example2',
    component: Layout,
    redirect: '/example2/form',
    name: 'Example2',
    meta: { title: '自助分析', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '审计部', icon: 'form' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '村镇银行', icon: 'form' }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '模型查询', icon: 'table' }
      }
    ]
  },
  {
    path: '/example3',
    component: Layout,
    redirect: '/example3/table',
    name: 'Example3',
    meta: { title: '审计可视化', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '风险热力图', icon: 'table' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '内控评价', icon: 'form' }
      },
      {
        path: 'form2',
        name: 'Form2',
        component: () => import('@/views/form/index'),
        meta: { title: '员工画像', icon: 'form' }
      }
    ]
  },
  {
    path: '/example4',
    component: Layout,
    redirect: '/example4/table',
    name: 'Example4',
    meta: { title: '远程监督', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '风险预警', icon: 'table' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '发现问题查询', icon: 'form' }
      }
    ]
  },
  {
    path: '/example5',
    component: Layout,
    redirect: '/example5/table',
    name: 'Example5',
    meta: { title: '审计数仓', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '审计问题信息库', icon: 'table' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '审计档案', icon: 'form' }
      },
      {
        path: 'form1',
        name: 'Form1',
        component: () => import('@/views/form/index'),
        meta: { title: '外部信息', icon: 'form' }
      }
    ]
  },
  {
    path: '/example6',
    component: Layout,
    redirect: '/example6/table',
    name: 'Example6',
    meta: { title: '审计工具', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '审计共享云盘', icon: 'table' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '审模型需求', icon: 'form' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '通讯录', icon: 'tree' }
      }
    ]
  },
  
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
