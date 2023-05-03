<template>
  <navBar />
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row my-4">
      <div class="md:w-1/2">
        <img
          class="w-full h-auto"
          src="https://via.placeholder.com/400x300"
          alt="Food Image"
        />
      </div>
      <div class="md:w-1/2 md:ml-8">
        <h2 class="text-2xl font-bold mb-2">Food Name</h2>
        <p class="text-lg mb-2">Weight: 300g</p>
        <p class="text-lg mb-2">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p class="text-lg mb-4">Price: $10.00</p>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemPage",
};
</script>
