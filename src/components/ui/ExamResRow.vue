<template>
<tr>
  <td class="subjectRes" @click="isShow = !isShow">
    <span>
      {{exam.Exam_name}}
    </span>
    <div class="collapse">
      <i class="fas fa-chevron-down"></i>
    </div>
  </td>

  

  <td class="id" :class="isShow ? 'showMe': 'hideMe'"> 
    <div class="header_res">Exam ID</div>
    <span @click="onStartExam(exam)">
      #{{cutHash(exam.exam_id)}} 
    </span>
  </td>

  <td class="subject" :class="isShow ? 'showMe': 'hideMe'">
    <span>
      {{exam.Exam_name}}
    </span>
  </td>

  <td :class="isShow ? 'showMe': 'hideMe'">
    <div class="header_res">Start Date & Time</div>
    <div class="date__time">
      <span class="date">{{dateF(exam.Exam_start_date)}}</span>
      <span class="time">
        {{timeF(exam.Exam_start_date, exam.Exam_start_time)}}
      </span>
    </div>
  </td>

  <td :class="isShow ? 'showMe': 'hideMe'">
    <div class="header_res">End Date & Time</div>
    <div class="date__time">
      <span class="date">{{dateF(exam.Exam_end_date)}}</span>
      <span class="time">
        {{timeF(exam.Exam_end_date, exam.Exam_end_time)}}
      </span>
    </div>
  </td>

  <td class="status__column" :class="isShow ? 'showMe': 'hideMe'">
    <div class="header_res">Status</div> 
    <span>
      <div class="wrapper">

        <CustomAdminBtn :style="{fontSize: '0.98rem', borderRadius: '15px', padding: '1rem 1.2rem'}"  type="primary" :rounded="true" :disabled="true" v-if="exam.isNotYetStarted">
          Not Started
        </CustomAdminBtn>

        <CustomAdminBtn :style="{fontSize: '0.98rem', borderRadius: '15px', padding: '1rem 1.2rem'}" type="info" :rounded="true" v-if="!exam.isExpired && !exam.isNotYetStarted && !exam.hasExamAlreadyGiven" @onClick="onStartExam(exam)">
          Start Exam
        </CustomAdminBtn>

        <CustomAdminBtn :style="{fontSize: '0.98rem', borderRadius: '15px', padding: '1rem 1.2rem'}" type="warning" :rounded="true" :disabled="true" v-if="exam.isExpired">
          Expired
        </CustomAdminBtn>

        <CustomAdminBtn :style="{fontSize: '0.98rem', borderRadius: '15px', padding: '1rem 1.2rem'}" type="primary" :rounded="true" :disabled="true" v-if="exam.hasExamAlreadyGiven">
          Completed
        </CustomAdminBtn>
        
      </div>
    </span>

  </td>
</tr>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import dayjs from 'dayjs';
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue';

export default {
name: 'ExamResRow',
props: {
  exam: {
    type: Object
  }
},
components: {CustomAdminBtn},
setup(props, ctx) {
  const isShow = ref(false)
  const cutHash = computed(() => (id) => id.split("").filter(c => c == "#" ? false : c).join(""));
  const dateF = computed(() => (date) => {
      return dayjs(date).format("DD/MM/YYYY");
  });

  const timeF = computed(() => (date, time) => {
      const examDate = dayjs(date + time).format("YYYY-MM-DD hh:mm:ss A");
      return dayjs(examDate).format("hh:mm A");
  });


  const onStartExam = (exam) => {
    ctx.emit('onHandleStartExam', exam)
  }
  
  

  return {
    cutHash,
    dateF,
    timeF,
    isShow,
    onStartExam
  }
}
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

  tr.row_header.res {
    border: none;
    display: none;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.2px;
    color: #9FA2B4;
    @include maxMedia(768px) {
      display: block;
    }
    
  }

  

  tr{
    border-bottom: 1px solid #CDCDCD;
    display: grid;
    // grid-template-columns: 1.5fr 2fr 1.5fr 1.5fr 1.5fr;
    // grid-template-columns: 179px 250px 206px 206px auto;
    grid-template-columns: repeat(5, 210px);

    @include maxMedia(768px) {
      grid-template-columns: 1fr;
      gap: 0.4rem;
      padding: 0.8rem 0;
    }
    td.showMe {
      @include maxMedia(768px) {
        display: flex;
        padding-left: 2.5rem;
      }
    }
    td.hideMe {
      @include maxMedia(768px) {
        display: none
      }
    }
    .header_res {
      display: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #9FA2B4;
      @include maxMedia(768px) {
        display: block
      }
    }
    

    // &:first-child{
    //   border: none;
    //   font-weight: 600;
    //   font-size: 1rem;
    //   line-height: 1.2rem;
    //   letter-spacing: 0.2px;
    //   color: #9FA2B4;
    //   @include maxMedia(768px) {
    //     display: none
    //   }
    // }

    .id span, .subject span, .subjectRes span{
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      text-decoration-line: underline;
      color: #00335C;
      cursor: pointer;

    }
    .subject {
      span{
        color: #000;
      }
      @include maxMedia(768px) {
        display: none !important;;
      }
    }
    .subjectRes {
      display: none;
      @include maxMedia(768px) {
        display: block;
        grid-row: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        cursor: pointer;
      }
      span{
        color: #000;
      }
      
      div {
        display: none;
        @include maxMedia(768px) {
          display: block;
        }
      }

    }
    .wrapper {
      max-width: 120px;
      min-width: 80px;
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
  th, td{
    // border: 1px solid blue;
    text-align: left;
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include maxMedia(968px) {
      padding: 0.5rem 0.9rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;
    }
  }
  th {
     white-space: nowrap;
  }
</style>