import { getAuthorizationHeader } from "./common";
import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDM5MTkzLCJqdGkiOiIxMTBmMmFjMzVlMmI0ODMyOGViNzNjN2NmMTVlNGJlYiIsInVzZXJfaWQiOjgzfQ.GSIoNDRsYQftQFnfcGVAvDy7C0n7j-upao776bFT0ms'
const getExamPackList = async () => {
  const headers = getAuthorizationHeader()
    try{
      const res = await axios.get('http://www.exam.poc.ac/api/get_student_exam_pack',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
      );
      console.log(res)
      if(res.data.code !== 200) {
        throw Error('Error getting exam pack')
      }
      return res.data
    } catch (err) {
      console.log(err.message)
      return 'error getting student exam pack'
    }
  
}

const getExamLists = async () => {
  try{
    const res = await axios.get('http://www.exam.poc.ac/api/student_exam_list/',
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }
    );
    console.log(res)
    if(res.data.code !== 200) {
      throw Error('Error getting exam lists')
    }
    return res.data
  } catch (err) {
    console.log(err.message)
    return 'error getting student exam lists'
  }
}

const getExamQuestions = async (id) => {
  try{
    const res = await axios.get(`http://www.exam.poc.ac/api/get_question/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }
    );
    console.log(res)
    if(res.data.code !== 200) {
      throw Error('Error getting exam questions')
    }
    return res.data
  } catch (err) {
    console.log(err.message)
    return 'error getting exam questions'
  }
}


export default {
  getExamPackList,
  getExamLists,
  getExamQuestions
}