import axios from 'axios'
import { getAuthorizationHeader } from './common';

const registerUserByPhonePass = async (data) => {
  try{
    const res = await axios.post(
      `http://www.exam.poc.ac/api/register/`,
      {
        ...data
      },
    )
    console.log(res);
    if(res.data.code != 200) {
      throw Error('Error registering user')
    }
    return res.data;
  } catch(error) {
    console.log(error)
    return "Couldn't register user"
  }
}

const handleUserLogin = async (data) => {
  try{
    const res = await axios.post(
      `http://www.exam.poc.ac/api/token/`,
      {
        ...data,
      },
    )
    console.log(res);
    if(res.status != 200) {
      throw Error('Error logging user')
    }
    return res;
  } catch(error) {
    console.log(error)
    return "Couldn't login user"
  }
}


const registerStudentApi = async (data) => {
  const headers = getAuthorizationHeader();
        
  const content_type = 'multipart/form-data';
  

  // const getFormData = object => Object.keys(object).reduce((formData, key) => {
  //   formData.append(key, object[key]);
  //   return formData;
  // }, 
  // new FormData());
  try{
    // const res = await axios.post(
    //   `http://www.exam.poc.ac/api/Student_Register/`,
    //   {
    //     ...data
    //   },
    //   {
    //    headers: {
		//     'Authorization': `Bearer ${localStorage.getItem('token')}`,

    //    }
    //   }
    // )
    
    const res = await axios({
      method: 'POST',
      url: 'http://www.exam.poc.ac/api/Student_Register/',
      data: data,
      headers: {
		    'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data'
       }
    });


    console.log(res)
    if(res.data.code !== 200) {
      throw Error('Error student register')
    }
    return res;
  } catch (err) {
    return 'Error registering student profile'
  }
}

export default {
  registerUserByPhonePass,
  handleUserLogin,
  registerStudentApi
}