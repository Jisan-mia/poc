<template>
  <div class="timer">
    <p>Time Remaining</p>
    <h3>
      <span>{displayHours}</span><span>: </span>
      <span>{{displayMinutes}}</span> <span>:</span>
      <span>{{displaySeconds}}</span>
    </h3>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: 'Timer',
  setup() {

    const displayHours = ref(0);
    const displayMinutes = ref(0);
    const displaySeconds = ref(0);


    return {
      displayHours,
      displayMinutes,
      displaySeconds
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.timer {
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
  color: #fff;
  padding: 0.9rem 1rem;
  border-radius: 14px;
  
  text-align: center;

  p{
    font-size: 0.71rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
  h3 span{
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin: 0.1rem;
    @include maxMedia(500px) {
      font-size: 1.3rem;
        line-height: 1.5rem;
    }
  }
}
</style>