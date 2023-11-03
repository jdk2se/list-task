<script setup lang="ts">
import { useListStore } from "../stores/listStore";
import List from "./List.vue";
import { defineAsyncComponent } from "vue";

const listStore = useListStore();
const mapTypeComponents = {
  mainList: defineAsyncComponent(() => import('./MainListItem.vue')),
  squareList: defineAsyncComponent(() => import('./SquareList.vue')),
}
defineProps({
  componentName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="accordion-list">
    <List v-for="(list, listIndex) in listStore.lists" :key="list.title" :list="list">
      <template v-slot:actions>
        <button>Randomize</button>
      </template>
      <component
          v-for="(item, itemIndex) in list.items"
          :key="itemIndex"
          :is="mapTypeComponents[componentName]"
          :item="item"
          :list-index="listIndex"
          :index="itemIndex"
      />
    </List>
  </div>
</template>

<style lang="scss">
.accordion-list {
  .accordion {
    background-color: #333;
    color: wheat;
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    border: 1px solid #222;
    text-align: left;
    outline: none;
    font-size: 1rem;
    transition: all 0.4s ease-out;
    box-shadow: 0 0 34px -8px rgba(0, 0, 0, 0.75);

    &:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    &:nth-last-child(2) {
      border-radius: 0 0 1rem 1rem;
    }

    &:after {
      content: "\002B";
      color: #eee;
      font-weight: bold;
      float: right;
      margin-left: 0.5rem;
    }
  }

  .active,
  .accordion:hover {
    background-color: #426ef0;
  }

  .active:after {
    content: "\2212";
  }

  .accordion-content {
    padding: 0 1rem;
    background-color: #222;
    color: #aaa;
    height: 0;
    overflow: hidden;
    transition: height 0.2s ease-out;
  }

  .accordion-content ul {
    list-style-type: circle;
    margin: 1rem 0;
    padding: 0.2rem;
  }

  .accordion-content ul li {
    padding: 0.2rem 0;
  }
}
</style>
