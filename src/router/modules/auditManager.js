/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
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
      component: () => import('@/views/auditConfirm/index'), // Parent router-view
      name: 'auditConfirm',
      meta: { title: '审计确认',icon: 'form' },
      children: [
        {
          path: 'action',
          component: () => import('@/views/auditConfirm/action'),
          name: 'action',
          meta: { title: '流程处理' }
        },
        {
          path: 'list',
          component: () => import('@/views/table/index'),
          name: 'list',
          meta: { title: '结果查询' }
        },
        {
          path: 'upload',
          component: () => import('@/views/form/index'),
          name: 'upload',
          meta: { title: '数据补录' }
        }
      ]
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
}
export default tableRouter
