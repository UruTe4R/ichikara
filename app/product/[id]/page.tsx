import styles from './page.module.css'
import type { Metadata } from 'next';
import Markdown from 'react-markdown';

import ProductImageSelection from '@/app/ui/ProductImageSelection';
import CustomButton from '@/app/components/buttons/CustomButton';

const description = `
### 【激震が走る！！オールインワン洗顔】
マッサージしながらクレンジング、洗顔、角質ケア、トリートメント、保湿までできるオールインワン洗顔です♫


ヒト幹細胞培養液、シリカ、コラーゲンなど美容液成分がたっぷり配合！
洗顔終わった後のもっちり感がたまりません(*^▽^*)


✴1本で完結！時短もできて経済的！
✴︎面倒な泡立て不要
✴︎洗顔後の突っ張り感なし！乾燥を感じない！
✴︎汚れを落としながら美容液導入


内容量：80g

2ヶ月以上持ちます！（個人差あり）

【使い方】
手が濡れている状態で、溶剤を1.5センチ程度出し、ぬるま湯と溶剤を、手の上で混ぜ合わせクリーム状にします。
じんわりと顔全体に溶剤を広げたら、洗い流すだけで完了です。


※カード決済をご希望の場合
カードの不正利用の方が相次いでおり、ご本人様確認に3日〜1週間かかる場合がございます。カード決済をされる場合は、コメント欄に「ロボットではありません」と入力いただけますと確認が出来ますので翌日発送させて頂きます。
当店の定休日と重なった場合は、翌営業日の発送になります。

※北海道、沖縄への発送で日時指定をされる方は、送料が500円プラスでかかります。お手数ですが、アイテム内の『送料』を選択してくださいませ。送料を選択していない場合は、日時指定してもご希望に沿えませんのでご了承くださいませ。

【配送について】
当日夕方６時までのご購入完了に関しまして配送日を月曜日・水曜日・金曜日とさせていただきます。
何卒宜しくお願い申し上げます。
`;


export const metadata: Metadata = {
  title: 'Product',
}
export default function ProductPage() {
  return (
    <>
      <main className={styles.productInfoSection}>

        <div className={styles.imageSection}>
          <ProductImageSelection />
        </div>

        <div className={styles.productDetail}>
          <h1>COCO JEWEL ：FACE WASH ココジュエル　フェイスウォッシュ</h1>

          <div className={styles.price}>1500円 <span className={styles.taxIncluded}>(税込)</span> </div>

          <div className={styles.buttons}>
            <CustomButton>カートに追加</CustomButton>
            <CustomButton style={styles.favoriteButton}>
              お気に入りに追加
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>

            </CustomButton>
          </div>

          <div className={styles.description}>
            <Markdown>{description}
            </Markdown>
          </div>
        </div>
      </main>
      <div>
          {Array.from({ length: 100 }).map((_, i) => (
            <p key={i}>Right content line {i + 1}</p>
          ))}
        </div>
    </>

  )
}