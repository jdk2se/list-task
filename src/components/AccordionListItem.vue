<script setup lang="ts">
import { ListElement } from "../types/List";
import stringToColor from "../helpers/StringToColor";

defineProps<{
  item: ListElement,
  index: number
}>();
</script>

<template>
  <div class="list-item">
    <label>
      <input type="checkbox" name="item"  />
      <span>item {{ index }}</span>
    </label>
    <section class="list-item__info">
      <span>{{ item.number }}</span>
      <div class="list-item__color" :style="{background: stringToColor(item.color)}" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__info {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
    }
  }

  &__color {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  label:hover {
    cursor: pointer;
  }
}
</style>
