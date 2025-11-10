export const qk = {
  posts: () => ['posts'],
  post: (id) => ['post', id],
  comments: (postId) => ['post', postId, 'comments'],
}
