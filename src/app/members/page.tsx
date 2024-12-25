import styles from "./page.module.css"
import Image from "next/image"

export default function Page() {
  const data = {
    contents: [
      {
        id: "1",
        image: {
          url: "/img-member1.jpg",
          width: 240,
          height: 240
        },
        name: "デイヴィッド・チャン",
        position: "CEO",
        profile: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nam officia repudiandae totam accusamus adipisci architecto nemo error rerum, dolorum unde quis, laboriosam repellat. Adipisci magnam dolor corporis voluptates blanditiis?"
      },
      {
        id: "2",
        image: {
          url: "/img-member2.jpg",
          width: 240,
          height: 240
        },
        name: "エミリー・サンダース",
        position: "COO",
        profile: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nam officia repudiandae totam accusamus adipisci architecto nemo error rerum, dolorum unde quis, laboriosam repellat. Adipisci magnam dolor corporis voluptates blanditiis?"
      },
      {
        id: "3",
        image: {
          url: "/img-member3.jpg",
          width: 240,
          height: 240
        },
        name: "ジョン・ウィルソン",
        position: "CTO",
        profile: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nam officia repudiandae totam accusamus adipisci architecto nemo error rerum, dolorum unde quis, laboriosam repellat. Adipisci magnam dolor corporis voluptates blanditiis?"
      },
    ]
  };
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