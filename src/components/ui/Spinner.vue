<template>
  <div class="base-spinner"></div>
</template>

<script>
export default {
  name: 'Spinner'

}
</script>

<style lang="scss" scoped>
.base-spinner {
  position: relative;
  overflow: hidden;
  min-height: 25px;
  min-width: 25px;
}

.base-spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}

.base-spinner:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

</style>