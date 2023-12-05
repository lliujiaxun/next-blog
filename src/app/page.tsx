import BlogList from 'src/components/ui/home/blog-list'
import Info from 'src/components/ui/home/info'
import Flex from 'src/components/ui/layout/flex'
import { API_HOST } from 'src/constant'
import { getAllBlog } from '../../lib/utils'

export default async function Home() {
  const data = getAllBlog()
  return (
    <Flex className="mt-5">
      <BlogList list={data} />
      <Info />
    </Flex>
  )
}

// export const generateStaticParams = async () => {
//   console.log('generateStaticParams')
//   return await getBlogList()
// }

function getBlogList() {
  // try {
  //   const promise = await fetch(`${API_HOST}/api/blog/list`, { next: { revalidate: 60 } })
  //   const data = await promise.json()
  //   return data?.blogList || []
  // } catch (error) {
  //   console.log(error)
  //   return []
  // }
  const data = getAllBlog()
}
