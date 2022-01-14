import axios from 'axios'
import dayjs from 'dayjs'
const state = {
  allSelectedAns: [],
  score: 0,
  negative_marking: 0
}
const mutations = {
  setSelectedAns(state, payload) {
    state.allSelectedAns = payload
    //console.log(state)
  },
  scoreCalculate(state, payload) {
    state.score = payload
  },
  negativeMarkCalculation(state, payload) {
    state.negative_marking = payload
  }
}

const actions = {
  selectedAnsHandle(context, option) {
    const allSelectedAns = context.state.allSelectedAns;
    if(option) {
      const mainAns = [...allSelectedAns]
      const getMainAllAns = () => {
        const isItThere = mainAns.find(ans => ans.Question == option.Question)
        if(isItThere) {
          const findIndex = mainAns.findIndex(ans => ans.Question == option.Question)
          mainAns.splice( findIndex,1,option)
        } else {
          mainAns.splice(mainAns.length, 0, option)
        }
        return mainAns;

      }

      allSelectedAns.length ? getMainAllAns() : mainAns.splice(0, 0, {
        ...option
      })

      context.commit('setSelectedAns', mainAns)
      context.dispatch('handleScoreCalculation')
    }
  },
  handleScoreCalculation(context) {
    const allSelectedAns = context.state.allSelectedAns;
    const examQuestions = context.rootState.examPackState.examQuestions;
    if(allSelectedAns.length !== 0 && examQuestions.length !== 0) {
      const { mark_per_question, amount_per_mistake, isNegativeMarking} = examQuestions[0];
      //console.log(mark_per_question, amount_per_mistake, isNegativeMarking)

      let total = 0;
      let totalNegativeMark = 0;
      if(isNegativeMarking) {
        const scoring = allSelectedAns.map(ans => {
          return ans.is_correct ? mark_per_question : -amount_per_mistake
        })
        totalNegativeMark = scoring.filter(s => s < 0).reduce((acc, negMark) => acc + negMark, 0);
        
        total = scoring.reduce((acc, score) => acc + score, 0)

      } else {
        const scoring = allSelectedAns.map(ans => {
          return ans.is_correct ? mark_per_question : 0
        })
        total = scoring.reduce((acc, score) => acc + score, 0)
      }


      context.commit('scoreCalculate', total)
      context.commit('negativeMarkCalculation', totalNegativeMark)
      //console.log({total})
      //console.log({totalNegativeMark})
    }
  },

  async submitExamResult(context) {
    const score = context.state.score;
    const negative_marking = context.state.negative_marking;
    const timestamp = dayjs(new Date()).format('hh:mm:ss A');

    //console.log(score, negative_marking, timestamp)


    

  }   
  
}


export const examResult = {
  namespaced: true,
  state,
  mutations,
  actions,
}