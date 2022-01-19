<template>
  <div class="table_main">

  <table>
    <!-- <thead>
      <th>Exam ID</th>
      <th>Subject</th>
      <th>Data & Time</th>
    </thead> -->

    <span v-if="!exams.length">
      This exam pack has no exam..
    </span>

    <tbody v-else>
      <tr>
        <th>Exam ID</th>
        <th>Exam Name</th>
        <th >Start Date & Time</th>
        <th>End Date & Time</th>
        <th class="status_header">Status</th> 
      </tr>

      <tr v-for="exam in exams" :key="exam.id">
        <td class="id"> 
            <span @click="handleStartExam(exam)">
              #{{cutHash(exam.exam_id)}} 
            </span>
           </td>
        <td class="subject">
          <span>
            {{exam.Exam_name}}
          </span>
        </td>
        <td>
          <div class="date__time">
            <span class="date">{{dateF(exam.Exam_start_date)}}</span>
            <span class="time">
              {{timeF(exam.Exam_start_date, exam.Exam_start_time)}}
            </span>
          </div>
        </td>
        <td>
          <div class="date__time">
            <span class="date">{{dateF(exam.Exam_end_date)}}</span>
            <span class="time">
              {{timeF(exam.Exam_end_date, exam.Exam_end_time)}}
            </span>
          </div>
        </td>
        <td class="status__column">
          <span>
            <div class="wrapper">

              <CustomAdminBtn :style="{fontSize: '0.98rem', borderRadius: '15px', padding: '1rem 1.2rem'}"  type="primary" :rounded="true" :disabled="true" v-if="exam.isNotYetStarted">
                Not Started
              </CustomAdminBtn>

              <CustomAdminBtn :style="{fontSize: '0.98rem', borderRadius: '15px', padding: '1rem 1.2rem'}" type="info" :rounded="true" v-if="!exam.isExpired && !exam.isNotYetStarted && !exam.hasExamAlreadyGiven" @onClick="handleStartExam(exam)">
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
    </tbody>
  </table>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';
import dayjs from "dayjs";
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue';
import { getDateDiff } from '../../api/common';
export default {
    name: "ExamUnpack",
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        const windowWidth = ref(window.innerWidth)

        onMounted(() => {
          windowWidth.value = window.innerWidth
        })

        watchEffect(() => {
          console.log(windowWidth.value)
        })

        const examLists = computed(() => store.state.examPackState.examLists);

        const { packId } = route.params;

        const exams = computed(() => examLists.value.filter(exam => exam.exam_pack == packId));
        // console.log(packId, exams.value);
        // console.log(exams.value)

        const cutHash = computed(() => (id) => id.split("").filter(c => c == "#" ? false : c).join(""));
        const dateF = computed(() => (date) => {
            return dayjs(date).format("DD/MM/YYYY");
        });

        const timeF = computed(() => (date, time) => {
            const examDate = dayjs(date + time).format("YYYY-MM-DD hh:mm:ss A");
            return dayjs(examDate).format("hh:mm A");
        });
        


       
        const handleStartExam = (exam) => {
          if(!exam.isExpired && !getDateDiff(exam.Exam_end_date, exam.Exam_end_time)) {
            if(localStorage.getItem(`deadline${exam.id}`)) {
              // noting to do
              console.log('came previously')
            } else {
              const timeInMinutes = exam.exam_total_time;
              const currentTime = Date.parse(new Date());
              const deadline = new Date(currentTime + timeInMinutes*60*1000);
              const totalExamTimeEndTime = computed(() => dayjs(deadline).format(("YYYY-MM-DD HH:mm:ss")));

              localStorage.setItem(`deadline${exam.id}`, totalExamTimeEndTime.value);
              
            }


            
            
            const routeData = router.resolve({
              name: 'ExamPage',
              params: { id: exam.id }
            })

            window.open(routeData.href, '_blank');
          } else {
            if(localStorage.getItem(`deadline${exam.id}`)) {
              console.log('what to do expired')
              localStorage.removeItem(`deadline${exam.id}`)
            }
            return;
          }
        }
        return {
            exams,
            cutHash,
            dateF,
            timeF,
            handleStartExam
        };
    },
    components: { CustomAdminBtn }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';

.table_main {
  width: 100%;
  @include maxMedia(768px) {
    overflow-x: scroll;
  }
}

table {
  border-collapse: collapse;
  width: 100%;


  tbody tr{
    border-bottom: 1px solid #CDCDCD;
    display: grid;
    // grid-template-columns: 1.5fr 2fr 1.5fr 1.5fr 1.5fr;
    // grid-template-columns: 179px 250px 206px 206px auto;
    grid-template-columns: repeat(5, 210px);

    @include maxMedia(768px) {
      grid-template-columns: repeat(5, 190px)
    }
    

    &:first-child{
      border: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #9FA2B4;
    }

    .id span, .subject span{
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      text-decoration-line: underline;
      color: #00335C;
      cursor: pointer;
    }
    .subject span{
      color: #000;
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
    }
  }
  th {
     white-space: nowrap;
  }
  // .status__column , .status_header{
  //   justify-self: center;
  // }

}
</style>