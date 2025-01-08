import FeatureDescription from "../parts/FeatureDescription"

import IconSvg from '../../images/icon.svg'
import LinkButton from "../parts/button/LinkButton"

export default function Home () {
  return (
    <div className="bg-gray-200 min-h-svh py-12 px-4">
      <div className="max-w-lg mx-auto flex flex-col gap-4 items-center py-12 bg-white rounded-3xl">
        <img src={IconSvg} className="w-32 h-32" />
        <h1 className="text-2xl font-bold">シフとり{'(仮)'}</h1>
        <p className="text-lg">シフトを簡単に作るサービス</p>
      </div>
      <div className="flex flex-col gap-4 py-8 max-w-lg mx-auto">
        <LinkButton size="large" disabled to="/require">シフト希望を求める</LinkButton>
        <LinkButton size="large" to="/request">シフト希望を出す</LinkButton>
        <LinkButton size="large" disabled to="/assignment">シフトを作る</LinkButton>
      </div>
      <div className="flex flex-col gap-4 py-8 max-w-lg mx-auto">
        <FeatureDescription
          title="シフト希望を求める"
          body={
            <>
              <p>シフト希望を出してもらうために希望の内容を決めます。</p>
              <p>作ったものはシフト要求としてできあがります。従業員はシフト要求を元にシフト希望を出すことができます。</p>
              <p>シフト要求がなくてもシフト希望を出すこともできます。</p>
            </>
          } />
        <FeatureDescription
          title="シフト希望を出す"
          body={
            <>
              <p>シフト要求に対してシフト希望を出すことができます。</p>
              <p>シフト希望を出すことでシフト作成者は従業員の希望を把握することができます。</p>
              <p>シフト希望は文章と画像で書き出すことができます。</p>
            </>
          } />
        <FeatureDescription
          title="シフトを作る"
          body={
            <>
              <p>シフト要求とシフト希望を合わせてシフトを割り当てることでシフトを作ります。</p>
              <p>作成したシフトはPDFや画像でダウンロードすることができます。</p>
            </>
          } />
      </div>
    </div>
  )
}
