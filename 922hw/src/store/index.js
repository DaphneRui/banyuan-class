import Vue from "vue";
import Vuex from "vuex";
// import login from "./login"
import * as types from "./mutation-type"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {},

  },
  mutations: {
    [types.UPDATE_USER](state,data){
      console.log(data)
      state.user = data
    },

  },
  actions: {
    updateUser({ commit },obj){
      localStorage.setItem('user',JSON.stringify(obj))
      commit(types.UPDATE_USER,obj)
    },

  },
  modules: {
    // login
  }
});
