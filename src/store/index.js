import { createStore } from 'vuex'
import { counter } from './modules/counter';
import { counter2 } from './modules/counter2';
export default createStore({
  modules: {
    counter1: counter,
    counter2: counter2
  }
})
