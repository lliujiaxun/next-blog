import Flex from 'src/components/ui/layout/flex'
import style from './page.module.scss'
import MarkdownView from 'src/components/markdown'
import { API_HOST } from 'src/constant'

export default async function BlogDetail({ params }: any) {
  const { id } = params
  const detail = await getBlogDetailById(id)
  return (
    <>
      <div className={style.page_title}>
        <h1 className={style.title}>{detail.title}</h1>
        <Flex className={style.desc}>
          <div className="mr-10">{detail.author}</div>
          <div className="mr-10">{detail.view}</div>
          <div className="mr-10">{detail.date}</div>
          <div className={style.tags}>{detail.tags?.split(',').map((tag: any) => <span key={tag}></span>)}</div>
        </Flex>
      </div>
      <div className={style.content}>
        <MarkdownView>{detail.content}</MarkdownView>
      </div>
    </>
  )
}

const getBlogDetailById = async (id: any) => {
  try {
    const promise = await fetch(`${API_HOST}/api/blog/${id}`, { next: { revalidate: 0 } })
    const data = await promise.json()
    return data
  } catch (error) {
    return {}
  }
}
