import { Components } from '../views/components'
import { Buttons } from '../views/components/Buttons'
import { Tables } from '../views/components/Tables'

export default {
  path: '/elements',
  name: 'Elements',
  meta: {
    icon: 'icon-chemistry',
    expanded: false
  },
  component: Components,
  children: [{
    name: 'Buttons',
    path: '/buttons',
    component: Buttons
  }, {
    name: 'Tables',
    path: '/tables',
    component: Tables
  }]

}
