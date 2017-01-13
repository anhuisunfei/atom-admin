import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opend: false,
    hidden: false
  },
  effect: {
    translate3d: true
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'moble'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_SIDEBAR] (state, opened) {
    if (state.device.isMobile) {
      state.sidebar.opened = opened
    } else {
      state.sidebar.opened = true
    }
  }
}

export default {
  state,
  mutations
}
