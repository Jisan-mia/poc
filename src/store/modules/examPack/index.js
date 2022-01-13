import { getNotification, getDateDiff } from "../../../api/common";
import examPackApi from "../../../api/examPackApi";
import { examPackMutationTypes } from "./examPack.mutationTypes";


const state = {
  examPacks: [],
  examLists: [],
  examQuestions: []
}

const mutations = {
  [examPackMutationTypes.SET_EXAM_PACK](state, payload) {
    state.examPacks = payload
    console.log(state)
  },
  [examPackMutationTypes.SET_EXAM_LIST](state, payload) {
    state.examLists = payload
    console.log(state)
  },
  [examPackMutationTypes.SET_EXAM_QUESTIONS](state, payload) {
    state.examQuestions = payload
  }
}

const actions = {
  async loadExamPacks(context) {
    const res = await examPackApi.getExamPackList();
    console.log(res)
    const data = await res.data;

    if(data) {
      context.commit(examPackMutationTypes.SET_EXAM_PACK, data)
    } else {
      const notification = {
        type: 'error',
        message: 'Error getting student exam packs'
      }

      context.dispatch('notifications/add', notification , {root: true})
      
      throw new Error('could not load exam packs')
    }
  },
  async loadExamLists(context) {
    const res = await examPackApi.getExamLists();
    console.log(res);
    const data = await res.data;

    if(data) {

      const mainExam = data.map(exam => {
        console.log(exam)
        if(getDateDiff(exam.Exam_end_date, exam.Exam_end_time)) {
          return {
            ...exam,
            isExpired: true
          }
        } else if (!getDateDiff(exam.Exam_start_date, exam.Exam_start_time)) {
          return {
            ...exam,
            isNotYetStarted: true
          }
        } return exam
      })
      console.log(mainExam)




      context.commit(examPackMutationTypes.SET_EXAM_LIST, mainExam)
    } else {
      const notification = {
        type: 'error',
        message: 'Error getting student exam lists'
      }

      context.dispatch('notifications/add', notification , {root: true})
      
      throw new Error('could not exam lists')
    }
  },

  async loadExamQuestions(context, id) {
    const res = await examPackApi.getExamQuestions(id);
    console.log(res);
    const question_data = await res.question_data;

    if(question_data) {
      const allQuestion = [];

      for(let key in question_data) {
        for(let i in question_data[key]) {
          allQuestion.push({
            ...question_data[key][i],
            type: key,
          })
        }
      }

      
      const setQuestionOption = async (question) => {
        
        const optionRes = await examPackApi.getQuestionOptions(question.question_name);
        const optionData = await optionRes.option_data;
        let mainOptions = []
        if(optionData) {
          console.log(optionData)
          
          for(let optionKey in optionData) {
            if(optionData[optionKey].length) {
              mainOptions = [...optionData[optionKey]]
            }
          }
          // console.log(mainOptions)
          
        }
        console.log({...question, options: mainOptions})
        return {...question, options: mainOptions}
      }

      const allQuestionWithOptions =await Promise.all(allQuestion.map(setQuestionOption))
      
      console.log(allQuestionWithOptions)

      // console.log(allQuestion)
      context.commit(examPackMutationTypes.SET_EXAM_QUESTIONS, allQuestion)
    } else {
      const notification = {
        type: 'error',
        message: 'Error getting student exam lists'
      }

      context.dispatch('notifications/add', notification , {root: true})
      throw new Error('could not exam lists')
    }

  }
  

}


export const examPack = {
  namespaced: true,
  state,
  mutations,
  actions
}