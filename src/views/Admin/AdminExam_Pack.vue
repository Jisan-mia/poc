<template>
  <span v-if="currentCompState == 'adminExamPack'">
    <AllExamPack @handleAddExamPack="handleCreateExamPack" @examPackClick="onExamPackCardClick"/>
  </span>

  <span v-else-if="currentCompState == 'isAdminExamPackCreate'">
    <AdminExamPackComp />
  </span>

  <span v-else-if="currentCompState  == 'isAdminExamPackEdit'">
    <AdminExamPackComp />
  </span>
</template>

<script>
import AllExamPack from '../../components/Exam Management/AllExamPack.vue'
import AdminExamPackComp from '../../components/Exam Management/AdminExamPackComp.vue';
import { ref } from '@vue/reactivity';
export default {
  components: {
    AllExamPack,
    AdminExamPackComp
},
  name: 'AdminExam_Pack',
  setup() {
    const currentCompState = ref('adminExamPack') // adminExamPack | isAdminExamPackEdit | isAdminExamPackCreate
    const handleCreateExamPack = () => {
      alert('exam pack admin create')
      currentCompState.value = 'isAdminExamPackCreate';
    }

    const onExamPackCardClick = (examPack) => {
      // console.log('clicked', examPack)
      alert(JSON.stringify(examPack))
      currentCompState.value = 'isAdminExamPackEdit'
    }


    return {
      onExamPackCardClick,
      handleCreateExamPack,
      currentCompState
    }
  }
}
</script>

<style>

</style>