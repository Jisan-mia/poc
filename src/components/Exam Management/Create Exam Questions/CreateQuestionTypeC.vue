<template>
  <div class="type-3">
    <div class="para__header">
      {{questionTypeThree.paragraphHeader}}
    </div>

    <div class="para">
      {{questionTypeThree.paragraph}}
    </div>
    <div class="question" v-for="(examQuestion, index) in questionTypeThree.questions" :key="index">

      <CreateQuestionTypeA v-if="examQuestion.type == 'A'" :questionTypeOne="examQuestion" />
      <CreateQuestionTypeB v-if="examQuestion.type == 'B'" :questionTypeTwo="examQuestion"  />

    </div>
  </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import CreateQuestionTypeA from './CreateQuestionTypeA.vue';
import CreateQuestionTypeB from './CreateQuestionTypeB.vue';
export default {
  name: "CreateQuestionTypeC",
  props: {
    questionTypeThree: {
      type: Object,
      required: true
    }

  },
  setup() {
  },
  components: { CreateQuestionTypeA, CreateQuestionTypeB }
}
</script>

<style>

</style>