<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <div class="h-56 bg-gray-200 rounded-lg mb-4"></div>
    <div class="font-bold text-lg mb-2">{{ name }}</div>
    <div class="text-gray-700 text-base mb-4">{{ description }}</div>
    <div class="font-bold text-xl mb-2">{{ price }}</div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
/* Стилі для компонента MenuItem */
</style>
