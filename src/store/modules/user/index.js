import userApi from "../../../api/userApi";
import { userMutationTypes } from "./user.mutationTypes";

const state = {
  phone_number: '',
  password: '123456',
}

const mutations = {
  [userMutationTypes.SET_USER](state, payload) {
    state = {...state, ...payload }
  }
}

const actions = {
  async registerByPhonePass(context, payload) {
    const res = await userApi.registerUserByPhonePass(payload);
    context.commit(res.data)
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