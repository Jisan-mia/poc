<template>
  <header class="header">
    <div class="exam__info">
      <h3 class="exam__header">Exam Info</h3>

      <div class="header__container">

        <div class="item1">
          <div class="exam__img">
            <img :src="currentExam.cover_photo" alt="">
          </div>
        </div>

        <div class="item2">
          <h3> {{currentExam.Exam_name}}</h3>
          <p>
            {{currentExam.details}}
          </p>
          <p>{{endTime}} | {{dayName}}, {{endDate}}</p>
        </div>

        <div class="item3">
          <div>
            <h3>Assigned Student</h3>
            <div class="more__info">
              <div class="group">
                <p class="label">Batch</p>
                <p class="value">
                  {{currentExam.level}}{{currentExam.batch}}
                </p>
              </div>
              <div class="group">
                <p class="label">Exam Pack</p>
                <p class="value">
                  {{currentExamPack.ExamPack_name}}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3>Marking</h3>
            <div class="more__info mark__info">
              <div class="group">
                <p class="label">Total Mark</p>
                <p class="value">
                   {{currentExam.total_mark}}
                  
                </p>
              </div>
              <div class="group">
                <p class="label">Per Question Mark</p>
                <p class="value">
              {{currentExam.mark_per_question}}

                </p>
              </div>
              <div class="group">
                <p class="label">Pass Mark</p>
                <p class="value">
              {{currentExam.pass_mark}}

                </p>
              </div>
            </div>
          </div>
          
        </div>

        <div class="item4">
          <h3>Your Performance</h3>

          <div class="infos">
            <p>Score: {{currentExam.score}}/{{currentExam.total_mark}}</p>
            <p>Timestamp: {{currentExam.timestamp}}</p>
            <p>Negative Marketing: {{currentExam.negative_marking}}</p>
          </div>

          <div class="view__btn">
            <CustomAdminBtn type="warning" :style="{
              fontSize: '12px',
              fonWeight: '400',
              padding: '7px 10px'
            }">
              View Answer Sheet
            </CustomAdminBtn>
          </div>
        </div>

      </div>

    </div>

    <div class="header__input">
      <input v-model="phoneSearch" type="text" placeholder="Search With Name" name="" id=""> <!--phone number was-->
      <button :class="{selected: isActive}"  @click="handleSelectFilter('highToLow')">
        Filter High To Low
      </button>
      <button :class="{selected: isActive2}" @click="handleSelectFilter('lowToHigh')">
        Filter Low To High
      </button>
     
     <button :class="{selected: isActive3}" @click="handleSelectFilter('timestamp')"> 
        Timestamp
      </button>

      <select name="" id="" placeholder="Filter with Board" v-model="boardSelected">
        <option selected disabled value="">Filter by Board</option>
        <option value="all">All Board</option>
        <option value="dhaka">Dhaka</option>
        <option value="chittagong">Chittagong</option>
        <option value="sylhet">Sylhet</option>
      </select>
    </div>
  </header>
  <table>
    <tbody>
      <tr>
        <td>
          <span>
            Rank
          </span>
        </td>
        <td>
          <span>
            Name
          </span>
        </td>
        <td>
          <span>
            Board
          </span>
        </td>
        <td>
          <span>
            Timestamp
          </span>
        </td>
        <td>
          <span>
            Score
          </span>
        </td>
        <td>
          <span>
            Negative Marking
          </span>
        </td>
      </tr>
      

      <tr class="main_row" v-for="report in specificReports" :key="report.id">
        <td> 
          <span>
            {{report.rank}}
          </span>
        </td>
        <td>
          <div class="student__info">
            <div class="img__container">
              <img src="/images/profile1.jpeg" alt="">
            </div>
            <div class="info">
              <h4> {{report.name}} </h4>
              <p> Student Institute </p>
            </div>
          </div>
        </td>
        <td>
         <span>
           {{report.board}}
         </span>
        </td>

        <td>
          <span>
            {{report.timestamp}}
          </span>
        </td>
        <td>
          <span>
            {{`${report.score}/${100}`}}
          </span>
        </td>
        <td>
          <span>
            {{report.negative_marking}}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, onBeforeMount, onMounted, ref, watchEffect } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import dayjs from 'dayjs';
