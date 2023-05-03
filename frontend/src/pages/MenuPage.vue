<script setup>
import ItemMenu from "./menu/ItemMenu.vue";
</script>
<template>
  <navBar />
  <div class="container mx-auto">
    <div class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
      <ItemMenu />
    </div>
  </div>
</template>
