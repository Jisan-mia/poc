<template>
<div class="login_cont" v-if="currentStep === 'register'">
  <h3>
    Register
  </h3>

  <form @submit.prevent="handleUserRegister">
    <CustomPhoneInput v-model="userAuthInput.phone_number" placeholder="Enter your phone number" />
    <div class="pass_cont">
      <CustomAuthInput v-model="userAuthInput.password" placeholder="Enter your password" :type="inputType"/>
      <!-- <i class="fas fa-eye-slash"></i> -->
      <span class="btn" @click="showPassword = !showPassword" v-if="!showPassword" >
        <i class="fas fa-eye-slash" ></i>
      </span>

      <span class="btn" @click="showPassword = !showPassword" v-else-if="showPassword" >
        <i class="fas fa-eye" ></i>
      </span>
    </div>

    <p>
      Already have an account? <router-link  :to="{name: 'Login'}"> <span class="special"> Login </span></router-link>
    </p>

    <CustomLoginRegisterBtn  buttonText="Register" :isSpin="buttonLoading"/>
  </form>
</div>
  <!--now were are not using firebase-->
  <!-- <SendOtp :isRegistrationPage="true" :regPhone="userAuthInput.phone_number" v-else/>  -->

  <MainRegisterUser v-else /> 

</template>

<script>
import { computed, ref } from '@vue/reactivity'
import CustomAuthInput from '../../components/Auth Components/CustomAuthInput.vue'
import CustomPhoneInput from '../../components/Auth Components/CustomPhoneInput.vue'
import CustomLoginRegisterBtn from '../../components/ui/CustomLoginRegisterBtn.vue'
import SendOtp from '../../components/Auth Components/SendOtp.vue'
import MainRegisterUser from '../../components/Auth Components/MainRegisterUser.vue'
import { useStore } from 'vuex'
import { watchEffect } from '@vue/runtime-core'
import { getNotification } from '../../api/common'
import router from '../../router'
import { useRouter } from 'vue-router'
import SubmitOtp from '../../components/Auth Components/SubmitOtp.vue'

export default {
  components: { CustomAuthInput, CustomPhoneInput, CustomLoginRegisterBtn, SendOtp, MainRegisterUser, SubmitOtp },
  name: 'Register',
  setup() {
    const router = useRouter();
    const store = useStore();
    const buttonLoading = ref(false)
    const user = computed(() => store.state.userState.user)
    const notificationsState = computed(() => store.state.notifications.notifications)
    const error = ref(null)
    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    const profile = computed(() => store.state.userState.profile)
    console.log(profile.value)
    // console.log(user.value, notificationsState.value)
    const showPassword = ref(false);

    const toggleShow = (e) => {
      e.preventDefault();
      showPassword.value = !showPassword.value
    }

    const inputType = computed(() => showPassword.value ? "text" : "password")


    watchEffect(async () => {
      if(isAuthenticated.value) {
        try{
          await store.dispatch('userState/loadUserProfile');
          if(profile.value) {
            router.push('/dashboard')
          }
        } catch(err) {
          console.log(err)
        }
      }
    })

    const userAuthInput = ref({
      phone_number: '',
      password: ''
    })
    const currentStep = ref('register')
    

    const validate = () => {
      if(!user.value.phone_number && !user.value.password) {
        // alert('User could not register');
        return;
      } 

      currentStep.value = 'sendOtp'
    }

  
    

    const handleUserRegister = async () => {
      console.log(userAuthInput.value)
      // currentStep.value = 'SendOtp'
      if(!/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(userAuthInput.value.phone_number)){
        store.dispatch('notifications/add', getNotification('warning', 'Please enter a valid phone number'))
        return;
      } else if(userAuthInput.value.password.length < 5 ) {
        store.dispatch('notifications/add', getNotification('warning', 'Password must be at least 5 character'))
        return;
      } 
      try {

        buttonLoading.value = true
        await store.dispatch('userState/registerByPhonePass', {
          ...userAuthInput.value
        })

      
        buttonLoading.value = false

      } catch(err) {
        console.log(err.message);
        error.value = err.message;
        setTimeout(() => {
          buttonLoading.value = false
        }, 1000);
      }
      
      
      setTimeout(validate, 1000)
      
      
    }

    return {
      userAuthInput,
      handleUserRegister,
      currentStep,
      user,
      notificationsState,
      toggleShow,
      showPassword,
      inputType,
      buttonLoading
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

.login_cont {
  // height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem;
  @include maxMedia(768px) {
    margin: 0;
  }

  h3{
    margin: 1.1rem 0 1.5rem 0;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 110px;
    text-align: center;
    background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include maxMedia(768px) {
      font-size: 2.4rem;
      // line-height: 2.48rem;
          line-height: 75px;
    margin: 1rem 0;
    }
    // margin: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.3em;
    text-align: center;
    width: 100%;
    max-width: 400px;
    min-width: 200px;
     @include maxMedia(768px) {
    margin-top: 2rem;
  }
    p {
      color: #00325B;
      font-size: 1rem;
      line-height: 24px;
      .special {
        cursor: pointer;
        color: #00325a;
        text-decoration-line: underline;
        font-weight: bold;
      } 
    }

    .pass_cont{
      position: relative;
      input {
        width: 90% !important;
      }

      .btn {
        border: none;
        outline: none;
        position: absolute;
        top: 38%;
        right: 4%;
        border: 0;
        z-index: 2;
        cursor: pointer;
        background-color: #fff;
        width: 30px;
      }

    }
  }
}


</style>