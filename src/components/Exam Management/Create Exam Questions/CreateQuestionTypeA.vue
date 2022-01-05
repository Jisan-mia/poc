<template>
  <div class="question__inner">

    <div class="question">
      <div class="question__top">
        <p>Question</p>
        <div class="img__cont">
          <img src="/images/addQuestionImg.svg" alt="">
        </div>
      </div>

      <div class="qBottom">
        <AdminCustomInput 
          :isTextArea="true"
          placeholder="question..."
          v-model="questionTypeOne.question"
          :style="{
            minHeight: '120px',
            resize: 'vertical'
          }"
          />
      </div>

    
    </div>

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

    <div class="btns">
      <button class="delete">
        <i class="far fa-trash-alt fa-2x"></i>
        <span>Delete Question</span>
      </button>

      <div class="wrapper">
        <CustomAdminBtn type="info" :rounded="true">
          Save
        </CustomAdminBtn>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import CustomSelect from '../../ui/CustomSelect.vue';
import AdminCustomInput from '../AdminCustomInput.vue';
import CustomRadioButton from '../../ui/CustomRadioButton.vue';
import CustomAdminBtn from '../../ui/CustomAdminBtn.vue';
export default {
  name: "CreateQuestionTypeA",
  components: { CustomSelect, AdminCustomInput, CustomRadioButton, CustomAdminBtn },
  props: {
    questionTypeOne: {
      type: Object,
      required: true
    }
  },
  setup() {

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

  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-top: 1.5rem;
    .wrapper{
      min-width: 150px;
    }
    .delete {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      outline: none;
      cursor: pointer;
      background: inherit;
      
      font-weight: 500;

      i.far {
        color: red;
        width: 28px;
      }
      span {
        color: red;
        font-size: 1.1rem;
        margin-left:0.5rem;
        text-decoration: underline;
      }
    }
  }
}



</style>