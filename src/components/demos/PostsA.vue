<script setup>
import { usePostsInfinite } from '@/queries/usePostsQueries'
const { data, isLoading, fetchNextPage } = usePostsInfinite(8)
</script>

<template>
  <div class="box">
    <h3>Componente A</h3>
    <div v-if="isLoading">Cargando…</div>
    <ul v-else>
      <li v-for="p in data?.pages?.flatMap(pg => pg.items)" :key="p.id">{{ p.titulo }}</li>
    </ul>
    <button @click="fetchNextPage">Cargar más</button>
  </div>
</template>