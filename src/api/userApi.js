import axios from 'axios'

const registerUserByPhonePass = async (data) => {
  try{
    const res = await axios.post(
      `http://www.exam.poc.ac/api/register_api/`,
      {
        ...data
      },
    )
    console.log(res);
    return res;
  } catch(error) {
    console.log(error)
    return "Couldn't register user"
  }
}


export default {
  registerUserByPhonePass
}