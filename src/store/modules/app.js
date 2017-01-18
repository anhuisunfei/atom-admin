import * as types from '../mutation-types'
const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opened: true,
    hidden: false
  },
  effect: {
    translate3d: true
  }
}
const mutations = {
  [types.TOGGLE_DEVICE](state, device) {
    state.device.isMobile = device === 'moble'
    state.device.isTablet = device === 'tablet'
  },
  [types.TOGGLE_SIDEBAR](state, opened) {
    state.sidebar.opened = opened
  }
}
export default {
  state,
  mutations
}
