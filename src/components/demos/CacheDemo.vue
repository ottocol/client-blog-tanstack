<script setup>
import { ref } from 'vue'
import PostsA from '@/components/demos/PostsA.vue'
import PostsB from '@/components/demos/PostsB.vue'

const showB = ref(true)
</script>

<template>
  <h2>Demo 1 — Caché compartida</h2>
  <button @click="showB = !showB">
    {{ showB ? 'Ocultar B' : 'Mostrar B' }}
  </button>

  <div style="display:flex; gap:24px; align-items:flex-start;">
    <posts-a />
    <posts-b v-if="showB" />
  </div>
</template>
