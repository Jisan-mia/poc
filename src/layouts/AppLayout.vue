<template>
  <div class="app-container">
    <Sidebar v-if="visibleSidebar" />
    <main class="main" :class="!visibleSidebar ? 'remove_margin' : 'add_margin'" id="app" @click="isActive && toggleActive()">
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
import { isActive, toggleActive } from '../components/sidebar/state';
import { visibleSidebar, setVisibleSidebar } from './sidebarState';

export default {
  components: { Sidebar },
  name: 'AppLayout',
   setup() {
    const store = useStore(); 
    const isAuthenticated = computed(() => store.state.userState.user.isAuthenticated)
    const isLoading = computed(() => store.state.isLoading);
    const profile = computed(() => store.state.userState.profile);

  

    store.commit('setIsLoading', true)

    watchEffect(async () => {
      if(isAuthenticated.value) {
        try{
          await store.dispatch('userState/loadUserProfile');
          if(profile.value) {
            await store.dispatch('examPackState/loadExamPacks');
            await store.dispatch('examPackState/loadExamLists');
            await store.dispatch('reportingState/loadStudentReporting');
				    await store.dispatch('batchSettings/loadBatchSettings')
            
            store.commit('setIsLoading', false)
          } else {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            store.commit('userState/setProfile', null);
            store.commit('userState/initializeStore')
          }

        }
        catch(error) {
          console.log(error)
        }
      }
    })


    return {
      isLoading,
      toggleActive,
      isActive,
      visibleSidebar
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
		transition: all 0.4s;
		padding: 0.2rem 1.8rem;
		margin-top: 45px;
    min-height: calc(100vh - 80px);

    @include maxMedia(768px) {
      margin-left: 0rem !important;
      margin-top: 50px;
    }
	
}

.main.remove_margin {
		margin-left: 0rem;
}
.main.add_margin {
		margin-left: 16rem;

}
</style>>
