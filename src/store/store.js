import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        newState: ''
    },
    mutations: {
        change(state, newState) {
            this.state.newState = newState
        }
    },
    getters: {
        newState: state => state.newState
    }
})