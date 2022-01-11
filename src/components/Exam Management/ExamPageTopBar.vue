<template>
  <header>
    <div class="img__container">
      <img src="@/assets/poc_logo.svg" alt="">
    </div>

    <Timer />
      
  </header>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import Timer from '../ui/Timer.vue';
export default {
  name: "ExamPageTopBar",
  setup() {
    const route = useRoute();
    const store = useStore();
    const examPacks = computed(() => store.state.examPackState.examPacks);
    const examLists = computed(() => store.state.examPackState.examLists);
    console.log(examPacks.value, examLists.value);
    const { id } = route.params;
    console.log({ id });
    console.log(examLists.value);
    const currentExam = computed(() => examLists.value.find(exam => exam.id == id));
    // all we need in this component is totalTime
    const { exam_total_time } = currentExam.value;
    console.log(exam_total_time);

    return {
        exam_total_time,
    };
  },
  components: { Timer }
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