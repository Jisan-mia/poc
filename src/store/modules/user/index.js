import { getNotification } from "../../../api/common";
import userApi from "../../../api/userApi";
import { userMutationTypes } from "./user.mutationTypes";
// import firebase from 'firebase'


const state = {
  user: {
    phone_number: '',
    password: '',
    userId: 0,

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
  }, 
  profile: null,
  allStudentList: null,
  isOtpSent: false,
  isOtpVerified: false
}

const mutations = {
  initializeStore(state) {
    if(localStorage.getItem('token')) {
      state.user.token = localStorage.getItem('token');
      state.user.isAuthenticated = true;
      state.user.userId = localStorage.getItem('userId');
    } else {
      state.user.token = ''
      state.user.isAuthenticated = false
      state.user.userId = 0;

    }
  },
  setUserId(state, userId) {
    state.user.userId = userId
  },
  setToken(state, token) {
    state.user.token = token
    state.user.isAuthenticated = true
  },
  setIsOtpSent(state, payload) {
    state.isOtpSent = payload
  },
  setIsOtpVerified(state, payload) {
    state.isOtpVerified = payload
  },
  removeToken(state) {
    state.user.token = ''
    state.user.isAuthenticated = false
  },
  setProfile(state, profile) {
    state.profile = profile;
    //console.log(state.profile)
  },
  setAllStudent(state, allStudent) {
    state.allStudentList = allStudent;
  },
  [userMutationTypes.SET_USER](state, payload) {
    state.user = {...state.user, ...payload }
    //console.log(state)
  }
}

const actions = {
  async registerByPhonePass(context, payload) {
    const res = await userApi.registerUserByPhonePass(payload);
    //console.log(res)
    const data = await res.data;
    if(data) {
      context.commit(userMutationTypes.SET_USER , data)
      
      // try{
      //   await context.dispatch('userLogin', data)
      // } catch(err) {
      //   throw Error(err);
      // }
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

  async handleSendOtp(context, payload){
    const phoneNumber = '+88'+payload.phoneNumber;
    const appVerifier = payload.appVerifier;
    console.log(payload)
    try{
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          //
          context.commit('setIsOtpSent', true)
          alert('SMS sent')
        }).catch(function (error) {
        // Error; SMS not sent
        // ...
        alert('Error ! SMS not sent')
        throw Error('error sending sms')
      })
    } catch(err) {
      console.log(err)
    }
  },
  async verifyOtp(context, code) {
    try{
      window.confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        const user = result.user;
        // ...
        //route to set password !
        console.log(user)
        context.commit('setIsOtpVerified',true )
      }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        // ...
        throw Error(error)
      });
    } catch(err) {
      console.log9err
    }
  },




  async userLogin(context, payload) {
    const res = await userApi.handleUserLogin(payload);

    if(res.data) {
      const token = res.data.access_token;
      const userId = res.data.user_id
      context.commit('setToken', token);
      context.commit('setUserId', userId);

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

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
    //console.log(res)


    if(res.data) {
      //console.log(res.data)
      context.dispatch('notifications/add', getNotification('success', 'Successfully Registered'), {root: true})
    } else {
      const notification = {
        type: 'error',
        message: 'Error registering user profile'
      }

      context.dispatch('notifications/add', notification , {root: true})
      throw new Error('Error registering user profile')
    }
  },
  async loadUserProfile(context) {
    const res = await userApi.getAllStudentList();
    console.log(res)

    const data = await res.data
    if(data) {
      context.commit('setAllStudent', data)
      const userId = context.state.user.userId
      console.log(userId)
      const profile = data.find(profile => profile.user == userId)
      context.commit('setProfile', profile)

    } else {
      const notification = {
        type: 'error',
        message: 'Error getting student profile'
      }

      context.dispatch('notifications/add', notification , {root: true})
      throw new Error('Error getting student profile')
    }
  },

  async updateStudentProfile (context, profile) {
    const res = await userApi.updateUserProfile(profile)
    const data = await res.payload;

    if(data) {
      context.commit('setProfile', data)
      context.dispatch('notifications/add', {type: 'success', message: 'Successfully Updated'} , {root: true})
    }else {
      const notification = {
        type: 'error',
        message: 'Error updating student profile'
      }

      context.dispatch('notifications/add', notification , {root: true})
      throw new Error('Error updating student profile')
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