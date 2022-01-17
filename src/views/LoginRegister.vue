<template>
  <div class="container">
    <div class="item1 item1-res">
      <div class="img__container">
        <img src="/images/logo.svg" alt="">

        <div class="social">
          <span>
            <i class="fab fa-facebook fa-2x"></i>
          </span>
          
          <span>
            <i class="fab fa-youtube fa-2x"></i>
          </span>

          <span>
            <i class="fab fa-discord fa-2x"></i>
          </span>

        </div>
      </div>
      
    </div>
    <div class="item2">
        <div class="img__container">
          <img src="@/assets/poc_logo.svg" alt="">
        </div>

        <h3>
          Exam Portal
        </h3>
      
     <div class="wrapper">
        
        <div class="btns">
            <CustomLoginRegisterBtn buttonText="Login" :outline="false" @click="handleLoginRoute"/>
            <CustomLoginRegisterBtn buttonText="Register" :outline="true" @click="handleRegisterRoute"/>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import CustomLoginRegisterBtn from '../components/ui/CustomLoginRegisterBtn.vue'
export default {
  components: { CustomLoginRegisterBtn },
  name: 'LoginRegister',
  setup(props, ctx) {
    const router = useRouter();

    const handleLoginRoute = () => {
      router.push({
        name: 'Login'
      })
      console.log('login clicked')
    }
    const handleRegisterRoute = () => {
      router.push({
        name: 'Register'
      })
      console.log('register clicked')
    }

    return {
      handleLoginRoute,
      handleRegisterRoute
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

.item1-res {
  @include maxMedia(768px) {
    display: none !important;
  }
}
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @include maxMedia(768px) {
      grid-template-columns: 1fr;
      margin: 0 1.5rem;
    }
  .item1{
    background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .img__container{
      max-width: 50%;
      img{
        width: 100%;
      }
    }
    
    .social {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      bottom: -100px;
      span svg{
        width: 33px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .item2{
    @extend .item1;
    background: #fff;
    position: relative;
    flex-direction: column;


    h3{
      margin: 1.6rem 0;
      margin-bottom: 3.8rem;
      font-style: normal;
      font-weight: bold;
      font-size: 3rem;
      line-height: 3.1rem;
      text-align: center;
      background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      // margin: 0;
      @include maxMedia(768px) {
        font-size: 1.95rem;
        line-height: 2rem;
        margin-bottom: 1.8rem;
        margin-top: 1.4rem;

      }
  }
    .img__container {
      max-width: 150px;
      position: absolute;
      top: 85px;
    }
    .btns {
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 1rem
    }
    
    .wrapper{
      width: 55%;
      margin: 0 auto;
      @include maxMedia(768px) {
        max-width: 400px;
        min-width: 150px;
        width: 100%;
        margin-top: 55px;
    }
    }
  }
}
</style>