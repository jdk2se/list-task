<script setup lang="ts">
import { ListItem } from "../types/List";
import { ref } from "vue";

defineProps<{list: ListItem}>();

const isActive = ref(false);
const toggleItems = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <button
      class="accordion"
      :class="{active: isActive}"
      @click="toggleItems"
  >{{ list.title }}</button>
  <div class="accordion-content" :style="{height: isActive ? 'auto': null}">
    <div class="accordion-content__wrapper">
      <slot />
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
