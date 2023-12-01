import Image from 'next/image'
import style from './home.module.scss'
import Flex from 'src/components/ui/layout/flex'
export default function Blog() {
  return (
    <Flex className={style.blog}>
      <div className={style.thumb}>
        <Image alt="" src="/image/blog.jpg" width={300} height={200} className="img" />
      </div>
      <Flex className={style.info} direction="column" justify="space-between">
        <div className={style.title}>vite 别名配置注意事项</div>
        <div className={style.desc}>vite 别名配置注意事项</div>
      </Flex>
    </Flex>
  )
}
