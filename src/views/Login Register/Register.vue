<template>
  <div class="login_cont" v-if="currentStep === 'register'">
    <h3>
      Register
    </h3>

    <form @submit.prevent="handleUserRegister">
      <CustomPhoneInput v-model="userAuthInput.phone_number" placeholder="Enter your phone number" />
      <CustomAuthInput v-model="userAuthInput.password" placeholder="Enter your password" type="text"/>

      <p>
        Already have an account? <router-link  :to="{name: 'Login'}"> <span class="special"> Login </span></router-link>
        
      </p>

      <CustomLoginRegisterBtn  buttonText="Register" />
    </form>
  </div>
  <!-- its main -->
  <SendOtp isRegistrationPage="true" v-else/> 

  <!-- it's temporary -->
  <!-- <MainRegisterUser v-else /> -->

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
export default {
  components: { CustomAuthInput, CustomPhoneInput, CustomLoginRegisterBtn, SendOtp, MainRegisterUser },
  name: 'Register',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.userState.user)
    const error = ref(null)

    console.log(user.value)

    const userAuthInput = ref({
      phone_number: '',
      password: ''
    })
    const currentStep = ref('register')



    const validate = () => {
      console.log(user.value)
      if(!user.value.phone_number && !user.value.password) {
        alert('User could not register');
        return;
      } 

      currentStep.value = 'sendOtp';
    }

    const handleUserRegister = async () => {
      // currentStep.value = 'SendOtp'
      if(!/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(userAuthInput.value.phone_number)){
        alert('Phone number not in correct pattern');
        return;
      } else if(!userAuthInput.value.password.length >= 5 ) {
        alert('Password must be at least 5 character')
        return;
      } 
      try {
        await store.dispatch('userState/registerByPhonePass', {
          ...userAuthInput.value
        })


      } catch(err) {
        console.log(err.message);
        error.value = err.message;
      }
      
      
      setTimeout(validate, 1000)
      
      
    }

    return {
      userAuthInput,
      handleUserRegister,
      currentStep,
      user,
    }
  }
}
</script>

<style lang="scss" scoped>

.login_cont {
  height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem;

  h3{
    margin: 1.6rem 0;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 110px;
    text-align: center;
    background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // margin: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    text-align: center;
    width: 100%;
    max-width: 400px;
    min-width: 200px;
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
  }
}


</style>