<script setup lang="ts">
import { useListStore } from "../stores/listStore";
import { ListElement } from "../types/List";
import MainListItem from "./MainListItem.vue";

const props = defineProps<{
  index: number,
  listIndex: number,
  item: ListElement,
}>();

const listStore = useListStore();
const updateQuantity = (quantity: number) => {
  listStore.updateQuantity(props.listIndex, props.index, quantity);
};
const changeColor = (color: string) => {
  listStore.changeColor(props.listIndex, props.index, color);
}
</script>

<template>
  <MainListItem
      :item="item"
      :index="index"
      @updateQuantity="updateQuantity"
      @changeColor="changeColor"
  />
</template>
