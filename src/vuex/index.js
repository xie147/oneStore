/**
 * Created by Administrator on 2018/9/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state.js'
import mutations from './mutations.js'
const store = new Vuex.Store({
  state,
  mutations
});
export  default store
