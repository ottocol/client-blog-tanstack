import { useQuery } from '@tanstack/vue-query'
import { qk } from './keys'
import { getComments } from '@/backend/repositories/postsRepository'

export function useCommentsQuery(postId) {
  return useQuery({
    queryKey: qk.comments(postId),
    queryFn: () => getComments(postId),
    enabled: !!postId,
    staleTime: 15_000,
  })
}
