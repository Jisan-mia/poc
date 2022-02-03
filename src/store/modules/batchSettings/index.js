import axios from 'axios'
import batchSettingsApi from './batchSettingsApi'
const state = {
  batchOptions: [],
  levelOptions: [],
  boardOptions: []

}
const mutations = {
  setBatchOptions(state, payload) {
    state.batchOptions = payload
  },
  setLevelOptions(state, payload) {
    state.levelOptions = payload
  },
  setBoardOptions(state, payload) {
    state.boardOptions = payload
  }
}

const actions = {
  async loadBatchSettings(context) {
    const res = await batchSettingsApi.getBatchSettings();
    const data = await res?.data;
    console.log(res)
    if(data) {
      const batches = data.filter(item => item.batch)
      const levels = data.filter(item => item.level)
      const boards = data.filter(item => item.board)

      const batchMain = batches.map(item => b.batch)
      const levelMain = batches.map(item => b.level)
      const boardMain = batches.map(item => b.board)

      
      context.commit('setBatchOptions', batchMain)
      context.commit('setLevelOptions', levelMain)
      context.commit('setBoardOptions', boardMain)
    }
    
  },
  
export const batchSettings = {
  namespaced: true,
  state,
  mutations,
  actions
}