<template>
  <div class="login_cont" v-if="currentStep === 'login'">
    
    <h3>
      Login
    </h3>

    <form @submit.prevent="handleUserLogin">
      <CustomPhoneInput v-model="userInputs.phone_number" placeholder="Enter your phone number" />

      <div class="pass_cont">
      <CustomAuthInput v-model="userInputs.password" placeholder="Enter your password" :type="inputType"/>
        <!-- <i class="fas fa-eye-slash"></i> -->
        <span class="btn" @click="showPassword = !showPassword" v-if="!showPassword" >
          <i class="fas fa-eye-slash" ></i>
        </span>

        <span class="btn" @click="showPassword = !showPassword" v-else-if="showPassword" >
          <i class="fas fa-eye" ></i>
        </span>
      </div>

      <p>
        Don’t have an account? <router-link  :to="{name: 'Register'}"> <span class="special"> Register </span></router-link>
        <br /> </p>
        <!-- <span @click="handleForgotStep" class="special"> Forgot Password</span>
      </p> -->

      <CustomLoginRegisterBtn  buttonText="Login" />
    </form>
  </div>
    <SendOtp v-else/>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import CustomAuthInput from '../../components/Auth Components/CustomAuthInput.vue'
import CustomPhoneInput from '../../components/Auth Components/CustomPhoneInput.vue'
import CustomLoginRegisterBtn from '../../components/ui/CustomLoginRegisterBtn.vue'
import SendOtp from '../../components/Auth Components/SendOtp.vue'
import { useStore } from 'vuex'
import { getNotification } from '../../api/common'
import { watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  components: { CustomAuthInput, CustomPhoneInput, CustomLoginRegisterBtn, SendOtp },
  name: 'Login',
  setup() {
    const store = useStore();
    const router = useRouter()
    // const user = computed(() => store.state.userState.user)
    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    const profile = computed(() => store.state.userState.profile)
    // console.log(profile.value)


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
          console.log(profile.value)
          if(profile.value) {
            router.push('/dashboard')
          }
        } catch(err) {
          console.log(err)
        }
      }
    })
    

    const userInputs = ref({
      phone_number: '',
      password: ''
    })
    const loginSteps = ref(['login', 'sendOtp']);
    const currentStep = ref('login')

    const handleForgotStep = () => {
      currentStep.value = 'sendOtp'
    }

    const error = ref(null)


    watchEffect(() => {
      console.log(userInputs.value)
    })


  
    

    const handleUserLogin = async () => {
      if(!/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(userInputs.value.phone_number)){
        store.dispatch('notifications/add', getNotification('warning', 'Please enter a valid phone number'))
        return;
      } else if(userInputs.value.password.length < 5 ) {
        store.dispatch('notifications/add', getNotification('warning', 'Password must be at least 5 character'))
        return;
      } 
      try {
        await store.dispatch('userState/userLogin', {
          ...userInputs.value
        })
        router.push('/')
      } catch(err) {
        console.log(err.message);
        error.value = err.message;
      }
      
    }
    
    return {
      userInputs,
      handleUserLogin,
      handleForgotStep,
      currentStep,
      toggleShow,
      showPassword,
      inputType
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.login_cont {
  height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // gap: 1.8rem;
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
    // margin: 0;
    @include maxMedia(768px) {
      font-size: 2.4rem;
      // line-height: 2.48rem;
      line-height: 75px;
      margin: 1rem 0;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.3em;
    text-align: center;
    width: 400px;
    min-width: 200px;
    @include maxMedia(470px) {
      width: 100%;
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