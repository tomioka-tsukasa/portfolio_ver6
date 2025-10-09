import { ScrollTriggeredText } from '../ScrollTriggeredText/ScrollTriggeredText'
import * as styles from './AboutSentence.css'
import * as commonStyles from '@/styles/utils.css'

export const AboutSentence = () => {
  return <>
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <ScrollTriggeredText
          text={'はじめまして！\nフロントエンドエンジニアの冨岡司です。'}
          className={styles.text}
          tag='p'
          delay={0}
          duration={0.1}
          triggerStart='top 80%'
        />
        <div className={styles.paragraphSpacing}>
          <ScrollTriggeredText
            text={'ユーザーに驚きや感動を届ける\nWebサイトの制作が大好きです。\n日々レベルアップしながら励んでいます。'}
            className={styles.text}
            tag='p'
            delay={0}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={styles.paragraphSpacing}>
          <ScrollTriggeredText
            text={'特にクリエイティブな表現に興味があって、\nWebGLやShaderを使った\n視覚的に美しいWebサイトの制作が大好きです。'}
            className={styles.text}
            tag='p'
            delay={0}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={`${styles.paragraphSpacing} ${commonStyles.pcOnly}`}>
          <ScrollTriggeredText
            text={'Three.jsで3D空間を構築したり、\nカスタムシェーダーで独特な表現を追求したり、'}
            className={styles.text}
            tag='p'
            delay={0}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text={'Blenderで3Dモデルを作って'}
            className={styles.text}
            tag='p'
            delay={0.2}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text={'Webに組み込んだりと、'}
            className={styles.text}
            tag='p'
            delay={0.3}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text={'技術とアートで遊ぶのが'}
            className={styles.text}
            tag='p'
            delay={0.4}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text={'楽しかったりします。'}
            className={styles.text}
            tag='p'
            delay={0.5}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={`${styles.paragraphSpacing} ${commonStyles.spOnly}`}>
          <ScrollTriggeredText
            text={'Three.jsで3D空間を構築したり、\nカスタムシェーダーで独特な表現を追求したり、\nBlenderで3Dモデルを作って\nWebに組み込んだりと、\n技術とアートで遊ぶのが\n楽しかったりします。'}
            className={styles.text}
            tag='p'
            delay={0}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={styles.paragraphSpacing}>
          <ScrollTriggeredText
            text='モノづくりはけっこう昔から大好きで、'
            className={styles.text}
            tag='p'
            delay={0.1}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='子供の頃からリトルビックプラネットなど'
            className={styles.text}
            tag='p'
            delay={0.2}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='創作系のゲームをよく遊んで、'
            className={styles.text}
            tag='p'
            delay={0.3}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='友達に制作したワールドを'
            className={styles.text}
            tag='p'
            delay={0.4}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='共有したりもしていました。'
            className={styles.text}
            tag='p'
            delay={0.5}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={styles.paragraphSpacing}>
          <ScrollTriggeredText
            text='今でもその情熱は変わらず、'
            className={styles.text}
            tag='p'
            delay={0.1}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='新しい技術や表現手法を見つけると'
            className={styles.text}
            tag='p'
            delay={0.2}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='「これでどんな面白いことができるだろう？」と'
            className={styles.text}
            tag='p'
            delay={0.3}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='ワクワクして、気がつくと'
            className={styles.text}
            tag='p'
            delay={0.4}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='夜遅くまで実験していることも。'
            className={styles.text}
            tag='p'
            delay={0.5}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={styles.paragraphSpacing}>
          <ScrollTriggeredText
            text='技術の向上やクリエイティブな挑戦は、'
            className={styles.text}
            tag='p'
            delay={0.1}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='僕にとって趣味と仕事の境界がないくらい'
            className={styles.text}
            tag='p'
            delay={0.2}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='純粋に楽しいものです。'
            className={styles.text}
            tag='p'
            delay={0.3}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={styles.paragraphSpacing}>
          <ScrollTriggeredText
            text='それから、仕事中は集中しすぎて'
            className={styles.text}
            tag='p'
            delay={0.1}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='口数が少なくなってしまうことがありますが、'
            className={styles.text}
            tag='p'
            delay={0.2}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='チームメンバーとのコミュニケーションは'
            className={styles.text}
            tag='p'
            delay={0.3}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='大切にしていて、'
            className={styles.text}
            tag='p'
            delay={0.4}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='実は人と話すのがとても好きな性格。'
            className={styles.text}
            tag='p'
            delay={0.5}
            duration={0.1}
            triggerStart='top 80%'
          />
        </div>
        <div className={styles.paragraphSpacing}>
          <ScrollTriggeredText
            text='これからも'
            className={styles.text}
            tag='p'
            delay={0.1}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='フロントエンドエンジニアとして'
            className={styles.text}
            tag='p'
            delay={0.2}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='技術を磨きながら、'
            className={styles.text}
            tag='p'
            delay={0.3}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='よりクリエイティブで人の心を動かす'
            className={styles.text}
            tag='p'
            delay={0.4}
            duration={0.1}
            triggerStart='top 80%'
          />
          <ScrollTriggeredText
            text='Web体験を生み出していきたい'
            className={styles.text}
            tag='p'
            delay={0.5}
            duration={0.1}
            triggerStart='top 90%'
          />
          <ScrollTriggeredText
            text='と思っています。'
            className={styles.text}
            tag='p'
            delay={0.6}
            duration={0.1}
            triggerStart='top 100%'
          />
        </div>
      </div>
    </div>
  </>
}
