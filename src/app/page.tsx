import BlogList from 'src/components/ui/home/blog-list'
import Info from 'src/components/ui/home/info'
import Flex from 'src/components/ui/layout/flex'

export default async function Home() {
  const blogList = await getBlogList()
  return (
    <main>
      <Flex className="mt-5">
        <BlogList list={blogList} />
        <Info />
      </Flex>
    </main>
  )
}

// export const generateStaticParams = async () => {
//   console.log('generateStaticParams')
//   return await getBlogList()
// }

async function getBlogList() {
  try {
    const promise = await fetch('http://localhost:3000/api/blog/list')
    const data = await promise.json()
    return data?.blogList || []
  } catch (error) {
    console.log(error)
    return []
  }
}
