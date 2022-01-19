<template>
  <header>
    <div class="header__input">
      <input v-model="idSearch" type="text" placeholder="Search With Exam ID" name="" id="">
      <input v-model="subjectSearch" type="text" placeholder="Filter With Subject" name="" id="">

      <!-- <input v-model="" type="datetime-local" name="" id="" placeholder="Date Range"> -->
    </div>
  </header>
  <div class="table_main">
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
            Exam Name
          </span>
        </td>
        <td>
          <span>
            Date & Time
          </span>
        </td>
        <td>
          <span>
            Your Score
          </span>
        </td>
        <td>
          <span>
            Negative Marking
          </span>
        </td>
        <td>
          <span>
            Final Score
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
            <span class="date">
              {{dateF(report.Exam_start_date)}} <!-- changed from Exam_end_date -->
            </span>
            <span class="time">
              <!-- {{report.Exam_end_time}} -->
              {{timeF(report.Exam_start_date, report.Exam_start_time)}}

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
        <td class="average">
          <span>
            3
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import dayjs from "dayjs";

export default {
  name: 'ReportingComp',
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.state.isLoading);
    const idSearch = ref('')
    const subjectSearch = ref('')

    const mainReportD = computed(() => store.state.reportingState.reportings)

    const mainReport = computed(() => mainReportD.value.filter(r => r.isExpired === true))


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

    const timeF = computed(() => (date, time) => {
        const examDate = dayjs(date + time).format("YYYY-MM-DD hh:mm:ss A");
        return dayjs(examDate).format("hh:mm A");
    });


    const reports = computed(() => {
      if(idSearch.value) {
        return mainReport.value.filter(report => {
        // return report.exam_id.toLowerCase().indexOf(`#${idSearch.value.toLowerCase()}`) != -1 
          return idSearch.value.toLowerCase().split(' ').every(v => report.exam_id.toLowerCase().includes(v))
        })
      } if(subjectSearch.value) {
        return mainReport.value.filter(report => {
          return subjectSearch.value.toLowerCase().split(' ').every(v => report.Exam_name.toLowerCase().includes(v))
        })
      }
      else {
        return mainReport.value
      }
      
    })
    
  // watchEffect(() => console.log(reports.value))


    return {
      reports,
      isLoading,
      cutHash,
      dateF,
      timeF,
      idSearch,
      subjectSearch
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.table_main {
  overflow-x:auto;
}
table {
  border-collapse: collapse;
  width: 100%;
  tbody tr{
    border-bottom: 1px solid #CDCDCD;
    display: grid;
    // grid-template-columns: 1fr 2fr 1.5fr 1.5fr 1.5fr;
    grid-template-columns: repeat(6, 1fr);
    // @include maxMedia(968px) {
    //   display: inherit;
    // }
    @include maxMedia(768px) {
       grid-template-columns: repeat(5, 200px);
    }

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
    border: 1px solid #00a9dc;
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
    @include maxMedia(768px) {
      width: 100%;
    }
  }
  input[type='datetime-local'] {
    min-width: 15%;
    width: 22%;
  }
  
}
</style>