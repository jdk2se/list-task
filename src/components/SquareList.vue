<script setup lang="ts">
import { ListElement } from "../types/List";
import SquareListItem from "./SquareListItem.vue";
import { useListStore } from "../stores/listStore";

const props = defineProps<{
  listIndex: number,
  item: ListElement,
}>();

const listStore = useListStore();

const deleteItem = (color: string) => {
  listStore.deleteItem(props.listIndex, color);
};
</script>

<template>
  <div class="list-item">
    <SquareListItem
        v-for="index in item.number"
        :key="index"
        :color="item.color"
        @deleteItem="deleteItem"
    />
  </div>
</template>
