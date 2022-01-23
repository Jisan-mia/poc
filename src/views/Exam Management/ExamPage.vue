<template>
  <div class="main__container" v-if="!isNotYetStarted && !isEnded">
    <span v-if="isLoading && !isNotYetStarted && !isEnded">
      ...
    </span>
    <span v-else>
      <ExamPageTopBar />
      <ExamPageExamDetail />
      <ShowAllExamQuestions />
      
      <div class="btn__cont">
        <div class="wrapper">
          <CustomAdminBtn type="gradient" :rounded="true" @onClick="handleSubmitExam"> 
            Submit
          </CustomAdminBtn>
        </div>
      </div>

    </span>
  </div>
</template>
  
<script>
import { computed, onBeforeMount, onMounted, ref, watchEffect } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router'
import ExamPageTopBar from '../../components/Exam Management/ExamPageTopBar.vue';
import ExamPageExamDetail from '../../components/Exam Management/ExamPageExamDetail.vue';
import ShowAllExamQuestions from '../../components/Exam Management/ShowAllExamQuestions.vue';
import { useStore } from 'vuex';
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue';

import dayjs from 'dayjs';
import SuperTokensLock from "browser-tabs-lock";


export default {
  components: { ExamPageTopBar, ExamPageExamDetail, ShowAllExamQuestions, CustomAdminBtn },
  name: 'ExamPage',
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore(); 

    const {id} = route.params;

    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    const isLoading = computed(() => store.state.isLoading);
    const isExamSubmitted = computed(() => store.state.examResult.isExamSubmitted)
    
    const profile = computed(() => store.state.userState.profile)


    store.commit('setIsLoading', true)


    const isEnded = ref(false);
    const isNotYetStarted = ref(false);
    
    onBeforeMount(async () => {
      if(isAuthenticated.value) {
        try{
          await store.dispatch('userState/loadUserProfile');
          if(profile.value) {
            
            await store.dispatch('examPackState/loadExamPacks');
            await store.dispatch('reportingState/loadStudentReporting');
  
            await store.dispatch('examPackState/loadExamLists');
            await store.dispatch('examPackState/loadExamQuestions', id);
            store.commit('setIsLoading', false)
  
            const examLists = computed(() => store.state.examPackState.examLists)
  
            const currentExam = computed(() => examLists.value.find(exam => exam.id == id));
  
            //console.log(currentExam.value)
            
  
            if(currentExam.value) {
              if(currentExam.value.isNotYetStarted) {
                store.dispatch('notifications/add', {type: 'warning', message: 'The Exam Not Yet Started'})
                router.push('/')
                isNotYetStarted.value = true;
              } else if(currentExam.value.isExpired) {
  
                store.dispatch('notifications/add', {type: 'warning', message: 'The Exam has already Expired'})
  
                router.push('/')
                //console.log('exam time expired');
                isEnded.value  = true
              } else if(currentExam.value.hasExamAlreadyGiven) {
                store.dispatch('notifications/add', {type: 'warning', message: 'You already completed this exam'})
  
                router.push('/')
              }
            }
          } else { router.push('/')}
        }
        catch(error) {
          console.log(error)
        }
      
      } else {
        router.push('/')
      }
    })

    const handleSubmitExam = async () => {

      try{
        await store.dispatch('examResult/submitExamResult', id)
        localStorage.removeItem(`deadline${id}`)
        if(isExamSubmitted.value) {
          store.commit('examResult/setExamIsSubmitted', false);
          const routeData = router.resolve({
            path: '/dashboard',
          })

          window.open(routeData.href, '_blank');
          window.close()
        }
      } catch(err) {
        console.log(err)
        const routeData = router.resolve({
            path: '/dashboard',
          })

        window.open(routeData.href, '_blank');
        window.close()
      }
    }

// window.addEventListener("beforeunload", function (e) {
//   var confirmationMessage = "\o/";

//   (e || window.event).returnValue = confirmationMessage; //Gecko + IE
//   return confirmationMessage;     //Webkit, Safari, Chrome
//   //  e.preventDefault();
//   //   e.returnValue = '';                       
// });

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
})
    return {
      isLoading,
      isEnded,
      isNotYetStarted,
      handleSubmitExam
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";

.main__container {
  padding: 2.8rem 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @include maxMedia(768px) {
    max-width: 100%;
  }

  .btn__cont{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    .wrapper {
      min-width: 120px;
      width: 300px;
    }
  }
}
</style>