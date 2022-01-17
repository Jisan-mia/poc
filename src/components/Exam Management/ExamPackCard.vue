<template>
 
    <div class="img__container" :class="[outline ? 'notOutlined' : 'outlined']">
      <img :src="'https://www.exam.poc.ac'+examPack.pack_image" alt="Exam Pack Image">
    </div>
    <div class="text">
      <router-link :to="{name: 'ExamUnpack', params: {packId: examPack.id}}" >
        <h3> 
        {{examPack.ExamPack_name}} 
      </h3> 
      </router-link>
      <p>
        Batch {{examPack.batch}} 
      </p>
    </div>  
</template>

<script>
export default {
  name: "ExamPackCard",
  props: {
    examPack: {
      type: Object
    },
    outline: {
      type: Boolean
    }

  },
  emits: ['examPackClick'],
  setup(props) {
    const examPack = props.examPack;
    // console.log(examPack)
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

  .outlined{
    border-radius: 23px;
  }
  .notOutlined {
    border-radius: 0px;
  }
  .img__container{
    background: #CFCFCF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    overflow: hidden;
  }
  .img__container img{
    width: 100%;
    height: 100%;
    border-radius: 23px;
    object-fit: cover;
    background-position: center center;
  }
  .text{
    text-align: left;

    h3{
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 25px;
    text-decoration: underline;
    color: #00A9DC;
    cursor: pointer;
  }
  }
  .text p{
    font-size: 0.9rem;
    color: #000;
    line-height: 17px;
  }

</style>