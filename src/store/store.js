import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        newState: ''
    },
    // The state cannot be manipulated except by using mutations. We set up one mutation which 
    // will be used inside the Form component to notify the store that the state should change.
    mutations: {
        //you can call this mutation using this.$store.commit('change', value)
        change(state, newState) {
            this.state.newState = newState
        }
    },
    // getters is an object. newState is a property of this object,
    // which accepts the state as the parameter, and returns the newState property of the state.
    getters: {
        // you can access getters method directly by using this.$store.getters.newState
        newState: state => state.newState
    }
})