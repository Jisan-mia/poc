<template>
<tr class="main_row report" v-if="isSpecificReport">
    <!-- {{JSON.stringify(report)}} -->
    <td> 
      <span>
        {{specificReport.mainRank}}
      </span>
    </td>
    <td>
      <div class="student__info">
        <div class="img__container">
          <img :src="specificReport.Profile_image ? imageUrl(specificReport.Profile_image) : '/images/placeholderImg2.svg'" alt="">
        </div>
        <div class="info">
          <h4> {{specificReport.name}} </h4>
          <p> {{specificReport.institution}} </p>
        </div>
      </div>
    </td>
    <td>
      <span>
        {{specificReport.board}}
      </span>
    </td>

    <td>
      <span>
        {{timeStampF(specificReport.timestamp)}}
      </span>
    </td>
    <td>
      <span>
        {{`${specificReport.score}/${specificReport.total_mark}`}}
      </span>
    </td>
    <td>
      <span>
        {{Math.round(specificReport.negative_marking*100)/100}}
      </span>
    </td>
  </tr>

  
</template>

<script>
import dayjs from 'dayjs';
import { computed } from '@vue/reactivity';
export default {
  name: 'ResponsiveRow',
  props: {
    isExam: {
      type: Boolean,
      default: () => false
    },
    report: {
      type: Object
    },
    isReport: {
      type: Boolean,
      default: () => false
    },
    sReportCurrentExam: {
      type: Object
    },

    isSpecificReport: {
      type: Boolean,
      default: () => false
    },
    specificReport: {
      type: Object
    },
  },
  setup(props){
    const imageUrl = computed(() => (img) => img.includes('https://www.exam.poc.ac') || img.includes('http://www.exam.poc.ac')  ? img : `https://www.exam.poc.ac${img}`)

    const timeStampF = computed(() => (time)=>  {
      const fullDate =  dayjs(props.sReportCurrentExam.Exam_end_date+time).format('YYYY-MM-DD hh:mm:ss A');
      // console.log(fullDate)
      return dayjs(fullDate).format("hh:mm:ss A")
    })

    return {
      timeStampF  ,
      imageUrl
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/config.scss';


tr.report{
  border-bottom: 1px solid #CDCDCD;
  display: grid;
  grid-template-columns: 1fr;


  .date__time{
    @include flexVertical;
    justify-content: center;
    align-items: flex-start;  
    
    color: #454545;
    font-size: 0.7rem;
    .date{
      margin-bottom: 0.3rem;
      color: #000;
      font-size: 0.88rem;
    }
  }
  td{
  // border: 1px solid blue;
    text-align: left;
    padding:1rem 2rem 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include maxMedia(968px) {
      padding: 0.5rem 0.9rem 0.5rem 0;
    }

    
    span{
      font-weight: 600;
      font-size: 1.05rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #000;
    }
    .student__info {
      @include flexCenter;
      gap: 0.9rem;
      .img__container{
        height: 42px;
        min-width: 42px;
        width: 42px;
        border-radius: 50%;
        background-color: #cdcdcd;
        img{
          width:100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          background-position: center center;
        }
      }

      .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.3rem;
        h4{
          font-weight: 600;
          font-size: 0.9REM;
          line-height: 20px;
          letter-spacing: 0.2px;
          color: #000;
          text-transform: capitalize;
        }
        P{
          font-size: 0.8rem;
          line-height: 20px;
          letter-spacing: 0.2px;
          color: #454545;
          text-transform: capitalize;
        }
      }

    }

    &:last-child {
      text-align: center;
      justify-content: center;
    }
    &:nth-child(2) {
    // grid-column: span 2
      min-width: 300px;
    }
  }
  


  
}

  


</style>