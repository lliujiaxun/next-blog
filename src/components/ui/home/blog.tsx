import Image from 'next/image'
import style from './home.module.scss'
import Flex from 'src/components/ui/layout/flex'
import Link from 'next/link'
export default function Blog({ data }: { data: any }) {
  const tags = data.tags?.split(',') || []
  return (
    <Link href={`/blog/${data.id}`}>
      <Flex className={style.blog}>
        <div className={style.thumb}>
          <Image alt="" src="/image/blog.jpg" width={300} height={200} className="img" />
        </div>
        <Flex className={style.info} direction="column" justify="space-between">
          <div>
            <div className={style.title}>{data.title}</div>
            <div className={style.tags}>
              {tags.map(tag => (
                <span key={tag} className={style.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={style.desc}>
            <Flex justify="space-between">
              <div>
                <div className={style.user}>{data.author}</div>
              </div>
              <div className={style.date}>{data.date}</div>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </Link>
  )
}
