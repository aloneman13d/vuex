import { createStore } from "vuex";

const store = createStore({
    state(){
        return {counter:0}
    },
    getters:{
        getCounter(state){return state.counter}
    },
    mutations:{
        increment(state,payload){
            state.counter = state.counter + payload
        }
    },
    actions:{
        increment(context,payload){
            context.commit('increment',payload)
        }
    }
})

export default store