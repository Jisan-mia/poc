import { getAuthorizationHeader } from "./common";
import axios from 'axios'

const getStudentReporting = async () => {
    try{
      const res = await axios.get('http://www.exam.poc.ac/api/get_student_report/',
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }
      );
      console.log(res)
    } catch (err) {
      console.log(err.message)
      return 'Error getting student reporting'
    }
  
}
export default {
  getStudentReporting
}