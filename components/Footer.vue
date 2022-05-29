<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-theme-purple-light w-full h-12 mt-6 sm:mt-20 text-white flex items-center">
    <p class="text-xs font-semibold ml-3">
      © Sasial 2021-{{ currentYear }} -
      <a class="text-theme-yellow" href="https://github.com/sasial-dev/Portfolio">Open Sourced</a> under the
      <a class="text-theme-yellow" href="https://choosealicense.com/licenses/agpl-3.0/">GNU AGPLv3 License</a>
    </p>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
