/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import style from './header.module.scss'

export default function Header() {
  return (
    <header className={style.headerBar}>
      <div className={style.logo}>
        <img src="/next.svg" alt="logo" />
        <span>V-Blog</span>
      </div>
      <div className={style.links}>
        <div className={style.color}></div>
        <div className={style.search}></div>
        <nav>
          <ul>
            <Link href="/">
              <li>主页</li>
            </Link>
            <Link href="/">
              <li>Category</li>
            </Link>
            <Link href="/">
              <li>Tag</li>
            </Link>
            <Link href="/">
              <li>时间轴</li>
            </Link>
            <Link href="/">
              <li>关于我</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
