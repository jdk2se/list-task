<script setup lang="ts">
import { ListItem } from "../types/List";
import { defineAsyncComponent, ref } from "vue";
import Checkbox from "./form/Checkbox.vue";

defineProps<{
  list: ListItem,
  componentName: string,
  listIndex: number,
}>();

const isActive = ref(false);
const toggleItems = () => {
  isActive.value = !isActive.value;
};
const mapTypeComponents = {
  mainList: defineAsyncComponent(() => import('./MainList.vue')),
  squareList: defineAsyncComponent(() => import('./SquareList.vue')),
}

const isChecked= ref(true);
const checkboxToggle = (value: boolean) => {
  isChecked.value = value;
}
</script>

<template>
  <div
      class="accordion"
      :class="{active: isActive}"
      @click="toggleItems"
  >
    <Checkbox v-if="componentName === 'mainList'" :is-checked="isChecked" @changed="checkboxToggle" />
    <div class="accordion-title">{{ list.title }}</div>
  </div>
  <div class="accordion-content" :style="{height: isActive ? 'auto': null}">
    <div class="accordion-content__wrapper">
      <component
          :is="mapTypeComponents[componentName]"
          :items="list.items"
          :list-index="listIndex"
          :is-checked="isChecked"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion-content {
  padding: 0 1rem;
  background-color: #222;
  color: #aaa;
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-out;

  &__wrapper {
    padding: 0 0 10px;
  }
}

.accordion-content ul {
  list-style-type: circle;
  margin: 1rem 0;
  padding: 0.2rem;
}

.accordion-content ul li {
  padding: 0.2rem 0;
}
</style>
