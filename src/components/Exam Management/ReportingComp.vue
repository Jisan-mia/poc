<template>
  <header>
    <div class="header__input">
      <input type="text" placeholder="Search With Exam ID" name="" id="">
      <input type="datetime-local" name="" id="" placeholder="Date Range">
    </div>
  </header>
  <table>
    <tbody>
      <tr>
        
        <td>
          <span>
            Exam ID
          </span>
        </td>
        <td>
          <span>
            Subject
          </span>
        </td>
        <td>
          <span>
            Data & Time
          </span>
        </td>
        <td>
          <span>
            Highest Score
          </span>
        </td>
        <td>
          <span>
            Negative Marking
          </span>
        </td>
      </tr>
      

      <tr v-for="report in reports" :key="report.examId">
        

        <td class="id" > 
          <router-link :to="{name: 'SpecificExamReport', params: {examId: cutHash(report.exam_id)}}">
            <span>
              #{{cutHash(report.exam_id)}}
            </span>
          </router-link>
         
        </td>
        <td class="subject">
          <router-link :to="{name: 'SpecificExamReport', params: {examId: cutHash(report.exam_id)}}">
            <span>
              {{report.Exam_name}}
            </span>
          </router-link>
        </td>
        <td>
          <div class="date__time">
            <span class="date">{{dateF(report.Exam_end_date)}}</span>
            <span class="time">
              {{report.Exam_end_time}}
              </span>
          </div>
        </td>

        <td class="highest">
          <span>
            {{`${report.score}/${report.total_mark}`}}
          </span>
        </td>
        <td class="average">
          <span>
            {{report.negative_marking}}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import dayjs from "dayjs";

export default {
  name: 'ReportingComp',
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.state.isLoading);

    const reports = computed(() => store.state.reportingState.reportings)
    const examLists = computed(() => store.state.examPackState.examLists);
/*
    // const reportingExamIds = computed(() => {
    //   return reportings.value.map(r => r.exam_name);
    // })
    // let examReport = ref(null);
    // if(reportings.value.length !== 0 && examLists.value.length !== 0) {
    //   const exams = computed(() => examLists.value.map(exam => {
    //     if(reportingExamIds.value.indexOf(exam.id) != -1) {
    //       const report = computed(() => reportings.value.filter(r => r.exam_name == exam.id))
    //       const mainReport = computed(() => Object.assign({}, report.value)[0])
    //       delete mainReport.value.id
    //       // console.log(mainReport.value)
    //         return {
    //           ...exam,
    //           ...mainReport.value,
    //         }
    //     } else {
    //       return false;
    //     }
    //   }).filter(Boolean))

    //   examReport.value = exams.value
    // }

    

    // console.log(examReport.value)
    
    */
    const cutHash = computed(() => (id) => id.split('').filter(c => c == '#' ? false : c).join(''))
    
    const dateF = computed(() => (date) => {
      return dayjs(date).format('DD/MM/YYYY');
    });



    const reportsd = ref([
      {
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '1/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2020',
        subject: 'Physics 2st Paper',
        date: {
          date: '2/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2021',
        subject: 'Chemistry 2st Paper',
        date: {
          date: '3/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2022',
        subject: 'Chemistry 1st Paper',
        date: {
          date: '4/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2021',
        subject: 'Higher Math 1st Paper',
        date: {
          date: '6/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2022',
        subject: 'Higher Math 2st Paper',
        date: {
          date: '7/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2023',
        subject: 'Chemistry',
        date: {
          date: '8/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2020',
        subject: 'Chemistry',
        date: {
          date: '9/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2022',
        subject: 'Physics',
        date: {
          date: '10/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2021',
        subject: 'Physics 1st Paper',
        date: {
          date: '11/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2023',
        subject: 'Physics 1st Paper',
        date: {
          date: '13/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2020',
        subject: 'Physics 1st Paper',
        date: {
          date: '14/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2021',
        subject: 'Physics 1st Paper',
        date: {
          date: '15/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2023',
        subject: 'Physics 1st Paper',
        date: {
          date: '16/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '17/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2023',
        subject: 'Physics 1st Paper',
        date: {
          date: '18/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '19/22',
          time: '06:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2021',
        subject: 'Physics 1st Paper',
        date: {
          date: '21/22',
          time: '07:00 PM'
        }
      },{
        highest_score: {own: 20, max: 30},
average_mark: 55.33,
examId: 'HSC2022',
        subject: 'Physics 1st Paper',
        date: {
          date: '23/3',
          time: '06:00 PM'
        }
      }
    ])
    onMounted(() => {
    })
    return {
      reports,
      isLoading,
      cutHash,
      dateF
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
table {
  border-collapse: collapse;
  width: 100%;
  tbody tr{
    border-bottom: 1px solid #CDCDCD;
    display: grid;
    // grid-template-columns: 1fr 2fr 1.5fr 1.5fr 1.5fr;
    grid-template-columns: repeat(5, 1fr);
    // @include maxMedia(968px) {
    //   display: inherit;
    // }

    &:first-child{
      border: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #9FA2B4;
    }

    .id span, .subject span, .highest, .average{
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      text-decoration-line: underline;
      color: #00335C;
      cursor: pointer;
    }
    .highest, .average {
      font-weight: 500;

      color: #000;
      cursor: default;
      text-decoration-line: none;
    }
    .subject span{
      color: #000;
    }
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
  }
  tr td{
    // border: 1px solid blue;
    text-align: left;
    padding:1rem 2rem 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include maxMedia(968px) {
      padding: 0.5rem 0.9rem 0.5rem 0;
    }
  }
  tr td:nth-child(2) {
    // grid-column: span 2
    min-width: 215px;
  }

}
.header__input{
  display: flex;
  justify-content: flex-start;
  align-content: center;
  gap: 0.85rem;
  margin-bottom: 1.2rem;

  input {
    border: 1px solid #FF6F00;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 0.9rem;
    outline: none;
    padding: 0.7rem 1rem;
    &::placeholder{
      color: #696969;
    }
  }
  input[type='text'] {
    min-width: 15%;
    width: 25%;
  }
  input[type='datetime-local'] {
    min-width: 15%;
    width: 22%;
  }
  
}
</style>