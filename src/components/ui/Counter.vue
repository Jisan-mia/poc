<template>
  <div class="timer" :class="[notVisible ? 'notVisible': '']" v-if="loaded">
    <p  v-if="!expired">Time Remaining</p>
    <p v-else-if="expired">Time Expired</p>
    <h3>
      <!-- <span v-if="displayDays">{{displayDays}}</span> <span v-if="displayDays">: </span> -->
      <span>{{displayHours}}</span><span>: </span>
      <span>{{displayMinutes}}</span> <span>:</span>
      <span>{{displaySeconds}}</span>
    </h3>
    
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
export default {
  name: 'Counter',
  // props: ['year', 'month','date','hour', 'minute', 'second', 'millisecond' ],
  props: {
    year: {
      type: Number
    },
    month: {
      type: Number,
    },
    date: {
      type: Number,
    },
    hour: {
      type: Number,
    },
    minute: {
      type: Number,
    },
    second: {
      type: Number,
      default: () => 0
    },
    millisecond: {
      type: Number,
      default: () => 0
    },
    notVisible: {
      type: Boolean,
      default: () => false
    },
    examId: {
      type: [Number, String]
    }
  },
  setup(props) {
    const loaded = ref(false);
    const expired = ref(false);
    const store = useStore();
    const router = useRouter();
    const isExamSubmitted = computed(() => store.state.examResult.isExamSubmitted)


    const endP = computed(() => {
      return new Date(
        props.year,
        props.month,
        props.date,
        props.hour,
        props.minute,
        props.second,
        props.millisecond
      )
    }) 

    const displayDays = ref(0)
    const displayHours = ref(0);
    const displayMinutes = ref(0);
    const displaySeconds = ref(0);

    const _seconds = computed(() => 1000);
    const _minutes = computed(() => _seconds.value * 60);
    const _hours = computed(() => _minutes.value * 60);
    const _days = computed(() => _hours.value * 24);

    // formate num
    const formatNum = num => num < 10 ? '0'+num : num

    // console.log(endP.value, new Date())

    const showRemaining = () => {
      const timer = setInterval(async () => {
        const now = new Date();
        // const end = new Date(2022, 0, 12, 10, 10, 10, 10)

        const distance = endP.value.getTime() - now.getTime();

        if(distance < 0) {
          clearInterval(timer);
          expired.value = true;
          loaded.value = true;

          try{
            await store.dispatch('examResult/submitExamResult', props.examId)
            if(isExamSubmitted.value) {
              store.commit('examResult/setExamIsSubmitted', false);
              const routeData = router.resolve({
                path: '/dashboard',
              })

              window.open(routeData.href, '_blank');
              window.close()
            } else {
              router.push('/')
            }
          } catch(err) {
            // alert(err.message)
            console.log(err)
            router.push('/')
            
          }





          return
        }

        const days = Math.floor(distance / _days.value)


        const hours = Math.floor((distance % _days.value) / _hours.value) 

        const minutes = Math.floor((distance % _hours.value) / _minutes.value)

        const seconds = Math.floor((distance % _minutes.value) / _seconds.value)

        displayMinutes.value = formatNum(minutes)
        displaySeconds.value = formatNum(seconds)
        displayHours.value = formatNum(hours)
        displayDays.value = formatNum(days)




        loaded.value = true
      }, 1000);
    }

    onMounted(() => {
      showRemaining();
    })

    return {
      displayDays,
      displayHours,
      displayMinutes,
      displaySeconds,
      loaded,
      expired
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

.timer.notVisible {
  position: relative;
  bottom: 200px;
  height: 100%;
   width: 50%;
}
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