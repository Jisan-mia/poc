<template>
  <div class="top__section">
    <div class="select">
      <select name="examPack" id="examPack" >
        <option selected disabled value="">Exam Pack</option>
        <option value="elite exam pack1">elite exam pack</option>
        <option value="elite exam pack2">elite exam pack2</option>
        <option value="elite exam pack3">elite exam pack3</option>
      </select>
    </div>

    <div class="select">
      <select name="exam" id="exam"  >
        <option selected disabled value="">Exam Name</option>
        <option value="Physics 1st chapter">Physics 1st chapter</option>
        <option value="Physics 2nd chapter">Physics 2nd chapter</option>
        <option value="Force chapter">Force chapter</option>
      </select>
    </div>

  </div>

  <div class="questionComp">
    <CreateQuestionTypeA />
  </div>
  
</template>

<script>
import CreateQuestionTypeA from "./CreateQuestionTypeA.vue"
export default {
    name: "CreateAllExamQuestion",
    components: { CreateQuestionTypeA },
    setup() {
        return {};
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

.top__section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  select {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 1rem;
    padding:  1rem;
    background: #E4E4E4;
    border-radius: 10px;
    cursor: pointer;
  }
    
}

</style>