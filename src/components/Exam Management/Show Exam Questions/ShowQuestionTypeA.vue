<template>
  <div class="one_main">
    <div class="img__container" v-if="examQuestion?.q_image">
      <img :src="imageUrl(examQuestion.q_image)" alt="">
    </div>
    <div class="question__cont">

    <div class="sl">
      {{index}}.
    </div>
    <div class="question">
      <p>
        {{examQuestion.question_name}}
      </p>
      <div class="options">
        <CustomRadioButton 
          v-for="option in examQuestion.options" 
          :key="option.ans" 
          :option="option.ans"
          :name="option.qName"
          v-model="selectedOption"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import CustomRadioButton from "../../ui/CustomRadioButton.vue"
import { watch, watchEffect } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: "ShowQuestionTypeA",
  props: {
    examQuestion: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  setup(props) {
    const store = useStore();
    const examQuestion = props.examQuestion;
    const selectedOption = ref('');
    const allSelectedAns = computed(() => store.state.examResult.allSelectedAns)

    // const imageUrl = computed(() => (img) => img.includes('https://www.exam.poc.ac') ? img : `https://www.exam.poc.ac${img}`)
    const imageUrl = computed(() => (img) => img.includes('https://www.exam.poc.ac') || img.includes('http://www.exam.poc.ac')  ? img : `https://www.exam.poc.ac${img}`)

    
    watch(selectedOption,() => {
      // console.log('selected', selectedOption.value)

      
      const optionObj = computed(() => examQuestion.options.find(o => o.ans === selectedOption.value));
      // console.log(optionObj.value)
      if(optionObj.value) {
        store.dispatch('examResult/selectedAnsHandle', {...optionObj.value})
      }

    })

    return {
      selectedOption,
      imageUrl
    };
  },
  components: { CustomRadioButton }
}
</script>

<style scoped lang="scss">
@import '@/styles/config.scss';

.one_main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.img__container{
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;
  max-width: 400px;
  overflow: hidden;
  display: block;
  align-self: center;
  @include maxMedia(768px) {
    max-width: 100%;
    height: 200px;
  }
}
.img__container img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-position: center center;
  border-radius: 5px;
}

.pDefault {
  font-size: 1rem;
  color: rgb(0 0 0 / 70%);
  line-height: 1.25rem;
  font-weight: 500;
}
.question__cont {
  display: flex;
  // justify-content: space-between;
  align-items: flex-start;
  gap: 0.3rem;
  p{
    @extend .pDefault;
  }
  .question {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    .options{
      list-style-type: none;
      @include flexVertical;
      gap: 0.4rem;
      justify-content: center;
    }
  }

}
</style>