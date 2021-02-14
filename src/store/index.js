import Vue from 'vue'
import Vuex from 'vuex'
import todo from '@/store/todo'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { todo }
  })
}

export default createStore()