import CustomAdminBtn from '../ui/CustomAdminBtn.vue';
export default {
  name: "SpecificExamReportComp",
  setup() {
    const route = useRoute();
    const store = useStore();
    const selectedFilter = ref('') // 'highToLow', 'lowToHigh', 'timestamp'
    const boardSelected = ref('')
    const phoneSearch =ref('')

    const examPacks = computed(() => store.state.examPackState.examPacks);
    const examLists = computed(() => store.state.reportingState.reportings);
    const specificReportsState = computed(() => store.state.reportingState.specificReportings);
    
    const { examId } = route.params;
    console.log({ examId });
    // search current exam by route examId
    const currentExam = computed(() => examLists.value.find(exam => exam.exam_id == `#${examId}`));
    watchEffect(async () => {
      try {
          await store.dispatch("reportingState/loadSpecificReports", currentExam.value.Exam_name);
      }
      catch (error) {
          console.log(error);
      }
    });

    const specificReports = computed(() => {
      if(phoneSearch.value || boardSelected.value || selectedFilter.value) {
        let specificReportsMain = ref(specificReportsState.value);
        if(phoneSearch.value) {
           specificReportsMain.value = specificReportsMain.value.filter(report => {
            return phoneSearch.value.toLowerCase().split(' ').every(v => report.name.toLowerCase().includes(v)) 
          })
        } 
        if(selectedFilter.value) {
          if(selectedFilter.value === 'highToLow') {
            specificReportsMain.value.sort((a, b) => b.score - a.score);
            
          } else if(selectedFilter.value === 'lowToHigh') {
            specificReportsMain.value.sort((a, b) => a.score - b.score)
          } else if(selectedFilter.value === 'timestamp') {
            specificReportsMain.value.sort((a, b) => b.timestamp - a.timestamp);
          }
        }
        if(boardSelected.value) {
            return specificReportsMain.value.filter(report => {
              if(boardSelected.value == 'all') return report
              return report.board.toLowerCase().includes(boardSelected.value.toLowerCase())
          })
        }
        return specificReportsMain.value

      } else {
        return specificReportsState.value.sort((a,b) => a.rank - b.rank)
      }
    })



    const isActive = ref(false)
    const isActive2 = ref(false)
    const isActive3 = ref(false)

    // selected filter from 3 button
    const handleSelectFilter = (type) => {
      selectedFilter.value = type;
      if(type == 'highToLow') {
        isActive.value = !isActive.value;
        isActive2.value = false
        isActive3.value = false
        if(!isActive.value) {
          selectedFilter.value = ''
        }
      } else if(type === 'lowToHigh') {
        isActive.value = false
        isActive2.value = !isActive2.value
        if(!isActive2.value) {
          selectedFilter.value = ''
        }
        isActive3.value = false
      } else if(type === 'timestamp')  {
        isActive.value = false
        isActive2.value = false
        isActive3.value = !isActive3.value
        if(!isActive3.value) {
          selectedFilter.value = ''
        }
      }
    }

    // exam pack for current exam

    const currentExamPack = computed(() => examPacks.value.find(pack => pack.id == currentExam.value.exam_pack));
    console.log(currentExam.value)
    console.log(currentExamPack.value);
    const timeF = computed(() => (date, time) => {
      const examDate = dayjs(date + time).format("YYYY-MM-DD hh:mm:ss A");
      return dayjs(examDate).format("hh:mm:ss A");
    });


    const endDate = computed(() => dayjs(currentExam.value.Exam_end_date).format("DD/MM/YYYY"));
    // const endTime = currentExam.value.Exam_end_time;
    const endTime = computed(() => {
      const examDate = dayjs(currentExam.value.Exam_end_date + currentExam.value.Exam_end_time).format("YYYY-MM-DD hh:mm:ss A");
      return dayjs(examDate).format("hh:mm:ss A");
    });

    const days = ref(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    const dayNum = computed(() => dayjs(endDate.value).day());
   
    const dayName = days.value[dayNum.value];
    
    
    return {
      currentExam,
      currentExamPack,
      endDate,
      endTime,
      dayName,
      specificReports,
      selectedFilter,
      handleSelectFilter,
      boardSelected,
      phoneSearch,
      isActive,
      isActive2,
      isActive3
    };
  },
  components: { CustomAdminBtn }
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
    grid-template-columns: 1fr 2fr 1.5fr 1.5fr 1fr 1.5fr;
    // grid-template-columns: repeat(6, 1fr);
    // @include maxMedia(968px) {
    //   display: inherit;
    // }

    &:first-child{
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #9FA2B4;
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
  .main_row td {
    span{
      font-weight: 600;
      font-size: 1.05rem;
      line-height: 1.2rem;
      letter-spacing: 0.2px;
      color: #000;
    }
    .student__info{
    @include flexCenter;
    gap: 0.9rem;
    .img__container{
      height: 42px;
      width: 42px;
      border-radius: 50%;
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
      }
      P{
        font-size: 0.8rem;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #454545;
      }
    }

   }
  }
  tr td:nth-child(2) {
    // grid-column: span 2
    min-width: 300px;
  }
  tr td:last-child {
    text-align: center;
    justify-content: center;
  }

}
.header__input{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: flex-start;
  align-content: center;
  gap: 0.85rem;
  margin-bottom: 0.3rem;
  

  input, select, button {
    border: 1px solid #FF6F00;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 0.9rem;
    outline: none;
    padding: 0.7rem 1rem;
    text-align: center;
    transition: all 0.3s;
    
    &::placeholder{
      color: #696969;
    }
  }
  button {
    @extend input;
    cursor: pointer;
    background: #fff;
  }
  select{
    text-align: left;
  }
  // input[type='text'] {
  //   min-width: 15%;
  //   width: 25%;
  // }

  button.selected {
    background: #FF6F00;
    transition: all 0.3s ease;
    color: #fff;
  }
  
  
}


.header {
  @include flexVertical;
  align-items: flex-start;
  gap: 1.8rem;
}
.exam__info {
  @extend .header;
  gap: 1rem;

  width: 100%;
  .exam__header{
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 28px;
    color: #00A9DC;
  }

  .header__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.3rem;
    width: 100%;

    .exam__img{
      background: #CFCFCF;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      width: 100%;
      height: 140px;
      overflow: hidden;

      img{
        width: 100%;
        height: 100%;
        border-radius: 18px;
        object-fit: cover;
        background-position: center center;
      }
    }

    .item2{
      @include flexVertical;
      align-items: flex-start;
      justify-content: space-evenly;
      h3{
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 25px;
        color: #00A9DC;
      }
      p{
        &:nth-child(odd) {
          font-size: 14px;
          line-height: 17px;
          color: #000000d3;
          font-weight: 500;
        
        }
        &:nth-child(even){
          font-size: 12px;
          line-height: 15px;
          color: #000000b3;
          font-weight: 500;
        }
      }
      
    }

    .item3{
      @include flexVertical;
      align-items: flex-start;
      justify-content: space-between;
      div h3{
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        color: #00A9DC;
        margin-bottom: 0.3rem;
      }

      .more__info{
        display: flex;
        align-items: center;
        gap: 0.3rem;

        .group{
          @include flexVertical;
          gap: 0.2rem;
          .label{
            font-weight: normal;
            font-size: 10px;
            line-height: 11px;
            letter-spacing: -0.011em;
            color: #000000;
          }
          .value {
            font-size: 10px;
            letter-spacing: -0.011em;
            color: #000000;
            border: 1px solid #00A9DC;
            box-sizing: border-box;
            border-radius: 5px;
            padding:  0.4rem 0.8rem;
          }
        }
      }
      .mark__info{
        .group {
          .label {
            font-size: 9px;
            line-height: 10px;
          }
          .value {
            border-radius: 0;
            text-align: center;
            padding: 0.3rem 1.1rem
          }
        }
      }
    }

    .item4{
      @include flexVertical;
      align-items: flex-start;
      justify-content: space-evenly;
      h3{
        font-weight: bold;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: -0.011em;
        color: #000000;
      }
      div.infos p{
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.011em;
        color: #000000c7;
        font-weight: 500;
        margin: 0.2rem 0;
      }

      .view__btn {
        border: none;
        outline: none;
        // background: #FF6F00;
        // color: #fff;
        // padding: 7px 10px;
        cursor: pointer;
        // font-size: 13px;
        // font-weight: 14px;
      }
    }
    


  }


} 
</style>