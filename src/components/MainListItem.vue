<script setup lang="ts">
import { ListElement } from "../types/List";
import stringToColor from "../helpers/StringToColor";

defineProps<{
  item: ListElement,
  index: number
}>();

defineEmits(['updateQuantity', 'changeColor']);
</script>

<template>
  <div class="list-item">
    <label>
      <input type="checkbox" name="item"  />
      <span>item {{ index + 1 }}</span>
    </label>
    <section class="list-item__info">
      <input
          type="number"
          min="0"
          :value="item.number"
          @input="$emit('updateQuantity', index, parseInt($event.target.value))"
      />
      <input
          type="color"
          class="list-item__color"
          :value="stringToColor(item.color)"
          @change="$emit('changeColor', index, $event.target.value)"
      />
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

    &:hover {
      cursor: pointer;
    }
  }

  label:hover {
    cursor: pointer;
  }

  input[type=number] {
    width: 40px;
  }
}
</style>
