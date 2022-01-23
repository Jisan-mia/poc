<template>
  <div class="forgot" v-if="currentStep == 'sendOtp'">
    <h3 v-if="isRegistrationPage == false">
      Forgot Password
    </h3>

    <form  v-on:submit.prevent :class="isRegistrationPage && 'mt-4'">
      <CustomPhoneInput v-model="userPhoneNumber" placeholder="Enter your phone number" :disabled="isRegistrationPage" :readonly="isRegistrationPage" />
      <div class="recaptcha-container" id="recaptcha-container"></div>
      <CustomLoginRegisterBtn :isSpin="buttonLoading" @click="handleSendOtp" buttonText="Click for OTP" id="log-in"/>
    </form>
  </div>

  <SubmitOtp :buttonLoading="buttonLoading" :isRegistrationPage="isRegistrationPage" @verifyOtp="verifyOtpCode" v-else-if="currentStep == 'submitOtp'" />
  <MainRegisterUser :isRegistrationPage="isRegistrationPage" v-else-if="currentStep == 'mainRegister'" />
  <NewPassword :phone_number="userPhoneNumber" v-else-if="!isRegistrationPage && currentStep == 'newPass' " />


</template>

<script>
import { computed, ref } from '@vue/reactivity'
import CustomPhoneInput from './CustomPhoneInput.vue'
import CustomLoginRegisterBtn from '../ui/CustomLoginRegisterBtn.vue'
import SubmitOtp from './SubmitOtp.vue'
import { auth } from '../../firebase'
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
import { onMounted } from '@vue/runtime-core'
import {firebase} from 'firebase/app'
import NewPassword from './NewPassword.vue'
import MainRegisterUser from './MainRegisterUser.vue'
import { useStore } from 'vuex'
import { getNotification } from '../../api/common'
import { userMutationTypes } from '../../store/modules/user/user.mutationTypes'

export default {
  components: { CustomPhoneInput, CustomLoginRegisterBtn, SubmitOtp, NewPassword, MainRegisterUser },
  name: 'SendOtp',
  props: {
    isRegistrationPage: {
      type: Boolean,
      default: () => false
    },
    regPhone: {
      type: [String, Number]
    }
  }, 
  setup(props) {
    console.log(props.isRegistrationPage);
    const store = useStore();
    const phone_number = computed(() => store.state.userState.user.phone_number);
    const password = computed(() => store.state.userState.user.password);
    const buttonLoading = ref(false)
    

    // const loginSteps = ref(['sendOtp', 'submitOtp']);
    const currentStep = ref('sendOtp');
    const userPhoneNumber = ref('')
    const recaptchaVerifier = ref(null);
    const confirmationResult = ref(null);
    const confirmResult = ref(null);
    const recaptchaWidgetId = ref(null);
    const smsSent = ref(false)
    const smsVerified = ref(false)

    userPhoneNumber.value = props.isRegistrationPage ? props.regPhone : userPhoneNumber.value

    onMounted(() => {
      // auth().useDeviceLanguage()
      recaptchaVerifier.value = new RecaptchaVerifier('log-in', {
        'size': 'invisible',
        'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      }, auth);
    })


    const handleSendOtp = () => {
      // currentStep.value = 'submitOtp'
      if(!/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(userPhoneNumber.value)){
        store.dispatch('notifications/add', getNotification('warning', 'Please enter a valid phone number'))
        return;
      }
      buttonLoading.value = true;

      console.log('send otp from resister page');
      // const phoneNumber = '+88'+userPhoneNumber.value;

      recaptchaVerifier.value =new RecaptchaVerifier('recaptcha-container', {}, auth);
      recaptchaVerifier.value.render().then((widgetId)=>{
        recaptchaWidgetId.value = widgetId    
      })
        
      const phoneNumber = '+88'+userPhoneNumber.value;

      signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.value)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          confirmResult.value  = confirmationResult;
          smsSent.value=true
          console.log(confirmResult.value)
          console.log('sms sent!')
           buttonLoading.value = false
          
          currentStep.value = 'submitOtp'

          // ...
        }).catch((error) => {
          // Error; SMS not sent
          console.log('sms not sent', error.message)
          // alert(error.message)
          store.dispatch('notifications/add', getNotification('warning', 'Firebase error: Too many requests'))
          setTimeout(() => {
            buttonLoading.value = false
          }, 1000); 

          // ...
        });
      
    
      console.log('send otp from login page');
    }

    const handleLogin = async () => {
      const data = {
        phone_number: phone_number.value,
        password: password.value
      }
      
      if(data) {
        try{
          await store.dispatch('userState/userLogin', data)
          currentStep.value  = 'mainRegister'
          buttonLoading.value = false;

        } catch(err) {
          setTimeout(() => {
          buttonLoading.value = false
        }, 1000);

          throw Error(err);
        }
      }
    }


    const verifyOtpCode = async (code) => {  
      buttonLoading.value = true;

      confirmResult.value.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);

        if(props.isRegistrationPage) {
          handleLogin();
        } else {
          currentStep.value  = 'newPass'
        }
        

      
        
        
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error)
        store.dispatch('notifications/add', getNotification('warning', "Invalid Code"))
        setTimeout(() => {
          buttonLoading.value = false
        }, 1000);

        
      });
    }

    return {
      userPhoneNumber,
      handleSendOtp,
      currentStep,
      verifyOtpCode,
      buttonLoading
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.forgot {
  // height: calc(100vh - 125px);
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