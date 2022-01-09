import userApi from "../../../api/userApi";
import { userMutationTypes } from "./user.mutationTypes";

const state = {
  user: {
    phone_number: '',
    password: '',

    user:'', // same as phone_number
    image: '',
    name:"",
    email:'',
    level:'',
    batch:'',
    board:'',
    institution:''
  }
}

const mutations = {
  [userMutationTypes.SET_USER](state, payload) {
    state.user = {...state.user, ...payload }
    console.log(state)
  }
}

const actions = {
  async registerByPhonePass(context, payload) {
    const res = await userApi.registerUserByPhonePass(payload);
    console.log(res)
    const data = await res.data;
    if(data) {
      context.commit(userMutationTypes.SET_USER , data)
    } else {
      context.commit(userMutationTypes.SET_USER , {
        phone_number: '',
        password: ''
      })
      const notification = {
        type: 'error',
        message: 'Error registering user'
      }

      context.dispatch('notifications/add', notification , {root: true})
      
      throw new Error('could not complete register')
    }
  }

}


const getters = {

}

export const user = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}