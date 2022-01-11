import reportingApi from "../../../api/reportingApi"
import { reportingMutationsTypes } from "./reporting.mutationTypes"

const state = {
  reportingS: []
}

const mutations = {
  [reportingMutationsTypes.LOAD_STUDENT_REPORTING](state, payload) {
    state.reportingS = payload
    console.log(state)
  }
}

const actions = {
  async loadStudentReporting(context) {
    const res = await reportingApi.getStudentReporting();
    console.log(res)
    const data = await res.data;
    context.dispatch('notifications/add', {type: 'info', message:'getting getting Student Reporting'} , {root: true})

    if(data) {
      context.commit(examPackMutationTypes.LOAD_EXAMPACK, data)
    } else {
      const notification = {
        type: 'error',
        message: 'Error getting student reporting'
      }

      context.dispatch('notifications/add', notification , {root: true})
      
      throw new Error('could not get student reporting')
    }
  },
}


export const reporting = {
  namespaced: true,
  state,
  mutations,
  actions
}