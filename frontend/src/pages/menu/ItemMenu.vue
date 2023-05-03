<template>
  <div class="group cursor-pointer">
    <div
      class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
    >
      <a class="relative block aspect-square" :href="link">
        <img
          class="object-cover transition-all"
          :src="imgSrc"
          :alt="imgAlt"
          :loading="lazyLoad"
          :decoding="asyncLoad"
          :data-nimg="fill"
          :sizes="sizes"
          :srcset="srcset"
        />
        <div class="p-4">
          <h2 class="text-lg font-medium text-gray-800 dark:text-gray-100">
            {{ title }}
          </h2>
          <p class="text-gray-500 text-sm mt-1">{{ description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    lazyLoad: {
      type: String,
      default: "lazy",
    },
    asyncLoad: {
      type: String,
      default: "async",
    },
    fill: {
      type: String,
      default: "fill",
    },
    sizes: {
      type: String,
      default: "(max-width: 768px) 30vw, 33vw",
    },
    srcset: {
      type: String,
      required: true,
    },
  },
};
</script>
