<template>
  <div class="app-container">
    <Sidebar />
    <main class="main">
      <span v-if="isLoading">
        loading..
      </span>
      <slot v-else/>
    </main>
  </div>
  
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'
import Sidebar from '../components/sidebar/Sidebar.vue'
import { watchEffect } from '@vue/runtime-core';
export default {
  components: { Sidebar },
  name: 'AppLayout',
   setup() {
    const store = useStore(); 
    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    const isLoading = computed(() => store.state.isLoading);


    store.commit('setIsLoading', true)

    watchEffect(async () => {
      if(isAuthenticated.value) {
        try{
          await store.dispatch('examPackState/loadExamPacks');
          await store.dispatch('examPackState/loadExamLists');
          await store.dispatch('reportingState/loadStudentReporting')
          store.commit('setIsLoading', false)

        }
        catch(error) {
          console.log(error)
        }
      }
    })


    return {
      isLoading
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/config.scss';
.app-container{
  background-color: #fafafa;
	min-height: 100vh;
	overflow-x: hidden;
  overflow-y: hidden;
	min-width: 100%;
}

.main{

		/* width: calc(100vw - 16rem); */
		margin-left: 16rem;
		transition: all 0.4s;
		padding: 0.2rem 1.8rem;
		margin-top: 45px;

    @include maxMedia(768px) {
      margin-left: 0rem;
    }
	
}
</style>>
