<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main class="mx-auto max-w-6xl p-4">
    <h1 class="text-2xl font-bold">Страница объявления №{{ route.params.id }}</h1>
    <RouterLink to="/" class="mt-4 inline-block text-blue-600 underline">
      На главную
    </RouterLink>
  </main>
</template>