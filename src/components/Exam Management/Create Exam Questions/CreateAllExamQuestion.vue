<template>
  <div class="questionCont">
    <div class="question__area">
      <div class="question__inner">

      </div>
    </div>

    <div class="selection__area">
      <div class="selection__inner"> 

        <div class="select">
          <label>Question Type</label>
          <select name="questionType" id="questionType" >
            <option value="Type-1">Type-1</option>
            <option value="Type-2">Type-2</option>
            <option value="Type-3">Type-3</option>
          </select>
        </div>

        <div class="select">
          <label>Exam Pack</label>
          <select name="examPack" id="examPack" >
            <option selected disabled value="">Select Exam Pack</option>
            <option value="elite exam pack1">elite exam pack</option>
            <option value="elite exam pack2">elite exam pack2</option>
            <option value="elite exam pack3">elite exam pack3</option>
          </select>
        </div>

        <div class="select">
          <label>Select Exam</label>
          <select name="exam" id="exam"  >
            <option selected disabled value="">Select Exam</option>
            <option value="Physics 1st chapter">Physics 1st chapter</option>
            <option value="Physics 2nd chapter">Physics 2nd chapter</option>
            <option value="Force chapter">Force chapter</option>
          </select>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAllExamQuestion',
  setup(){


    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.questionCont {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5em;
  justify-content: start;
  width: 100%;

  @include maxMedia(768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .question__area {
    width: 100%;
    background: #d3d3d3;
    min-height: 340px;

    .question__inner {
      
    }
  }

  .selection__area {
    width: 100%;
    
    @include maxMedia(768px) {
      grid-row: 1;
    }
   .selection__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    @include maxMedia(768px) {
      display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      margin-bottom: 1rem;
    }
   }

   .select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    
    label {
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      color: #000;
    }
    select {
      width: 100%;
      height: 100%;
      outline: none;
      border: 1.8px solid #00A9DC;
      font-size: 1rem;
      padding:  1rem;
    }
  }
  }
}
</style>