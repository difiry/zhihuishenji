/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/auditManager',
  component: Layout,
  redirect: '/auditManager/auditConfirm',
  name: 'auditManager',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    
    {
      path: 'auditManager',
      component: () => import('@/views/auditConfirm/index'),
      name: 'ComplexTable',
      meta: { title: 'complexTable' }
    }
  ]
}
export default tableRouter
