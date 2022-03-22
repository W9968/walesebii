import { NextApiRequest, NextApiResponse } from 'next'
import { getPreviewPostBySlug } from 'functions/serverless.butter'

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret != process.env.NEXT_PUBLIC_PREVIEW || !req.query.slug)
    return res.status(400).json({ error: 'Bad request' })

  //fetch headless data from butter if slug is provided
  const data = await getPreviewPostBySlug(req.query.slug)

  if (!data) return res.status(404).json({ error: 'Post not found' })

  // setting cookies to enable preview mode
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/blog/${data.slug}` })
  res.end()
}
