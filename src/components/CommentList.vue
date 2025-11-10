<script setup>
import { useCommentsQuery } from '@/queries/useCommentsQuery'
const props = defineProps({ postId: { type: String, required: true } })
const { data, isLoading, isError, error, refetch } = useCommentsQuery(props.postId)
</script>

<template>
  <div class="comments">
    <div v-if="isLoading">Cargando comentarios…</div>
    <div v-else-if="isError">Error: {{ error?.message ?? error }} <button @click="refetch">Reintentar</button></div>
    <ul v-else>
      <li v-for="c in data" :key="c.id">
        <strong>{{ c.autor || 'Anónimo' }}</strong>: {{ c.texto }}
      </li>
      <li v-if="!data?.length" class="empty">Sin comentarios aún.</li>
    </ul>
  </div>
</template>

<style scoped>
.comments ul { list-style: none; padding-left: 0; margin: 0; display: grid; gap: 6px; }
.empty { color: #777; font-style: italic; }
</style>
