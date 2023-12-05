import BlogList from 'src/components/ui/home/blog-list'
import Info from 'src/components/ui/home/info'
import Flex from 'src/components/ui/layout/flex'
import { API_HOST } from 'src/constant'

export default async function Home() {
  const blogList = await getBlogList()
  return (
    <Flex className="mt-5">
      <BlogList list={blogList} />
      <Info />
    </Flex>
  )
}

// export const generateStaticParams = async () => {
//   console.log('generateStaticParams')
//   return await getBlogList()
// }

async function getBlogList() {
  try {
    console.log(API_HOST, '--cs')
    const promise = await fetch(`${API_HOST}/api/blog/list`, { next: { revalidate: 0 } })
    const data = await promise.json()
    return data?.blogList || []
  } catch (error) {
    console.log(error)
    return []
  }
}
