import Blog from './blog'
import style from './home.module.scss'

export default function BlogList() {
  return (
    <div className={style.blog_list}>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  )
}
