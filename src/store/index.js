import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {

    },
    profile: {

    }
  },
  mutations: {
    /**
     * 设置用户信息
     * @param state
     * @param user
     * @param profile
     */
    updateUserInfo (state, { user, profile }) {
      state.user = {
        ...state.user,
        ...user
      }
      state.profile = {
        ...state.profile,
        ...profile
      }
    },
    /**
     * 删除用户信息
     * @param state
     */
    deleteUserInfo (state) {
      state.user = {}
      state.profile = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
