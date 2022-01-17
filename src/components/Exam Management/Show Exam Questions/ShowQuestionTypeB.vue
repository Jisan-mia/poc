<template>
<div class="two_main">
    <div class="img__container" v-if="examQuestion.Q_image">
      <img :src="imageUrl(examQuestion.Q_image)" alt="">
    </div>
    <!-- {{JSON.stringify(imageUrl(examQuestion.Q_image))}} -->
  <div class="question__cont">
    <div class="paragraph" v-if="examQuestion?.description">
      {{examQuestion.description}}
    </div>
    <div class="hints">
      <p class="hints__header">
        <span>{{index}}.</span>
        <span>
          {{examQuestion.question_name}}
        </span>
      </p>
      <div class="hints__option">
        <p v-for="key in Object.keys(allHints)" :key="key">
          <span v-if="allHints[key]">
            {{key}}.
          </span>
          <span v-if="allHints[key]">
            {{allHints[key]}}
          </span>
        </p>
      </div>
    </div>

    <div class="options">
      <p class="options__header">
        নিচের কোনটি সঠিক/Which one is correct?
      </p>

      <div class="item__cont">
        <CustomRadioButton
          v-for="option in examQuestion.options"
          :key="option.id"
          :option="option.ans"
          :name='option.id'
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
  name: "ShowQuestionTypeB",
  components: { CustomRadioButton },
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
    const allSelectedAns = computed(() => store.state.examResult.allSelectedAns)



    const imageUrl = computed(() => (img) => img.includes('https://www.exam.poc.ac') ? img : `https://www.exam.poc.ac${img}`)


    const allHints = computed(() => {
      return {
        'i': examQuestion?.data_one,
        'ii': examQuestion?.data_two,
        'iii': examQuestion?.data_three,
        'iv': examQuestion?.data_four
      }
    })
    
    const selectedOption = ref('')

    watch(selectedOption, () => {
      //console.log('selected', selectedOption.value)
      const optionObj = computed(() => examQuestion.options.find(o => o.ans === selectedOption.value))
      if(optionObj.value) {
        store.dispatch('examResult/selectedAnsHandle', {...optionObj.value})

      }
      //console.log(optionObj.value)
    })

    watchEffect(() => {
      //console.log(allSelectedAns.value)
    })


    return {
      selectedOption,
      allHints,
      imageUrl
    };
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/config.scss';


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
  object-fit: cover;
  background-position: center center;
  border-radius: 5px;
}

.two_main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.pDefault {
  font-size: 1rem;
  color: rgb(0 0 0 / 70%);
  line-height: 1.25rem;
  font-weight: 500;
}
.question__cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  
  .paragraph{
    @extend .pDefault;
  }

  .hints{
    @include flexVertical;
    justify-content: center;
    gap: 0.8rem;

    .hints__header{
      @extend .pDefault;
      color: #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.3rem;
    }

    .hints__option{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.45rem;
      p{
        @extend .pDefault;
      }
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    p{
      @extend .pDefault;
      color: #000;
    }
    .item__cont{
      list-style-type: none;
      @include flexVertical;
      gap: 0.4rem;
      justify-content: center;
    }
  }

}
</style>