import Category from '@/app/components/Category'
import Date from '@/app/components/Date'
import type { News } from '@/app/libs/microcms'
import Image from 'next/image'
import styles from './index.module.css'
import Link from 'next/link'

type Props = {
  news: News[]
}

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事はありません</p>
  }

  return (
    <ul>
      {news.map((article) => {
        return (
          <li key={article.id} className={styles.list}>
            <Link href={`/news/${article.id}`} className={styles.link}>
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No image"
                width={1200}
                height={630}
              />
              <dl className={styles.content}>
                <dt className={styles.title}>{article.title}</dt>
                <dd className={styles.meta}>
                  <Category category={article.category} />
                  <Date date={article.publishedAt ?? article.createdAt} />
                </dd>
              </dl>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
