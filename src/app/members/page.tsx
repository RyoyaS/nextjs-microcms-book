import styles from "./page.module.css"
import { getMembersList } from "@/app/libs/microcms"
import { MEMBERS_LIST_LIMIT } from "@/app/_constants/index"
import Image from "next/image"

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT })
  return (
    <div className={styles.container}>
      {
        data.contents.length === 0 ? (
          <p className={styles.empty}>メンバーが登録されていません</p>
        ) : (
          data.contents.map((member) => {
            return (
              <li key={member.id} className={styles.list}>
                <Image
                  className={styles.image}
                  src={member.image.url}
                  alt=""
                  width={member.image.width}
                  height={member.image.height}
                />
                <dl>
                  <dt className={styles.name}>{member.name}</dt>
                  <dd className={styles.position}>{member.position}</dd>
                  <dd className={styles.profile}>{member.profile}</dd>
                </dl>
              </li>
            );
          })
        )
      }
    </div>
  )
}