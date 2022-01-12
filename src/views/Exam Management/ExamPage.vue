<template>
  <div class="main__container">
    <span v-if="isLoading">
      Get ready for your exam...
    </span>
    <span v-else>
      <ExamPageTopBar />
      <ExamPageExamDetail />
      <ShowAllExamQuestions />
      
      <div class="btn__cont">
        <div class="wrapper">
          <CustomAdminBtn type="gradient" :rounded="true"> 
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
export default {
  components: { ExamPageTopBar, ExamPageExamDetail, ShowAllExamQuestions, CustomAdminBtn },
  name: 'ExamPage',
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore(); 

    const {id} = route.params;
    console.log(route.params, 'left params')

    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    const isLoading = computed(() => store.state.isLoading);
    console.log(isLoading.value)

    store.commit('setIsLoading', true)


    const isEnded = ref(false);
    
    onMounted(async () => {
      if(isEnded.value) {
        return;
      } else {
        if(isAuthenticated.value) {
          try{
            await store.dispatch('examPackState/loadExamPacks');
            await store.dispatch('examPackState/loadExamLists');
            await store.dispatch('examPackState/loadExamQuestions', id);
            store.commit('setIsLoading', false)

            const examLists = computed(() => store.state.examPackState.examLists)

            const currentExam = computed(() => examLists.value.find(exam => exam.id == id));
            

            if(currentExam.value) {
              if(currentExam.value.isNotYetStarted) {
                console.log('not yet started')
              } else if(currentExam.value.isExpired) {
                console.log('exam time expired')
              }
            }
          }
          catch(error) {
            console.log(error)
          }
        } else {
          router.push('/')
        }
      }
    })
    
    


    return {
      isLoading
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