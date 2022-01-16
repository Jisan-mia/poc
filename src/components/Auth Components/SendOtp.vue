<template>
  <div class="forgot" v-if="currentStep == 'sendOtp'">
    <h3 v-if="isRegistrationPage == false">
      Forgot Password
    </h3>

    <form  v-on:submit.prevent :class="isRegistrationPage && 'mt-4'">
      <CustomPhoneInput v-model="userPhoneNumber" placeholder="Enter your phone number" />
      <div id="recaptcha-container"></div><br>
      <CustomLoginRegisterBtn @click="handleSendOtp" buttonText="Send OTP" />
    </form>
  </div>
  <SubmitOtp :isRegistrationPage="isRegistrationPage"  v-else />
</template>

<script>
import { ref } from '@vue/reactivity'
import CustomPhoneInput from './CustomPhoneInput.vue'
import CustomLoginRegisterBtn from '../ui/CustomLoginRegisterBtn.vue'
import SubmitOtp from './SubmitOtp.vue'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
import firebase from 'firebase'
export default {
  components: { CustomPhoneInput, CustomLoginRegisterBtn, SubmitOtp },
  name: 'SendOtp',
  props: {
    isRegistrationPage: {
      type: Boolean,
      default: () => false
    }
  }, 
  setup(props) {
    const store = useStore();
    const userPhoneNumber = ref('');
    const appVerifier = ref(null);
    console.log(props.isRegistrationPage)

    // const loginSteps = ref(['sendOtp', 'submitOtp']);
    const currentStep = ref('sendOtp')

    const initReCaptcha = () => {
      setTimeout(()=>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': function(response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback': function() {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        });
        //
        appVerifier.value =  window.recaptchaVerifier
      },1000)
    }
    onMounted(() => {
      initReCaptcha()
    })


    const handleSendOtp = async () => {
      
      if(!/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(userPhoneNumber.value)){
        store.dispatch('notifications/add', getNotification('warning', 'Please enter a valid phone number'))
        return;
      }
      // currentStep.value = 'submitOtp'

      if(props.isRegistrationPage) {
        console.log('send otp from resister page');
        try{

          await store.dispatch('userState/handleSendOtp', {
            phoneNumber: userPhoneNumber.value,
            appVerifier: appVerifier
          })

        } catch(err) {
          console.log(err)
        }

        return;
      } else {
        try{

        } catch(err) {
          console.log(err)
        }
        console.log('send otp from login page')
      }
    }

    return {
      userPhoneNumber,
      handleSendOtp,
      currentStep,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.forgot {
  height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // gap: 1.8rem;
  // margin: 0 1rem;
  .mt-4 {
    margin-top: 5rem;
  }

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

    @include maxMedia(550px) {
      font-size: 1.9rem;
      line-height: 2rem;
      margin: 2.9rem 0;
    }
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
    
  }
}


</style>