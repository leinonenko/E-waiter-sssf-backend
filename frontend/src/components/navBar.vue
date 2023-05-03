<template>
  <nav class="flex items-center justify-between bg-blue-500 p-6">
    <div class="flex items-center">
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        @click="goHome"
      >
        Home
      </button>
    </div>
    <div class="flex items-center">
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        @click="goLogin"
      >
        Login
      </button>
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        @click="goRegister"
      >
        Register
      </button>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    function goHome() {
      router.push({ name: "menu" });
    }

    function goLogin() {
      router.push({ name: "login" });
    }

    function goRegister() {
      router.push({ name: "register" });
    }

    return {
      goHome,
      goLogin,
      goRegister,
    };
  },
};
</script>

<style>
nav {
  margin-bottom: 1rem;
}

nav button {
  margin-right: 1rem;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s;
}

button:hover {
  background-color: #3182ce;
  color: white;
  cursor: pointer;
}

button:active {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>
