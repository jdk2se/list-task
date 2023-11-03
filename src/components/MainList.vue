<script setup lang="ts">
import { useListStore } from "../stores/listStore";
import { ListElement } from "../types/List";
import MainListItem from "./MainListItem.vue";

const props = defineProps<{
  listIndex: number,
  items: ListElement[],
}>();

const listStore = useListStore();
const updateQuantity = (index: number, quantity: number) => {
  listStore.updateQuantity(props.listIndex, index, quantity);
};
const changeColor = (index: number, color: string) => {
  listStore.changeColor(props.listIndex, index, color);
}
</script>

<template>
  <MainListItem
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      @updateQuantity="updateQuantity"
      @changeColor="changeColor"
  />
</template>
