<template>
  <div class="questionCont">
    <div class="inner">
      <div class="question__area">
        <div class="question__inner">

        </div>
      </div>

      <div class="selection__area">
        <div class="selection__inner"> 
          <select name="questionType" id="questionType" >
            <option value="Type-1">Type-1</option>
            <option value="Type-2">Type-2</option>
            <option value="Type-3">Type-3</option>
          </select>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateQuestionTypeA'
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
    background: #d3d3d3;
    min-height: 340px;

    .question__inner {
      
    }
  }


  .selection__area {
  
    width: 100%;
    max-width: 260px;
    
    @include maxMedia(768px) {
      grid-row: 1;
      max-width: inherit;
    }
  

    select {
      min-width: 250px;
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
}
</style>