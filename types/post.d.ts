export interface postProp {
  created: Date
  published: Date
  url: string
  slug: string
  featured_image?: any
  featured_image_alt: string
  author: {
    first_name: string
    last_name: string
    email: string
    slug: string
    bio: string
    title: string
    linkedin_url: string
    twitter_handle: string
  }
  tags: any[]
  categories: any[]
  title: string
  body: string
  summary: string
  updated: Date
  seo_title: string
  meta_description: string
  status: string
}
