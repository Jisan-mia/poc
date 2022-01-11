<template>
  <div id="app">
    <NotificationContainer />
     <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>


<script>
import { useStore } from 'vuex';
import NotificationContainer from "./components/ui/NotificationContainer.vue";


export default {
  components: { NotificationContainer },
  setup() {
    const store = useStore();
    store.commit('userState/initializeStore')

    return {

    }
  }
}
</script>

<style lang="scss">

@import '@/styles/base.scss';

#nav {
  padding: 70px;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>

