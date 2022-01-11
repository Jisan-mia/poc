import { getNotification } from "../../../api/common";
import userApi from "../../../api/userApi";
import { userMutationTypes } from "./user.mutationTypes";

const state = {
  user: {
    phone_number: '',
    password: '',
    id: 0,

    user:'', // same as phone_number
    image: '',
    name:"",
    email:'',
    level:'',
    batch:'',
    board:'',
    institution:'',
    token: '',
    isAuthenticated: false
  }
}

const mutations = {
  initializeStore(state) {
    if(localStorage.getItem('token')) {
      state.user.token = localStorage.getItem('token');
      state.user.isAuthenticated = true;
      state.user.id = localStorage.getItem('userId');
    } else {
      state.user.token = ''
      state.user.isAuthenticated = false
      state.user.user_id = 0;

    }
  },
  setUserId(state, id) {
    state.user.id = id
  },
  setToken(state, token) {
    state.user.token = token
    state.user.isAuthenticated = true
  },
  removeToken(state) {
    state.user.token = ''
    state.user.isAuthenticated = false
  },

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
      
      try{
        await context.dispatch('userLogin', data)
      } catch(err) {
        throw Error(err);
      }
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
  },
  async userLogin(context, payload) {
    const res = await userApi.handleUserLogin(payload);

    if(res.data) {
      const token = res.data.access_token;
      context.commit('setToken', token);
      localStorage.setItem('token', token)
    } else {
      const notification = {
        type: 'error',
        message: 'Error Logging in user'
      }

      context.dispatch('notifications/add', notification , {root: true})
      throw new Error('could not login user')
    }
  },
  async registerStudent(context, payload) {
    const res = await userApi.registerStudentApi(payload);
    console.log(res)


    if(res.data) {
      console.log(res.data)
      context.dispatch('notifications/add', getNotification('success', 'Successfully Registered'), {root: true})
    } else {
      const notification = {
        type: 'error',
        message: 'Error registering user profile'
      }

      context.dispatch('notifications/add', notification , {root: true})
      throw new Error('Error registering user profile')
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