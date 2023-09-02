import counterActions from "./actions"
import counterGetters from "./getters"
import counterMutations from "./mutations"

const counterModule = {
    namespaced: true,
    state(){
        return {counter:0}
    },
    getters:counterGetters,
    mutations:counterMutations,
    actions:counterActions,
}

export default counterModule
