<template>
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Check your order</h1>
  
        <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
  <div class="flex flex-wrap py-4 px-6">
    <div class="w-full md:w-1/3 lg:w-1/4">
      <img src="https://via.placeholder.com/200x200" alt="Dish" class="object-cover h-48 w-full mb-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-lg font-medium text-gray-900">Dish name</h2>
      </div>
      <p class="text-gray-600 mb-2">Price: $10.99</p>
      <p class="text-gray-600 mb-2">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in rutrum ipsum. Integer nec odio. Nam luctus, ante vitae consectetur aliquam, justo turpis volutpat massa, eget consequat enim libero id nibh.</p>
      <p class="text-gray-600">Weight: 200g</p>
      <div class="flex items-center mt-4">
        <button class="text-white bg-blue-500 rounded-full w-8 h-8 mr-2">-</button>
        <input type="number" class="text-center w-12 bg-gray-200 rounded-md" value="1">
        <button class="text-white bg-blue-500 rounded-full w-8 h-8 ml-2">+</button>
      </div>
    </div>
  </div>
</div>
  
        <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div class="py-4 px-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Comments:</h2>
            <form>
              <textarea class="w-full bg-gray-200 rounded-md py-2 px-4 mb-4" placeholder="Enter your comment"></textarea>
            </form>
          </div>
        </div>
  
        <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div class="py-4 px-6 flex justify-between items-center">
            <h2 class="text-lg font-medium text-gray-900">Total:</h2>
            <p class="text-2xl font-bold text-gray-900">$20.98</p>
          </div>
        </div>
  
        <button class="w-full bg-blue-500 text-white py-3 font-medium fixed bottom-0 left-0 right-0">Confirm</button>
      </div>
    </div>
  </template>
  