import ButtonLink from '@/app/components/ButtonLink'
import NewsList from '@/app/components/NewsList'
import type { News } from '@/app/libs/microcms'
import styles from '@/app/page.module.css'
import Image from 'next/image'

const data: { contents: News[] } = {
  contents: [
    {
      id: '1',
      title: '渋谷にオフィスを移転しました',
      category: { name: '更新情報' },
      publishedAt: '2023-01-01',
      createdAt: '2023-01-01',
    },
    {
      id: '2',
      title: 'サービスをリニューアルしました',
      category: { name: '更新情報' },
      publishedAt: '2023-01-01',
      createdAt: '2023-01-01',
    },
    {
      id: '3',
      title: 'テストの記事です',
      category: { name: '更新情報' },
      publishedAt: '2023-01-01',
      createdAt: '2023-01-01',
    },
  ],
}

const sliceData = data.contents.slice(0, 2)
export default function Home() {
  return (
    <div>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </div>
  )
}
