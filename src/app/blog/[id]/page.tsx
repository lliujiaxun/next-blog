import Flex from 'src/components/ui/layout/flex'
import style from './page.module.scss'
export default async function BlogDetail({ params }) {
  const { id } = params
  const detail = await getBlogDetailById(id)
  return (
    <main>
      <div className={style.page_title}>
        <h1 className={style.title}>{detail.title}</h1>
        <Flex className={style.desc}>
          <div className="mr-10">{detail.author}</div>
          <div className="mr-10">{detail.date}</div>
          <div className="mr-10">{detail.date}</div>
          <div className={style.tags}>{detail.tags?.split(',').map(tag => <span key={tag}></span>)}</div>
        </Flex>
      </div>
      <div className={style.content}>blog detail</div>
    </main>
  )
}

const getBlogDetailById = async id => {
  try {
    const promise = await fetch(`http://localhost:3000/api/blog/${id}`)
    const data = await promise.json()
    console.log(data, "hhh")
    return data
  } catch (error) {
    return {}
  }
}
