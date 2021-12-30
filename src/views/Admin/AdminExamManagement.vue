<template>
<div>
  <div class="container">
    <div class="wrapper">
      <CustomAdminBtn type="info" icon="fas fa-plus" @onClick="handleCreateExam" >
       <span> Create an Exam </span>
      </CustomAdminBtn>
    </div>
    <h3 class="title">Upcoming Exams</h3>
  <div class="pack_container">
    <div v-for="exam in upcomingExam" :key="exam.id"  class="card" >
      <ExamCard  @examCardClick="onUpcomingExamCardClick" :exam="exam"/>
    </div>
    </div>
  </div>
</div>
</template>
<script>
import { ref } from '@vue/reactivity'
import getExamList from '@/api/examPackApi'
import { onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import CustomAdminBtn from '../../components/ui/CustomAdminBtn.vue'
import ExamCard from '../../components/Exam Management/ExamCard.vue'

export default {
  name: "AdminExamManagement",
  props: {

  },
  components: {
    CustomAdminBtn,
    ExamCard
},
  setup() {
      const upcomingExam = ref([
        {
          id: 1, 
          title: 'Chemistry 1st Paper',
          date: '10:30 AM | Sunday, 19/10/2021'
        },{
          id: 2, 
          title: 'Physics 1st Paper',
          date: '10:30 AM | Sunday, 19/10/2021'
        },{
          id: 3, 
          title: 'Physics 2nd Paper',
          date: '10:30 AM | Sunday, 19/10/2021'
        },{
          id: 4, 
          title: 'Chemistry 2nd Paper',
          date: '10:30 AM | Sunday, 19/10/2021'
        },
      ])
      
      
      const isExam = ref(false)
      const route = useRoute();
      const router = useRouter();
     

      const onUpcomingExamCardClick = (exam) => {
        // console.log('clicked', examPack)
        
        alert(JSON.stringify(exam))
        
      }

      const {examList, error, loadExamList} = getExamList();
      const url = "http://www.exam.poc.ac/api/list_examPack"
      function apiFetch(){
          fetch(url)
          .then(res => res.json())
          .then(data => {
              console.log(data)
          })
      }
      // apiFetch();
      // onMounted(() => {

      // })

      return {
        upcomingExam,
        isExam,
        onUpcomingExamCardClick
      }
  }
}

</script>


<style scoped>

.container{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
}
.wrapper {
  max-width: 380px;
}
.title {
  color: #00A9DC;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.9rem;
  margin-bottom: -0.6rem;
  margin-top: 0.8rem;
}

.pack_container{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-gap:2rem 1.2em;
  flex: 1;
  justify-content: center;
}
.pack_container::after{
  content: "";
  display: block;
  grid-column-start: 1;
  height: 1em;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8em;
}
@media (max-width: 600px) {
  .pack_container{
    padding: 1em 1em;
  }
}
.primary-btn{
  border: none;
  outline: none;
  padding: 1rem 1.2rem;;
  border-radius: 1rem;
  background: #00A9DC;
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.3rem;
  text-align: center;
  cursor: pointer;
}
.flex-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

</style>

