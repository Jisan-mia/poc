import { getAuthorizationHeader } from "./common";
import axios from 'axios'


const submitResultToApi = async (data) => {
  const headers = getAuthorizationHeader();
        
  const content_type = 'multipart/form-data';
  

  const getFormData = object => Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
  }, new FormData());
  try{
  
    
    const res = await axios({
      method: 'POST',
      url: 'http://www.exam.poc.ac/api/show_all_report/',
      data: getFormData(data),
      headers: {
		    'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
       }
    });


    //console.log(res)
    if(res.data.code !== 200) {
      throw Error('Error student register')
    }
    return res;
  } catch (err) {
    return 'Error registering student profile'
  }
}



export default {
  submitResultToApi
}