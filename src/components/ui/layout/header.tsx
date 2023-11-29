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
        {/* <div className={style.color}>a|b</div> */}
        {/* <div className={style.search}>
          <input />
        </div> */}
        <nav className={style.nav}>
          <ul className={style.navList}>
            <Link href="/">
              <li className={style.navItem}>
                <div className={style.icon}>
                  <img />
                </div>
                <span>主页</span>
              </li>
            </Link>
            <Link href="/">
              <li className={style.navItem}>
                <span>Category</span>
              </li>
            </Link>
            <Link href="/">
              <li className={style.navItem}>
                <span>Tag</span>
              </li>
            </Link>
            <Link href="/">
              <li className={style.navItem}>
                <span>时间轴</span>
              </li>
            </Link>
            <Link href="/">
              <li className={style.navItem}>
                <span>关于我</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
