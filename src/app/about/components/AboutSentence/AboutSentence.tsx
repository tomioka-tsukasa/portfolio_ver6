import * as styles from './AboutSentence.css'

export const AboutSentence = () => {
  return <>
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            はじめまして！フロントエンドエンジニアの冨岡司です。
          </p>
          <p className={styles.text}>
            ユーザーに驚きや感動を届けるWeb体験を作ることが好きで、日々レベルアップしながら励んでいます。
          </p>
          <p className={styles.text}>
            特にクリエイティブな表現に興味があって、WebGLやShaderを使った視覚的に美しいWebサイトの制作が大好きです。Three.jsで3D空間を構築したり、カスタムシェーダーで独特な表現を追求したり、Blenderで3Dモデルを作ってWebに組み込んだりと、技術とアートで遊ぶのが楽しかったりします。
          </p>
          <p className={styles.text}>
            モノづくりはけっこう昔から大好きで、子供の頃からリトルビックプラネットなど創作系のゲームをよく遊んで、友達に制作したワールドを共有したりもしていました。今でもその情熱は変わらず、新しい技術や表現手法を見つけると「これでどんな面白いことができるだろう？」とワクワクして、気がつくと夜遅くまで実験していることも。技術の向上やクリエイティブな挑戦は、僕にとって趣味と仕事の境界がないくらい純粋に楽しいものです。
          </p>
          <p className={styles.text}>
            それから、仕事中は集中しすぎて口数が少なくなってしまうことがありますが、チームメンバーとのコミュニケーションは大切にしていて、実は人と話すのがとても好きな性格。
          </p>
          <p className={styles.text}>
            これからもフロントエンドエンジニアとして技術を磨きながら、よりクリエイティブで人の心を動かすWeb体験を生み出していきたいと思っています。
          </p>
        </div>
      </div>
    </div>
  </>
}
