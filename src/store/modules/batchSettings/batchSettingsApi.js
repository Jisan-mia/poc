import axios from 'axios'

const getBatchSettings = async () => {
  try{
    const res = await axios.get('https://www.exam.poc.ac/api/batch_data_get/',
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    }
    );
    //console.log(res)
    if(res.data.code !== 200) {
      throw Error('Could not get batch settings')
    }
    return res.data;
  } catch (err) {
    // console.log(err.message)
    return 'Error getting batch settings'
  }
}


export default {
  getBatchSettings,
}