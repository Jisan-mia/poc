import axios from 'axios'
import dayjs from 'dayjs'
import examApi from '../../../api/examApi'
import reportingApi from '../../../api/reportingApi'
const state = {
  allSelectedAns: [],
  score: 0,
  negative_marking: 0,
  isExamSubmitted: false,
  viewDownloadQuestions: [],
  answerSheet: []
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
  },
  setExamIsSubmitted(state, payload) {
    state.isExamSubmitted = payload
  },
  setViewDownloadQuestions(state, payload) {
    state.viewDownloadQuestions = payload
    // console.log(state.viewDownloadQuestions)
  },
  setAnswerSheet(state, payload) {
    state.answerSheet = payload
  }
}

const actions = {
  selectedAnsHandle(context, option) {
    const allSelectedAns = context.state.allSelectedAns;
    if(option) {
      // console.log(option)
      const mainAns = [...allSelectedAns]
      const getMainAllAns = () => {
        const isItThere = mainAns.find(ans => ans.Question == option.Question && ans.qName == option.qName)
        if(isItThere) {
          const findIndex = mainAns.findIndex(ans => ans.Question == option.Question  && ans.qName == option.qName)
          mainAns.splice( findIndex,1,option)
        } else {
          mainAns.splice(mainAns.length, 0, option)
        }
        return mainAns;
      }

      allSelectedAns.length ? getMainAllAns() : mainAns.splice(0, 0, {
        ...option
      })

      // console.log(mainAns)
      context.commit('setSelectedAns', mainAns)
      context.dispatch('handleScoreCalculation')
    }
  },

  viewDownloadSelectedAnsThree(context, option) {
    const viewDownloadQuestions = [...context.state.viewDownloadQuestions]
    const modifiedVDQ = viewDownloadQuestions.map(mainQ => {
      // let main = []
      if(mainQ.uuid == option.parentQuestion) {
        const main = mainQ.otherQuestions.map(oQ => oQ.uuid == option.qName ? {...oQ, selectedAns: option.ans} : oQ)
        return {...mainQ, otherQuestions: main}
      }
      return mainQ
      
    })
    // console.log(modifiedVDQ)
    context.commit('setViewDownloadQuestions', modifiedVDQ)
  },

  viewDownloadSelectedAns(context, option) {
    const viewDownloadQuestions = [...context.state.viewDownloadQuestions]
    const modifiedVDQ = viewDownloadQuestions.map(question => question.uuid == option.qName ? {...question, selectedAns: option.ans} : question)

    // console.log(modifiedVDQ)
    context.commit('setViewDownloadQuestions', modifiedVDQ)
  },

  handleScoreCalculation(context) {
    const allSelectedAns = context.state.allSelectedAns;
    const examQuestions = context.rootState.examPackState.examQuestions;
    // console.log(allSelectedAns)
    if(allSelectedAns.length !== 0 && examQuestions.length !== 0) {
      const { mark_per_question, amount_per_mistake, isNegativeMarking} = examQuestions[0];
      // console.log(mark_per_question, amount_per_mistake, isNegativeMarking, 199)
      // console.log( typeof mark_per_question,typeof amount_per_mistake,typeof isNegativeMarking, 199)


      let total = 0;
      let totalNegativeMark = 0;
      if(isNegativeMarking) {
        const scoring = allSelectedAns.map(ans => {
          return ans.is_correct ? +mark_per_question : -amount_per_mistake
        })
        totalNegativeMark = scoring.filter(s => s < 0).reduce((acc, negMark) => acc + negMark, 0);
        

        const scoring1 = allSelectedAns.map(ans => {
          return ans.is_correct ? +mark_per_question : 0
        })
        
        total = scoring1.reduce((acc, score) => acc + score, 0)

      } else {
        const scoring = allSelectedAns.map(ans => {
          return ans.is_correct ? +mark_per_question : 0
        })
        total = scoring.reduce((acc, score) => acc + score, 0)
      }

      // console.log(total)
      context.commit('scoreCalculate', total)
      context.commit('negativeMarkCalculation', totalNegativeMark)
      // console.log({total})
      // console.log({totalNegativeMark})
    }
  },

  async submitExamResult(context, examId) {
    console.log('submit')
    const examQuestions = context.rootState.examPackState.examQuestions;
    // console.log(examQuestions)
    const exam_name= examQuestions?.[0]?.exam_name
    if(exam_name) {
      const student = context.rootState.userState.user.userId;
      const {name,board} = context.rootState.userState.profile;

      const allExams = context.rootState.examPackState.examLists;
      const currentExam = allExams.find(exam => exam.id == examId);
      // console.log(currentExam, name, board)

      const allViewDownloadQ = context.state.viewDownloadQuestions;





      const score = context.state.score;
      const negative_marking = context.state.negative_marking;
      const timestamp = dayjs(new Date()).format('HH:mm:ss');
      // console.log('submit2')

      // console.log(score, negative_marking, timestamp, exam_name, student)

      const dataToSend = {
        score,
        negative_marking,
        timestamp,
        exam_name,
        student,
        // todo
        /* add 2 extra fields
          1. passed: true/false 
          2. failed: true/false
        */
      }
      const dataToSendSpecificR = {
        score,
        negative_marking,
        timestamp,
        exam_name,
        student,
        name,
        board
      }

      const viewDownloadData = {
        exam_id: exam_name,
        all_question: JSON.stringify(allViewDownloadQ)
      }
      

      if(localStorage.getItem(`deadline${examId}`)) {
        const reportingRes = await reportingApi.getStudentReporting();
        const reportingData = await reportingRes.data;

        const report = reportingData.find(r => r.exam_name == examId)
        if(report) {
          console.log('alreday given')
          const notification = {
            type: 'error',
            message: "You've already given"
          }
    
          context.dispatch('notifications/add', notification , {root: true})
        } else {
          console.log('not given')
          const res = await examApi.submitResultToApi(dataToSend)
          const res1 = await examApi.submitResultToSpecificApi(dataToSendSpecificR, currentExam.Exam_name);
          const viewAnswerSheet = await examApi.submitViewDownloadQuestion(viewDownloadData)
          console.log(viewAnswerSheet)
          // console.log(res1)
      
          const data = await res.data
          const specificData = await res1.data
          // console.log(data)
          if(data) {
            const notification = {
              type: 'success',
              message: 'Your answer has been submitted'
            }
      
            context.dispatch('notifications/add', notification , {root: true})
            
      
            context.commit('setExamIsSubmitted', true)
            localStorage.removeItem(`deadline${examId}`)

      
          } else {
            const notification = {
              type: 'error',
              message: 'Error submitting you answer'
            }
      
            context.dispatch('notifications/add', notification , {root: true})
          }
            
        }

        
      } else {
        const notification = {
          type: 'error',
          message: 'Could not submit you answer'
        }

        context.dispatch('notifications/add', notification , {root: true})
      }
    }

    

    
  },

  async getViewDownloadAnswer(context, examId) {
    const res = await examApi.getViewDownload(examId)
    console.log(res)
    const data = await res.data
    if(data[0]) {
      const viewDownloadAnswer = JSON.parse(data[0].all_question)
      // console.log(viewDownloadAnswer)
      context.commit('setAnswerSheet',viewDownloadAnswer )

    } else {
      const notification = {
        type: 'error',
        message: 'Could not get your answer sheet'
      }

      context.dispatch('notifications/add', notification , {root: true})
    }
  }
  
}


export const examResult = {
  namespaced: true,
  state,
  mutations,
  actions,
}