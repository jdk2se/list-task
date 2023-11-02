<script setup lang="ts">
import { ListElement } from "../types/List";
import stringToColor from "../helpers/StringToColor";

defineProps<{
  item: ListElement,
}>();
</script>

<template>
  <div class="list-item">
      <div
          v-for="index in item.number"
          :key="index"
          class="list-item__color"
          :style="{background: stringToColor(item.color)}"
      />
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  &__color {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 3px;

    &:hover {
      cursor: pointer;}
  }
}
</style>
