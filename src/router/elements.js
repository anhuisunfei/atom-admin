export default {
  path: '/elements',
  meta: {
    icon: 'icon-chemistry',
    expanded: false,
    label: 'Elements'
  },
  component: require('../views/components'),
  children: [{
    name: 'Buttons',
    path: '/buttons',
    component: require('../views/components/Buttons')
  }]

}
