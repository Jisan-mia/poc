<template>
  <div class="main__container" v-if="!isNotYetStarted && !isEnded">
    <span class="loadingSp" v-if="isLoading && !isNotYetStarted && !isEnded">
      <Spinner />
    </span>
    <span v-else>
      <ExamPageTopBar />
      <ExamPageExamDetail />
      <ShowAllExamQuestions v-if="examAllQuestionsDe.length" />
      
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
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import ExamPageTopBar from '../../components/Exam Management/ExamPageTopBar.vue';
import ExamPageExamDetail from '../../components/Exam Management/ExamPageExamDetail.vue';
import ShowAllExamQuestions from '../../components/Exam Management/ShowAllExamQuestions.vue';
import { useStore } from 'vuex';
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue';
import { setVisibleSidebar } from '../../layouts/sidebarState';
import Spinner from '../../components/ui/Spinner.vue';


export default {
  components: { ExamPageTopBar, ExamPageExamDetail, ShowAllExamQuestions, CustomAdminBtn, Spinner },
  name: 'ExamPage',
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore(); 

    const {id} = route.params;

    const isExamSubmitted = computed(() => store.state.examResult.isExamSubmitted)
    const examAllQuestionsDe = computed(() => store.state.examPackState.examQuestions)

    
    const examLists = computed(() => store.state.examPackState.examLists)
    const currentExam = computed(() => examLists.value.find(exam => exam.id == id));

    const isLoading = ref(false);
    const isEnded = ref(false);
    const isNotYetStarted = ref(false);


    const setExamToLoad = async () => {
      isLoading.value = true
      try{
        await store.dispatch('examPackState/loadExamQuestions', id);
        isLoading.value = false
      }
      catch(error) {
        console.log(error)
      }
    }
    
    onMounted( () => {
      setVisibleSidebar(false)
      console.log('on mounting')
      if(currentExam.value) {
        if(currentExam.value.isNotYetStarted) {

          store.dispatch('notifications/add', {type: 'warning', message: 'The Exam Not Yet Started'})
          router.push('/dashboard')
          isNotYetStarted.value = true;

        } else if(currentExam.value.isExpired) {

          store.dispatch('notifications/add', {type: 'warning', message: 'The Exam has already Expired'})
          router.push('/dashboard')
          isEnded.value  = true

        } else if(currentExam.value.hasExamAlreadyGiven) {

          store.dispatch('notifications/add', {type: 'warning', message: 'You already completed this exam'})
          router.push('/dashboard')

        } else {
          console.log('setting to load')
          setExamToLoad()
        }
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

 


    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    })

    return {
      isLoading,
      isEnded,
      isNotYetStarted,
      handleSubmitExam,
      examAllQuestionsDe
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";

.main__container {
  padding: 0rem 2rem 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @include maxMedia(768px) {
    max-width: 100%;
  }
  .loadingSp {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
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