import { getNotification, getDateDiff, shuffleArray } from "../../../api/common";
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
    //console.log(state)
  },
  [examPackMutationTypes.SET_EXAM_LIST](state, payload) {
    state.examLists = payload
    //console.log(state)
  },
  [examPackMutationTypes.SET_EXAM_QUESTIONS](state, payload) {
    state.examQuestions = payload
  }
}

const actions = {
  async loadExamPacks(context) {
    const res = await examPackApi.getExamPackList();
    //console.log(res)
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
    //console.log(res);
    const data = await res.data;

    if(data) {
      const userId = context.rootState.userState.user.userId;
      const reportings = context.rootState.reportingState.reportings;

      let hasExamAlreadyGiven = reportings.filter(report => report.student == userId);

      hasExamAlreadyGiven = hasExamAlreadyGiven.length !== 0

      console.log(userId, reportings, hasExamAlreadyGiven)

      const mainExam = data.map(exam => {
        //console.log(exam)
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
        } else if(hasExamAlreadyGiven) {
          return {
            ...exam,
            hasExamAlreadyGiven
          }
        } return exam
      })
      //console.log(mainExam)




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
    const examLists = context.state.examLists;
    
    const currentExam = examLists.find(exam => exam.id == id);

    const {isRandomized, mark_per_question, amount_per_mistake, isNegativeMarking} = currentExam;
    //console.log(isRandomized);
    

    const res = await examPackApi.getExamQuestions(id);
    //console.log(res);
    const question_data = await res.question_data;

    if(question_data) {
      const allQuestion = [];

      for(let key in question_data) {
        for(let i in question_data[key]) {
          if(key !== "data_three") {
            allQuestion.push({
              ...question_data[key][i],
              type: key,
              mark_per_question,
              isNegativeMarking,
              amount_per_mistake
            })
          }
          
        }
      }

      const setQuestionOption = async (question) => {
        
        const optionRes = await examPackApi.getQuestionOptions(question.question_name);
        const optionData = await optionRes.data;
        let mainOptions = []
        if(optionData) {
          //console.log(optionData)
          
          return {...question, options: optionData}
          // for(let optionKey in optionData) {
          //   if(optionData[optionKey].length) {
          //     mainOptions = [...optionData[optionKey]]
          //   }
          // }
          
        }
        // //console.log({...question, options: mainOptions})
      }

      const allQuestionWithOptions =await Promise.all(allQuestion.map(setQuestionOption))
      

      const finalQuestions = isRandomized ? shuffleArray(allQuestionWithOptions) : [...allQuestionWithOptions]

      context.commit(examPackMutationTypes.SET_EXAM_QUESTIONS, finalQuestions)
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