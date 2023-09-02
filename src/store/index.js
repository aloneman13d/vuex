import { createStore } from "vuex";
import counterModule from "./modules/counter";

const store = createStore({
    modules:{
        //namespaced -> counterMod
        counterMod: counterModule,
    }
})

export default store