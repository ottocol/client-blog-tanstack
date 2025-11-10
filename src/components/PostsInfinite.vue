<script setup>
import { ref } from 'vue'
import { usePostsInfinite, useLikeMutation } from '@/queries/usePostsQueries'
import CommentList from './CommentList.vue'

const expanded = ref(new Set()) // ids de posts con comentarios visibles
const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } = usePostsInfinite(8)
const likeMut = useLikeMutation()

function toggleComments(id) {
  if (expanded.value.has(id)) expanded.value.delete(id)
  else expanded.value.add(id)
  // forzar reactividad (Set no es reactivo por defecto)
  expanded.value = new Set(expanded.value)
}

function like(id) {
    likeMut.mutate({ id })
}
</script>

<template>
  <section>
    <h2>Blog ADI — Posts</h2>

    <div v-if="isLoading">Cargando posts…</div>
    <div v-else-if="isError">Error: {{ error?.message ?? error }}</div>

    <ul v-else class="posts">
      <li v-for="p in data?.pages?.flatMap(pg => pg.items)" :key="p.id" class="post">
        <h3>{{ p.titulo }}</h3>
        <p class="contenido">{{ p.contenido }}</p>
        <div class="meta">
          <button @click="like(p.id)" :disabled="likeMut.isPending.value">
            👍 {{ p.likes ?? 0 }}
          </button>
          <button @click="toggleComments(p.id)">
            {{ expanded.has(p.id) ? 'Ocultar comentarios' : 'Ver comentarios' }}
          </button>
        </div>

        <comment-list v-if="expanded.has(p.id)" :post-id="p.id" class="comments"/>
      </li>
    </ul>

    <div class="loadmore" v-if="hasNextPage">
      <button @click="fetchNextPage" :disabled="isFetchingNextPage">
        {{ isFetchingNextPage ? 'Cargando…' : 'Cargar más' }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.posts { list-style: none; padding: 0; display: grid; gap: 12px; }
.post { border: 1px solid #ddd; border-radius: 8px; padding: 12px; }
.meta { display: flex; gap: 8px; margin-top: 8px; }
.contenido { margin: 6px 0 0; color: #333; }
.loadmore { margin-top: 12px; }
.comments { margin-top: 8px; }
button { cursor: pointer; }
</style>
