<template>
  <div class="question__container">
    <div class="question__card" v-for="(examQuestion) in examAllQuestions" :key="examQuestion.id">
      <ShowQuestionTypeA :isViewAnswerSheet="isViewAnswerSheet" :examQuestion="examQuestion" :index="examQuestion.index"  v-if="examQuestion.type == 'data_one'"/>
      <ShowQuestionTypeB :isViewAnswerSheet="isViewAnswerSheet" :examQuestion="examQuestion" :index="examQuestion.index" v-else-if="examQuestion.type == 'data_two'" />
      <ShowQuestionTypeC :isViewAnswerSheet="isViewAnswerSheet" :examQuestionC="examQuestion" :indexC="examQuestion.index" v-else />
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import ShowQuestionTypeA from './Show Exam Questions/ShowQuestionTypeA.vue'
import ShowQuestionTypeB from './Show Exam Questions/ShowQuestionTypeB.vue';
import ShowQuestionTypeC from './Show Exam Questions/ShowQuestionTypeC.vue';
import { useStore } from 'vuex';
import ShowCkContent from './Show Exam Questions/ShowCkContent.vue';
import { onMounted, watch, watchEffect } from '@vue/runtime-core';
export default {
  name: "ShowAllExamQuestions",
  props: {
    isViewAnswerSheet: {
      type: Boolean,
      default: () => false
    },
    viewAnswerSheet: {
      type: Array
    }
  },
  setup(props) {
    const store = useStore();

    const examAllQuestionsDe = computed(() => store.state.examPackState.examQuestions)
    // console.log(examAllQuestionsDe.value)
    // console.log(props.viewAnswerSheet, props.isViewAnswerSheet)
    // const examAllQuestions = ref([])

    let i = 0;
    const examAllQuestions = !props.isViewAnswerSheet ? computed(() => examAllQuestionsDe.value.map((q, ind) => {
      i++
      
      if(q.type != 'data_three') {
        return {
          ...q,
          index: i
        }
      } else {
        const q3 = {...q, index:i}
        const otherQ = q3.otherQuestions.map((oq, oi) => {
          const mainOq = {...oq,index: i++}
          
          return mainOq
        })
        i--
        return {
          ...q3,
          otherQuestions: [...otherQ]
        }
      }
    })) : ref({...props.viewAnswerSheet})

    const allMainQ = !props.isViewAnswerSheet ? ref([...examAllQuestions.value]) : ref([])
    
    onMounted(() => {
      if(allMainQ.value.length && !props.isViewAnswerSheet) {
        console.log('view download saving', allMainQ.value)
        store.commit('examResult/setViewDownloadQuestions', allMainQ.value)
      }
    })

   
  return {
      examAllQuestions
  };
},
  components: { ShowQuestionTypeA, ShowQuestionTypeB, ShowQuestionTypeC, ShowCkContent }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.question__container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  .question__card {
    background: #F4F4F4;
    border-radius: 25px;
    padding: 2rem 2.8rem;
    @include maxMedia(768px) {
      padding: 1.7rem 1rem;
    }
  }
}
</style>
