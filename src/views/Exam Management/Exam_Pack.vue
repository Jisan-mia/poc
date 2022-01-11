<template>
  <AllExamPack />
</template>

<script>
import { useRouter } from 'vue-router'
import AllExamPack from '../../components/Exam Management/AllExamPack.vue'
export default {
  components: {
    AllExamPack
  },
  name: 'Exam_Pack',
  setup() {
    const router = useRouter()

    return {
    }
  }
}
</script>

<style>

</style>