<script setup lang="ts">
import { useListStore } from "./stores/listStore";
import { onBeforeMount } from "vue";
import MainList from "./components/MainList.vue";


const listStore = useListStore();


onBeforeMount(() => {
  listStore.fill();
});
</script>

<template>
  <div class="container">
    <MainList />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
}
</style>
