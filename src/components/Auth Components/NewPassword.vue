<template>
  <div class="otp_cont">

    <form v-on:submit.prevent>
      <div class="cont">
        <CustomAuthInput v-model="newPassObj.newPass" placeholder="Enter new password" :type="inputType"/>
        <span class="btn" @click="showPassword = !showPassword" v-if="!showPassword" >
          <i class="fas fa-eye-slash" ></i>
        </span>

        <span class="btn" @click="showPassword = !showPassword" v-else-if="showPassword"  >
          <i class="fas fa-eye" ></i>
        </span>
      </div>
      <div class="cont">
        <CustomAuthInput v-model="newPassObj.confirmPass" placeholder="Confirm password" :type="inputType1" />
        <span class="btn" @click=" showPassword1 = !showPassword1" v-if="!showPassword1" >
          <i class="fas fa-eye-slash" ></i>
        </span>

        <span class="btn" @click="showPassword1 = !showPassword1" v-else-if="showPassword1"  >
          <i class="fas fa-eye" ></i>
        </span>
      </div>

      <CustomLoginRegisterBtn :isSpin="buttonLoading"  @click="handleNewPasswordSubmit" buttonText="Submit" />
    </form>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import CustomLoginRegisterBtn from '../../components/ui/CustomLoginRegisterBtn.vue'
import CustomAuthInput from './CustomAuthInput.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  components: {  CustomLoginRegisterBtn, CustomAuthInput },
  name: 'NewPassword',
  props: {
    phone_number: {
      type: [Number, String]
    }
  },
  setup(props,ctx) {
    const store = useStore();
    const router = useRouter();
    const buttonLoading = ref(false);
    const showPassword = ref(false)
    const showPassword1 = ref(false)
    // const phone_number = props.phone_number;
    const newPassObj = ref({
      newPass: '',
      confirmPass: ''
    })

    const inputType = computed(() => showPassword.value ? "text" : "password")
    const inputType1 = computed(() => showPassword1.value ? "text" : "password")


    const currentStep = ref('otp')
    const handleNewPasswordSubmit = async () => {
      // console.log('handleNewPasswordSubmit btn clicked')
      if(newPassObj.value.newPass.length < 5 || newPassObj.value.confirmPass.length < 5) {
        store.dispatch('notifications/add', {type: 'warning', message: 'Password must be at least 5 character'})
        return;
      } else if(newPassObj.value.newPass !== newPassObj.value.confirmPass) {
        store.dispatch('notifications/add', {type: 'warning', message: 'Password does not match'})
        return
      }
      buttonLoading.value = true;
      
      try{
        await store.dispatch('userState/setNewPassword', {
          phone_number: props.phone_number,
          password: newPassObj.value.newPass
        })

        setTimeout(() => {
          buttonLoading.value = false;
          router.go();
        }, 1000);


      }catch(err) {
        console.log(err);
        setTimeout(() => {
          buttonLoading.value = false;
        }, 1000);
      }
    }

    return {
      newPassObj,
      handleNewPasswordSubmit,
      currentStep,
      buttonLoading,
      showPassword,
      showPassword1,
      inputType,
      inputType1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

.otp_cont {
  // height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 1.8rem;
  margin: 0 1rem;


  form {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    text-align: center;
    width: 400px;
    min-width: 200px;
    @include maxMedia(460px) {
      width: 100%
    }
    
  }
}

.cont{
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

</style>