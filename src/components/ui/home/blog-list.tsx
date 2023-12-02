import Blog from './blog'
import style from './home.module.scss'

export default function BlogList({ list }: { list: any[] }) {
  return <div className={style.blog_list}>{list?.map?.(item => <Blog key={item.id} data={item} />)}</div>
}
