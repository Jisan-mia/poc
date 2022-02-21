<template>
  <div class="question__container">
    <div class="question__card" v-for="(examQuestion) in examAllQuestions" :key="examQuestion.id">
      <ShowQuestionTypeA :examQuestion="examQuestion" :index="examQuestion.index"  v-if="examQuestion.type == 'data_one'"/>
      <ShowQuestionTypeB :examQuestion="examQuestion" :index="examQuestion.index" v-else-if="examQuestion.type == 'data_two'" />
      <ShowQuestionTypeC :examQuestionC="examQuestion" :indexC="examQuestion.index" v-else />
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
import { watch, watchEffect } from '@vue/runtime-core';
export default {
  name: "ShowAllExamQuestions",
  setup() {
    const store = useStore();

    const examAllQuestionsDe = computed(() => store.state.examPackState.examQuestions)
    //console.log(examAllQuestions.value)
    let i = 0;
    const examAllQuestions = computed(() =>examAllQuestionsDe.value.map((q, ind) => {
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
    }))
    const allMainQ = [...examAllQuestions.value]
    watch(allMainQ, () => {
      console.log(examAllQuestions.value)

      if(allMainQ) {
        console.log('view download saving', allMainQ)
        store.commit('examResult/setViewDownloadQuestions', allMainQ)
      }
    })

    const examAllQuestionsD = ref([
    {
      id: 1,
      questionNo: 1,
      type: "data_one",
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      options: [
          "Option1",
          "Option2",
          "Option3",
          "Option4"
      ],
    },
    
    {
      id: 2,
      type: "data_two",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      questionNo: 2,
      hintsHeader: "Follow below information",
      hintsOption: {
        i: "this is hint one" ,
        ii: "this is hint two" ,
        iii: "this is hint three" ,
      },         
      optionsHeader: "Which option is true",
      options: [
          "i & ii",
          "ii & iii",
          "i & iii",
          "i, ii, iii"
      ],
    },
    {
      id: 3,
      type: "C",
      paragraphHeader: "Answer the below 2 questions following the paragraph",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      questions: [
        {
          type: "A",
          questionNo: 3,
          question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          options: [
              "Option 1 of c",
              "Option 2 of c",
              "Option 3 of c",
              "Option 4 of c"
          ],
        },
        {
          type: "B",
          questionNo: 4,
          hintsHeader: "Follow below information",
          hintsOption: {
            i: "this is hint one" ,
            ii: "this is hint two" ,
            iii: "this is hint three" ,
          },         
          optionsHeader: "Which option is true",
          options: [
              "i & iii",
              "i & ii",
              "ii & iii",
              "i, ii, iii"
          ],
        }
      ]
    },
  ]);
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
