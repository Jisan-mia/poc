<template>
  <header>
    <div class="img__container">
      <img src="@/assets/poc_logo.svg" alt="">
    </div>

    <Counter
      :year="year"
      :month="month"
      :date="date"
      :hour="hour"
      :minute="minute"
     />
      
  </header>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import Counter from '../ui/Counter.vue';
import dayjs from 'dayjs'
export default {
  name: "ExamPageTopBar",
  setup() {
    const route = useRoute();
    const store = useStore();
    const examPacks = computed(() => store.state.examPackState.examPacks);
    const examLists = computed(() => store.state.examPackState.examLists);
    //console.log(examPacks.value, examLists.value);
    const { id } = route.params;
    //console.log({ id });
    //console.log(examLists.value);
    const currentExam = computed(() => examLists.value.find(exam => exam.id == id));
    // all we need in this component is totalTime
    const { exam_total_time, Exam_end_date, Exam_end_time} = currentExam.value;
    console.log(exam_total_time);
    console.log(currentExam.value, Exam_end_date, Exam_end_time);


    const endTime = computed(() => {
      const now = dayjs().format('YYYY-MM-DD HH:mm:ss A');
	    const examDate = dayjs(Exam_end_date + Exam_end_time).format("YYYY-MM-DD HH:mm:ss");
      return examDate
      
    })
    console.log(endTime.value ,'\n', dayjs(endTime.value).get('year'), dayjs(endTime.value).get('month')+1,dayjs(endTime.value).get('date'), dayjs(endTime.value).get('hour'), dayjs(endTime.value).get('minute'), dayjs(endTime.value).get('second'))

    const year = computed(() => dayjs(endTime.value).get('year'))
    const month = computed(() => dayjs(endTime.value).get('month'))
    const date = computed(() => dayjs(endTime.value).get('date'))
    const hour = computed(() => dayjs(endTime.value).get('hour'))
    const minute = computed(() => dayjs(endTime.value).get('minute'))
    const second = computed(() => dayjs(endTime.value).get('second'))

    

    return {
        exam_total_time,
        year,
        month,
        date,
        hour,
        minute
    };
  },
  components: { Counter }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @include maxMedia(768px) {
    padding: 1rem;
  }
  .img__container {
    max-width: 150px;
    @include maxMedia(500px) {
      max-width: 120px;
    }
    img{
      width: 100%;
    }
  }

  
  
}
</style>