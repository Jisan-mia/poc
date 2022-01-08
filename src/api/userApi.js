import axios from 'axios'

const registerUserByPhonePass = async (data) => {
  try{
    const res = await axios.post(
      `http://www.exam.poc.ac/api/register/`,
      {
        ...data,
        staff: false
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



export default {
  registerUserByPhonePass
}