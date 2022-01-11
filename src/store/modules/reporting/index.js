import reportingApi from "../../../api/reportingApi"
import { reportingMutationsTypes } from "./reporting.mutationTypes"

const state = {
  reportings: []
}

const mutations = {
  [reportingMutationsTypes.LOAD_STUDENT_REPORTING](state, payload) {
    state.reportings = payload
    console.log(state)
  }
}

const actions = {
  async loadStudentReporting(context) {
    const res = await reportingApi.getStudentReporting();
    console.log(res)
    const data = await res.data;

    if(data) {
      context.commit(reportingMutationsTypes.LOAD_STUDENT_REPORTING, data)
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