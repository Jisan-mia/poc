<template>
  <div class="container">
    <h2 class="title"> Complete Your Profile</h2>

    <div class="img__container">
      <img :src="userInputs.image || '/images/placeholderImg2.svg'" alt="">

      <span>
        <i class="fas fa-edit "></i>
        <ImgInputModel v-model="userInputs.image" />
      </span>
    </div>
  

    <div class="form__area">
      <input placeholder="Your name*" type="text" class="input__field" v-model="userInputs.name">

      <input placeholder="Email Address" type="email" v-model="userInputs.email" class="input__field">

      <CustomSelect 
        placeholder="Level*"
        :options="levelOptions"
        v-model="userInputs.level"
        :style="selectStyle"
      />

      <CustomSelect 
        placeholder="Batch*"
        :options="batchOptions"
        v-model="userInputs.batch"
        :style="selectStyle"
      />

      <CustomSelect 
        placeholder="Board*"
        :options="boardOptions"
        v-model="userInputs.board"
        :style="selectStyle"
      />

      <input placeholder="Institution*" v-model="userInputs.institution" type="text" class="input__field">
      <button @click="handleRegisterNewUser" class="edit__btn">Register</button>

    </div>


  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { watchEffect } from '@vue/runtime-core'
import ImgInputModel from '../ui/ImgInputModel.vue'
import CustomSelect from '../ui/CustomSelect.vue'
import { getNotification } from '../../api/common'
import { useStore } from 'vuex'
export default {
  name: "MainRegisterUser",
  props: {
    isRegistrationPage: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const imgFile = ref(null);
    const userInputs = ref({
      user:'',
      image: '',
      name:"",
      email:'',
      level:'',
      batch:'',
      board:'',
      institution:''
    })
        
    const levelOptions = ref(['JSC', 'SSC', 'HSC', 'O-Level', 'A-Level'])
    const batchOptions = ref(['2021', '2022', '2023'])
    const boardOptions = ref(['Dhaka', 'Shylet', 'Comilla'])
    const selectStyle = ref({
          borderRadius: '1.1rem',
          outline: 'none',
          fontSize: '1.1rem',
          padding: '1rem 1.1rem',
          border: '1.5px solid #00D4FE'
        })
    watchEffect(() => {
      console.log(imgFile);
    });
    const handleRegisterNewUser = () => {
      const isError = ref(false)
      for(let key in userInputs.value) {
        if(userInputs.value[key] == '') {
          if(key == 'email' || key == 'user') {
            continue;
          }
          isError.value = true
          store.dispatch('notifications/add',getNotification('warning', `${key} is empty`))
          break; 
        }
        else if (key == 'name' && userInputs.value.name.length < 3) {
          store.dispatch('notifications/add',getNotification('warning', 'Student name must be at least 3 character'))

          isError.value = true
          break;
        }
        else if(key == 'email' && !/\S+@\S+\.\S+/.test(userInputs.value['email'])) {
          store.dispatch('notifications/add',getNotification('warning', 'Please enter valid email'))
          
          isError.value = true
          break;
        } else if(key == 'institution' && userInputs.value.institution.length < 4) {
          store.dispatch('notifications/add',getNotification('warning', 'Institution must be at least 4 character'))

          isError.value = true
          break
        } else {

          isError.value = false;
        }
      }

      if(isError.value) {
        return;
      }

      




      


        // router.push("/dashboard");
    };
    



    return {
      handleRegisterNewUser,
      imgFile,
      userInputs,
      levelOptions,
      batchOptions,
      boardOptions,
      selectStyle
    };
  },
  components: { ImgInputModel, CustomSelect }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h2{
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  line-height: 2.4;
  text-align: center;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  margin-top: -5rem;
  @include maxMedia(768px) {
    margin-top: 0;
  }
}

.img__container{
  height: 170px;
  width: 170px;
  border-radius: 50%;
  position: relative;
  padding-top: 0.3rem;
  background: #dddddd;
}
.img__container img{
  width:100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-position: center center;
}

.img__container span{
  font-size: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: #00A9DC;
  cursor: pointer;

  input {
    position: absolute;
    /* top: 0; */
    opacity: 0;
    inset: 0;
    width: 100%;
    cursor: pointer;
  }
}


.form__area{
  width: 100%;
  height: 100%;
  
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-gap:2rem 1.2em;
}

.form__area .input__field,  .form__area select, .edit__btn{
  border-radius: 1.1rem;
  outline: none;
  font-size: 1.1rem;
  padding: 1rem 1.1rem;
  border: 1.5px solid #00D4FE
;
}
.form__area select option {
  // text-transform: uppercase;
}

.edit__btn{
  border: none;
  outline: none;
  width: 100%;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
  grid-column-start: 2;
}


@media  (max-width:768px) {
  .form__area .input__field,  .form__area select, .edit__btn{
    // border-radius: 1rem;
    // outline: none;
    // font-size: 1.1rem;
    // padding: 0.9rem 1rem;
  }
  .container .form__area{
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  

  .edit__btn{
   grid-column-start: 1;
   margin-bottom: 1rem;
  }
}

@media  (min-width:1115px) {
  .form__area{
    max-width: 70%;
  }
}


</style>
