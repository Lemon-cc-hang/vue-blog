import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    // set  mutations: 转变
    SET_TOKEN: (state, token) => {
      state.token = token;
      localStorage.setItem("token", token);
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
      // 由于不能存对象, 所以要序列化
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    REMOVE_INFO: state => {
      state.token = '';
      state.userInfo = {};
      localStorage.setItem("token", '');
      sessionStorage.setItem("userInfo", JSON.stringify(''));
    }
  },
  getters: {
    // get
    getUser: state => {
      return state.userInfo;
    }
  },
  actions: {
  },
  modules: {
  }
})
