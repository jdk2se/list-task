<script setup lang="ts">
import { useListStore } from "./stores/listStore";
import { onBeforeMount } from "vue";
import Accordion from "./components/Accordion.vue";

const listStore = useListStore();

onBeforeMount(() => {
  listStore.fill();
});
</script>

<template>
  <div class="container">
    <div class="main-list">
      <Accordion component-name="mainList" />
    </div>
    <div class="square-list">
      <Accordion component-name="squareList" />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 30px auto;

  .main-list {
    width: 40%;
  }

  .square-list {
    width: 55%;
  }
}
</style>
