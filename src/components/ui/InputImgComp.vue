
<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>

    <input
      ref="fileInput"
      type="file"
      @change="pickFile"
      class="fileInput"
      accept="image/*"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      previewImage: '/images/addQuestionImg.svg'
    };
  },
  methods: {
    selectImage () {
        this.$refs.fileInput.click()
    },
    pickFile () {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = e => {
          this.previewImage = e.target.result
          this.$emit('input', e.target.result)
        }
        
        reader.readAsDataURL(file[0])
        // this.$emit('input', file[0])
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.imagePreviewWrapper {
    width: 20px;
    height: 20px;
    display: block;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
}
.fileInput {
  display: none;
}
</style>