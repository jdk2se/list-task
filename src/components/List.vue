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
    <slot />
  </div>
</template>
