
<template>
  <div class="main__container">
    <span v-if="isLoading && answerSheet.length">
      <Spinner />
    </span>
    <span v-else>
      <!-- <ExamPageTopBar />
      <ExamPageExamDetail /> -->
      <ShowAllExamQuestions :isViewAnswerSheet="true" :viewAnswerSheet="answerSheet" />
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
import Spinner from '../../components/ui/Spinner.vue';
import { visibleSidebar, setVisibleSidebar } from '../../layouts/sidebarState';




export default {
  components: { ExamPageTopBar, ExamPageExamDetail, ShowAllExamQuestions, CustomAdminBtn, Spinner },
  name: 'ViewDownloadComp',
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore(); 
    const examLists = computed(() => store.state.examPackState.examLists)
    // console.log(examLists.value)
    const answerSheet = computed(() => store.state.examResult.answerSheet)

    const {examId} = route.params;

    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    const isLoading = ref(false);



    const fetchAnswerSheet = async () => {
      isLoading.value = true;
      try {
        await store.dispatch('examResult/getViewDownloadAnswer', examId)
        isLoading.value = false;

        console.log(answerSheet.value)

      } catch(err) {
        console.log(err)
      }
    }



    onMounted(() => {
      setVisibleSidebar(false)
      
      // console.log(visibleSidebar.value)
      
      fetchAnswerSheet()
    })

    onBeforeRouteLeave(() => {
      setVisibleSidebar(true)
    })


    
    

    
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    })

    return {
      isLoading,
      answerSheet
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";

.main__container {
  padding: 2.4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @include maxMedia(768px) {
    max-width: 100%;
  }
}
</style>