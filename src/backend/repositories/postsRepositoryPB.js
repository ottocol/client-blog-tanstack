import { pb } from '@/backend/config/pb'

export async function getPostsPage(page = 1, perPage = 10) {
  return await pb.collection('posts').getList(page, perPage, { sort: '-created' })
}

export async function getPost(id) {
  return await pb.collection('posts').getOne(id)
}

export async function getComments(postId) {
  return await pb.collection('comments').getFullList({
    filter: `post = "${postId}"`,
    sort: '-created',
  })
}

export async function likePost(id) {
  // suma 1 (PB no tiene operadores atómicos; simple para demo)
  const current = await getPost(id)
  return await pb.collection('posts').update(id, { likes: (current.likes ?? 0) + 1 })
}
