import Vue from "vue";
import Vuex from "vuex";
import login from "./login"

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules:{
    login
  }
});
