import React from "react";

const Salary: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <p className="text-main text-[5vw] font-semibold text-center py-[5.5vw] my-[6.5vw] border-y border-sub">給与</p>
        <div>
          <div>
            <p className="font-semibold">月給制</p>
            <ul className="pt-[20px] pb-[8px]">
              <li>
                <p className="font-semibold pb-[8px]">■ 還元率のベース70%、最大85%</p>
                <ul>
                  <li className="pb-[8px]">※月給+会社負担分の社会保険料=売上の70%～85%</li>
                  <li>※みなし残業30時間を含む。超過分は支給。</li>
                </ul>
              </li>
              <li>
                <p className="pt-[20px]">業務外の行動を申告することで還元率アップ。条件は以下の通り。</p>
              </li>
              <li className="pt-[20px]">
                <p className="font-semibold pb-[8px]">■ 1ヶ月単位で集計し月給へ反映(最大15%まで集計)</p>
                <ul>
                  <li className="pb-[8px]">書籍などで学習、6時間毎に1%、最大30時間で5%アップ</li>
                  <li className="pb-[8px]">技術記事の投稿、2000文字あたり1%、最大10%アップ</li>
                  <li className="pb-[8px]">技術動画の投稿、5分あたり1%、最大10%アップ</li>
                  <li className="pb-[8px]">OSS活動(コントリビュート、OSS公開)5%アップ</li>
                  <li className="pb-[8px]">勉強会開催(社内5%アップ、社外15%アップ)</li>
                  <li className="pb-[8px]">社外勉強会への登壇15%アップ(LTの場合10%アップ)</li>
                  <li className="pb-[8px]">社外勉強会へスタッフとして参加 5%アップ</li>
                  <li className="pb-[8px]">技術書籍の執筆(執筆中は継続) 15%アップ</li>
                  <li className="pb-[8px]">技術同人誌の執筆(執筆中は継続) 10%アップ</li>
                  <li className="pb-[8px]">社外エンジニアへのメンター、6時間毎に1%、最大30時間で5%アップ</li>
                  <li className="pb-[8px]">エンジニアコミュニティの運営10%アップ</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;