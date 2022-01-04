<template>
  <div class="questionCont">
    <div class="inner">
      <div class="question__area">
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
                v-model="questionTypeOne.paragraph"
                :style="{
                  minHeight: '120px',
                  resize: 'vertical'
                }"
               />
            </div>

          
          </div>

          <div class="options">
            options
          </div>

          <div class="btns">
            btns
          </div>
        </div>
      </div>

      <div class="selection__area">
        <div class="selection__inner"> 
          <CustomSelect 
            :options="typeOptions"
            v-model="typeSelected"
            :style="{
              borderRadius: '10px', 
              fontSize: '1rem',
              padding:  '1rem',
              backgroundColor:'#E4E4E4',
              border: 'none'
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import CustomSelect from '../../ui/CustomSelect.vue';
import AdminCustomInput from '../AdminCustomInput.vue';
export default {
  name: "CreateQuestionTypeA",
  components: { CustomSelect, AdminCustomInput },
  setup() {

    const typeOptions = ref(['Type 01', 'Type 02', 'Type 03']);
    const typeSelected = ref('Type 01')
    const questionTypeOne = ref({
      paragraph: '',
      correctAns: '',
      options: ['option1','option2','option3','option4',]
    })

    return {
      typeOptions,
      questionTypeOne,
      typeSelected
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/config.scss';
.questionCont {
  background: #F4F4F4;
  border-radius: 35px;
  padding: 3.5rem;
  .inner {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5em;
    justify-content: start;
    width: 100%;
    @include maxMedia(768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
  }
    @include maxMedia(768px) {
      padding: 1.65rem;
    }

  
  .question__area {
    width: 100%;
    min-height: 340px;

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
    }


  }


  .selection__area {
    width: 100%;
    min-width: 250px;
    max-width: 260px;
    
    @include maxMedia(768px) {
      grid-row: 1;
      max-width: inherit;
    }
  }
}
</style>