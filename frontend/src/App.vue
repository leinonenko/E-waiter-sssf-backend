<script setup>
import { useAuthStore } from "./auth/auth.store";

const store = useAuthStore();
</script>

<template>
  <router-view v-if="store.$state.isLoaded" />
  <div v-else class="p-5 flex justify-center items-center space-x-3">
    <span>Loading...</span>
  </div>
</template>
