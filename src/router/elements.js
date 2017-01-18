export default {
  path: '/elements',
  name: 'Elements',
  meta: {
    icon: 'icon-chemistry',
    expanded: false
  },
  component: require('../views/components'),
  children: [{
    name: 'Buttons',
    path: '/buttons',
    component: require('../views/components/Buttons')
  }, {
    name: 'Tables',
    path: '/tables',
    component: require('../views/components/Tables')
  }]

}
