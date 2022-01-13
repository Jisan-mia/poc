<template>
    <!-- <router-link :to='{name: "LoginRegister"}'>
      <h2>
        Go to Login/register
      </h2>
    </router-link> -->

      <LoginRegister v-if="!isAuthenticated"/>

</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import LoginRegister from './LoginRegister.vue';
import Dashboard from './Exam Management/Dashboard.vue';
import { useStore } from 'vuex';
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuthenticated = store.state.userState.user.isAuthenticated;
    console.log("homie", isAuthenticated)
    if(isAuthenticated) {
      console.log('home to dashboard')
      router.push('/dashboard');
    }
    return {
        isAuthenticated
    };
  },
  components: { LoginRegister, Dashboard }
};
</script>
<style lang="scss" scoped>
.home{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 1.8rem;
    background: rgb(99, 99, 226);
    color: white;
    display: inline-block;
    padding: 1rem 1.5rem;
    border-radius: 8px;

  }
}
</style>