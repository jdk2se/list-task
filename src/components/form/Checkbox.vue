<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  isChecked: {
    type: Boolean,
    required: true
  }
})

defineEmits(['changed']);

const checked = ref(props.isChecked);
</script>

<template>
  <label class="wrapper" @click="$emit('changed', !checked)">
    <input type="checkbox" v-model="checked">
    <span class="checkmark"></span>
  </label>
</template>

<style lang="scss" scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ .checkmark {
    background-color: #354551;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #354551;
  }

  input:checked ~ .checkmark {
    background-color: #354551;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
