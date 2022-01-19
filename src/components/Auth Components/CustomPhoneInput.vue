<template>
  <div class="container" :class="[disabled && 'disabled']">
    <span>+88</span>
    <input
      min="0" 
      type="number" 
      :value="modelValue" 
      @input="updateValue" 
      :placeholder="placeholder"
      v-bind="$attrs"
      :disabled="disabled"
       >
  </div>
</template>

<script>
export default {  
  name: 'CustomPhoneInput',
  props: {
    modelValue: {
      type: [Number, String]
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props, cxt) {
    const updateValue = (e) => {
      cxt.emit('update:modelValue', e.target.value)
    }
    return {
      updateValue
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.disabled {
  background-color:  #F4F4F4 !important;
  border-color: #c4c4c4 !important
}
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // gap: 0.3rem;
  border: 1px solid  #146AB4;
  border-radius: 20px;
  width: 100%;

  span {
    font-size: 1.2rem;
    font-weight: 800;
    background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    border-right: 1px solid #00d4fe;
    padding: 0 1rem;
    @include maxMedia(500px) {
      padding: 0 0.2rem;
    }
  }

  input{
    outline: none;
    border: none;
    padding:1.2rem;
    // line-height: 50px;
    font-size: 1.1rem;
    border-radius: 20px;
    @include maxMedia(500px) {
      font-size: 1rem;
      padding: 1.2rem 0.5rem;
    }
    :disabled {
      cursor: none;
    }

    &::placeholder {
      color: #002C51;
      // font-style: italic;
      font-size: 0.9rem;

    }
  }
}


</style>