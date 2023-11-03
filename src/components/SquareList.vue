<script setup lang="ts">
import { ColorItem, ListElement } from "../types/List";
import SquareListItem from "./SquareListItem.vue";
import { useListStore } from "../stores/listStore";
import Button from "./form/Button.vue";
import { Ref, ref, watch } from "vue";

const props = defineProps<{
  listIndex: number,
  items: ListElement[],
}>();

const listStore = useListStore();
const isRandomized = ref<boolean>(false);
const randomizedItems: Ref<ColorItem[] | null> = ref(null);

watch([isRandomized, listStore.lists], (values) => {
  if(values[0]) {
    randomizedItems.value = listStore.randomizedListItems(props.listIndex);
  }
})

const deleteItem = (index: number) => {
  listStore.deleteItem(props.listIndex, index);
  if (isRandomized && Array.isArray(randomizedItems.value)) {
    randomizedItems.value.splice(index, 1);
  }
};
</script>

<template>
  <div class="list-item">
    <div
        v-if="!isRandomized"
        v-for="(item, index) in items"
        :key="index"
        class="list-item__element"
    >
      <SquareListItem
          v-for="colorIndex in item.number"
          :key="colorIndex"
          :index="index"
          :color="item.color"
          @deleteItem="deleteItem"
      />
    </div>
    <div v-else class="list-item__element">
      <SquareListItem
          v-for="(colorItem, index) in randomizedItems"
          :key="index"
          :index="colorItem.index"
          :color="colorItem.color"
          @deleteItem="deleteItem"
      />
    </div>
    <Button @click="isRandomized = !isRandomized">Randomize</Button>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  &__element {
    margin-bottom: 10px;
  }
}
</style>
