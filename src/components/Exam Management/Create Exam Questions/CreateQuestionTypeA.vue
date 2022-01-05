<template>
  <div class="question__inner">

    <div class="question">
      <div class="question__top">
        <p>প্রশ্ন...</p>
        <div class="img__cont" v-if="!isFromTypeC">
          <img src="/images/addQuestionImg.svg" alt="">
        </div>
      </div>

      <div class="qBottom">
        <AdminCustomInput 
          :isTextArea="true"
          placeholder="প্রশ্ন..."
          v-model="questionTypeOne.question"
          :style="{
            minHeight: '120px',
            resize: 'vertical'
          }"
          />
      </div>
    </div>

    <!-- {{questionTypeOne}} -->

    <div class="options">
      <CustomRadioButton
        v-for="option in questionTypeOne.options"
        :key="option"
        :option="option"
        name='type1'
        v-model="questionTypeOne.correctAns"
        :isEditOption="true"
      />
    </div>

    <QuestionCreateBtns v-if="!isFromTypeC" />
    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import CustomSelect from '../../ui/CustomSelect.vue';
import AdminCustomInput from '../AdminCustomInput.vue';
import CustomRadioButton from '../../ui/CustomRadioButton.vue';
import CustomAdminBtn from '../../ui/CustomAdminBtn.vue';
import QuestionCreateBtns from './QuestionCreateBtns.vue';
export default {
  name: "CreateQuestionTypeA",
  components: { CustomSelect, AdminCustomInput, CustomRadioButton, CustomAdminBtn, QuestionCreateBtns },
  props: {
    questionTypeOne: {
      type: Object,
      required: true
    },
    isFromTypeC: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    console.log(props.questionTypeOne)

    return {

    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/config.scss';

  
.question__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  .question {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &__top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.15rem;
      font-weight: 500;
    }
    .img__cont {
      max-width: 20px;
      max-height: 20px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }

  .options {
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.95rem;
    margin-top:0.9rem;
  }

  
}



</style>