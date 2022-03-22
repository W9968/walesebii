import butter from 'hooks/useButter'

export async function getPreviewPostBySlug(slug: any): Promise<any> {
  const postResponse = await butter.post.retrieve(slug, {
    preview: 1,
  })
  return postResponse?.data?.data
}

export async function getPostBySlug(): Promise<any> {
  const response = await butter.post.list()
  return response?.data?.data
}

export async function getAllPostsForHome(preview: any): Promise<[]> {
  const response = await butter.post.list({ preview: preview ? 1 : 0 })
  return response?.data?.data
}

// @ts-ignore
export async function getPostAndMorePosts(slug, preview: any): Promise<any> {
  const postResponse = await butter.post.retrieve(slug, {
    preview: 1,
  })

  return {
    post: postResponse?.data?.data,
    previous: postResponse?.data?.meta?.previous_post,
    next: postResponse?.data?.meta?.next_post,
  }
}
