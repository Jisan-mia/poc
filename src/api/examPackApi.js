import { getAuthorizationHeader } from "./common";
import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNjk4NzQzLCJqdGkiOiJjMTQ3NDgyZWRhMDI0NjU4ODNkZmNmNWFhYWM4ODRmOSIsInVzZXJfaWQiOjg4fQ.Kz2vQS6LfP-wfghrkRC6ufa-_1pKeHAOXLr-c_2E4Dc'
const getExamPackList = async () => {
  const headers = getAuthorizationHeader()
    try{
      const res = await axios.get('http://www.exam.poc.ac/api/get_student_exam_pack',
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }
      );
      //console.log(res)
      if(res.data.code !== 200) {
        throw Error('Error getting exam pack')
      }
      return res.data
    } catch (err) {
      //console.log(err.message)
      return 'error getting student exam pack'
    }
  
}

const getExamLists = async () => {
  try{
    const res = await axios.get('http://www.exam.poc.ac/api/student_exam_list/',
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    }
    );
    //console.log(res)
    if(res.data.code !== 200) {
      throw Error('Error getting exam lists')
    }
    return res.data
  } catch (err) {
    //console.log(err.message)
    return 'error getting student exam lists'
  }
}

const getExamQuestions = async (id) => {
  try{
    const res = await axios.get(`http://www.exam.poc.ac/api/get_question/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    }
    );
    //console.log(res)
    if(res.data.code !== 200) {
      throw Error('Error getting exam questions')
    }
    return res.data
  } catch (err) {
    //console.log(err.message)
    return 'error getting exam questions'
  }
}

const getQuestionOptions = async (questionName) => {
  
  let data = new FormData();
  data.append('question_name', questionName);

  try{
    
    const res = await axios({
      method: 'post',
      url: 'http://exam.poc.ac/api/all_option_get/',
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        
      },
      data: data

    })
    if(res.data.code !== 200) {
      throw Error('Error getting question options')
    }
    return res.data
  } catch (err) {
    //console.log(err.message)
    return 'error getting question options'
  }
}



export default {
  getExamPackList,
  getExamLists,
  getExamQuestions,
  getQuestionOptions
}