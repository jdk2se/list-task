<script setup lang="ts">
import { useListStore } from "../stores/listStore";
import List from "./List.vue";

defineProps({
  componentName: {
    type: String,
    required: true
  }
})

const listStore = useListStore();
</script>

<template>
  <div class="accordion-list">
    <List
        v-for="(list, listIndex) in listStore.lists"
        :key="list.title"
        :list="list"
        :component-name="componentName"
        :list-index="listIndex"
    />
  </div>
</template>

<style lang="scss">
.accordion-list {
  .accordion {
    display: flex;
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

    &-title:after {
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

  .accordion.active .accordion-title:after {
    content: "\2212";
  }
}
</style>
