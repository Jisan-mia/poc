import { getNotification, getDateDiff, shuffleArray } from "../../../api/common";
import examPackApi from "../../../api/examPackApi";
import reportingApi from "../../../api/reportingApi";
import { examPackMutationTypes } from "./examPack.mutationTypes";
import { v4 as uuidv4 } from 'uuid';



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
    const resReporting = await reportingApi.getStudentReporting();
    
    
    const data = await res.data;
    const reportingData = await resReporting.data
    // console.log(reportingData)


    if(data && reportingData) {
      const userId = context.rootState.userState.user.userId;

      // let hasExamAlreadyGiven = reportingData.find(report => {
      //   if(data.findIndex(exam => exam.id == report.exam_name) !== -1) {
      //     return report.student == userId
      //   }
      // });

      // hasExamAlreadyGiven = hasExamAlreadyGiven

      // console.log(userId, reportingData, data)

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
        } 
        // else if(hasExamAlreadyGiven) {
        //   return {
        //     ...exam,
        //     hasExamAlreadyGiven: true
        //   }
        else {
          let hasExamAlreadyGiven = reportingData.find(report => {
            if(exam.id == report.exam_name) {
              return report.student == userId
            }
          })
          if(hasExamAlreadyGiven) {
            return {
              ...exam,
              hasExamAlreadyGiven: true
            }
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
      const allQuestionThree = [];

      const setUpQuestionThree = (question) => {
        const {id, q_description, q_image, exam_pack, exam_name} = question;
        const mainThreeQuestion = {
          id,
          uuid: uuidv4(),
          type: 'data_three',
          q_description,
          q_image,
          exam_pack,
          exam_name,
          otherQuestions: [
            {
              uuid: uuidv4(),
              type: 'data_one',
              question_name: question.question_name,
              exam_pack,
              exam_name,
              options: [
                {
                  Question: question.question_name,
                  ans: question.question_one_ans_one,
                  is_correct: question.question_one_ans_one_is_correct
                },
                {
                  Question: question.question_name,
                  ans: question.question_one_ans_two,
                  is_correct: question.question_one_ans_two_is_correct
                },
                {
                  Question: question.question_name,
                  ans: question.question_one_ans_three,
                  is_correct: question.question_one_ans_three_is_correct
                },
                {
                  Question: question.question_name,
                  ans: question.question_one_ans_four,
                  is_correct: question.question_one_ans_four_is_correct
                }
              ]
            },
            {
              uuid: uuidv4(),
              type: 'data_two',
              question_name: question.question_name_two,
              exam_pack,
              exam_name,
              data_one: question.sample_one,
              data_two: question.sample_two ,
              data_three: question.sample_three,
              options: [
                {
                  Question: question.question_name_two,
                  ans: question.question_two_ans_one,
                  is_correct: question.question_two_ans_one_is_correct
                },
                {
                  Question: question.question_name_two,
                  ans: question.question_two_ans_two,
                  is_correct: question.question_two_ans_two_is_correct
                },
                {
                  Question: question.question_name_two,
                  ans: question.question_two_ans_three,
                  is_correct: question.question_two_ans_three_is_correct
                },
                {
                  Question: question.question_name_two,
                  ans: question.question_two_ans_four,
                  is_correct: question.question_two_ans_four_is_correct
                }
              ]
            }
          ]

        }
        
        const questionSelectedAns = mainThreeQuestion.otherQuestions.map((q) => {
          // const rightAns = q.options.find(option => option.is_correct == true);
          const mainOptions = q.options.map(op => {
            return {
              ...op,
              qName: question.uuid
            }
          })
          return {
            ...q,
            // selectedOption: rightAns.ans,
            options: mainOptions
          }
        })

        const mainQuestionThree = {
          ...mainThreeQuestion,
          otherQuestions: questionSelectedAns
        }

        allQuestionThree.push(mainQuestionThree);
      }

      for(let key in question_data) {
        for(let i in question_data[key]) {
          if(key !== "data_three") {
            allQuestion.push({
              ...question_data[key][i],
              type: key,
              mark_per_question,
              isNegativeMarking,
              amount_per_mistake,
              uuid: uuidv4(),
            })
          } else {
            setUpQuestionThree(question_data[key][i])

          }
          
        }
      }

      const setQuestionOption = async (question) => {
        
        const optionRes = await examPackApi.getQuestionOptions(question.question_name);
        const optionData = await optionRes.data;
        let mainOptions = []
        if(optionData) {
          //console.log(optionData)
          const mainOptionsData = optionData.map(o => {
            return {
              ...o,
              qName: question.uuid   // changed from question.question_name,
            }
          })
          
          return {...question, options: mainOptionsData}
        }
        //console.log({...question, options: mainOptions})
      }

      const allQuestionWithOptions =await Promise.all(allQuestion.map(setQuestionOption))
      const allMainQWithOptions = [...allQuestionWithOptions, ...allQuestionThree]

      const finalQuestions = isRandomized ? shuffleArray(allMainQWithOptions) : [...allMainQWithOptions]

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