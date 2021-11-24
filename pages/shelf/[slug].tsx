import { useRouter } from 'next/router'
import type { NextPage } from 'next'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  return <>{`${slug}`.replaceAll('-', ' ')}</>
}

export default Slug
