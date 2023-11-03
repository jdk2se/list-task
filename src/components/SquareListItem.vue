<script setup lang="ts">
import stringToColor from "../helpers/StringToColor";

defineProps<{
  color: string,
  index: number,
}>();

defineEmits(['deleteItem']);
</script>

<template>
    <div
        class="list-item__color"
        :style="{background: stringToColor(color)}"
        @click="$emit('deleteItem', index)"
    />
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
