<script setup lang="ts">
import { ListElement } from "../types/List";
import SquareListItem from "./SquareListItem.vue";
import { useListStore } from "../stores/listStore";

const props = defineProps<{
  index: number,
  listIndex: number,
  item: ListElement,
}>();

const listStore = useListStore();

const deleteItem = (color: string) => {
  listStore.deleteItem(props.listIndex, props.index);
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
