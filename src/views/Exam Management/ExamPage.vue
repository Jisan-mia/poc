<template>
  <div class="main__container">
    <span v-if="isLoading">
      ...
    </span>
    <span v-else>
      <ExamPageTopBar />
      <ExamPageExamDetail />
      <ShowAllExamQuestions />

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
export default {
  components: { ExamPageTopBar, ExamPageExamDetail, ShowAllExamQuestions },
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


    const isEnded = ref(false)
    onBeforeMount(() => {
      if(isAuthenticated.value) {
        // check if that exam has ended
      } else {
        router.push('/')
        isEnded.value = true;
      }
    })
    onMounted(async () => {
      if(isEnded.value) {
        return;
      } else {
        if(isAuthenticated.value) {
          try{
            await store.dispatch('examPackState/loadExamPacks');
            await store.dispatch('examPackState/loadExamLists');
            await store.dispatch('examPackState/loadExamQuestions', id)
          }
          catch(error) {
            console.log(error)
          }
        }
      }
    console.log('mounted');
      
    store.commit('setIsLoading', false)

    console.log(isLoading.value)

      console.log(isAuthenticated.value)
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
}
</style>