<script setup>
import { usePostsInfinite } from '@/queries/usePostsQueries'
const { data, isLoading } = usePostsInfinite(8)
</script>

<template>
  <div class="box">
    <h3>Componente B</h3>
    <div v-if="isLoading">Cargando…</div>
    <div v-else>
      <p>Items en cache en 1ª pag {{ data?.pages?.[0]?.items?.length ?? 0 }}</p>
      <p>Total páginas en cache: {{ data?.pages?.length ?? 0 }}</p>
    </div>
  </div>
</template>
