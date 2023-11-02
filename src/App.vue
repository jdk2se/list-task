<script setup lang="ts">
import { useListStore } from "./stores/listStore";
import { onBeforeMount } from "vue";
import MainList from "./components/MainList.vue";
import SquareList from "./components/SquareList.vue";


const listStore = useListStore();


onBeforeMount(() => {
  listStore.fill();
});
</script>

<template>
  <div class="container">
    <MainList />
    <SquareList />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 30px auto;
}
</style>
