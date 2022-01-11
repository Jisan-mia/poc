import { getAuthorizationHeader } from "./common";
import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQyNDM5MTkzLCJqdGkiOiIxMTBmMmFjMzVlMmI0ODMyOGViNzNjN2NmMTVlNGJlYiIsInVzZXJfaWQiOjgzfQ.GSIoNDRsYQftQFnfcGVAvDy7C0n7j-upao776bFT0ms'

const getStudentReporting = async () => {
    try{
      const res = await axios.get('http://www.exam.poc.ac/api/get_student_report/',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
      );
      console.log(res)
      if(res.data.code !== 200) {
        throw Error('Could not get student reporting')
      }
      return res.data;
    } catch (err) {
      console.log(err.message)
      return 'Error getting student reporting'
    }
}

const getSpecificReporting = async (exam_name) => {
  try{
    const res = await axios.get(`http://www.exam.poc.ac/api/get_result_specific_sub/${exam_name}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    );
    console.log(res)
    if(res.data.code !== 200) {
      throw Error('Could not get student specific reporting');
    }
    return res.data;
  } catch (err) {
    console.log(err.message)
    return 'Error getting student specific reporting'
  }
}

export default {
  getStudentReporting,
  getSpecificReporting
}