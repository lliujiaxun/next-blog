import BlogList from 'src/components/ui/home/blog-list'
import Info from 'src/components/ui/home/info'
import Flex from 'src/components/ui/layout/flex'

export default function Home() {
  return (
    <main>
      <Flex className="mt-5">
        <BlogList />
        <Info />
      </Flex>
    </main>
  )
}
