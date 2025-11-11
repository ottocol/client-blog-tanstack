import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { qk } from './keys'
import { getPostsPage, likePost } from '@/backend/repositories/postsRepository'

export function usePostsInfinite(perPage = 10) {
  return useInfiniteQuery({
    queryKey: qk.posts(),
    queryFn: ({ pageParam = 1 }) => getPostsPage(pageParam, perPage),
    getNextPageParam: (last) => {
      const { page, totalPages } = last
      return page < totalPages ? page + 1 : undefined
    },
    staleTime: 10_000,
  })
}

export function usePrefetchPost() {
  const qc = useQueryClient()
  return (id) => qc.prefetchQuery({
    queryKey: qk.post(id),
    queryFn: async () => (await getPostsPage(1, 1)), // placeholder si quieres detalle real
    staleTime: 60_000,
  })
}

export function useLikeMutation() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id }) => likePost(id),

    // optimistic update dentro de lista infinita
    onMutate: async ({ id }) => {
      await qc.cancelQueries({ queryKey: qk.posts() })
      const prev = qc.getQueryData(qk.posts())
      qc.setQueryData(qk.posts(), (data) => {
        if (!data) return data
        return {
          ...data,
          pages: data.pages.map(pg => ({
            ...pg,
            items: pg.items.map(p => p.id === id ? { ...p, likes: (p.likes ?? 0) + 1 } : p)
          })),
        }
      })
      return { prev }
    },
    onError: (_e, _v, ctx) => {
      if (ctx?.prev) qc.setQueryData(qk.posts(), ctx.prev)
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: qk.posts() })
    },
  })
}
