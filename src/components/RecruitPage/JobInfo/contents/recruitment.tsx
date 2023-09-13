import React from "react";

const Recruitment: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <p className="text-main text-[5vw] font-semibold text-center py-[5.5vw] my-[6.5vw] border-y border-sub">
          募集する
          <br className="hidden"/>
          エンジニア
        </p>
        <div>
          <div>
            <p className="font-semibold pb-[8px]">実務経験が2年目以上であるエンジニアを募集しています。</p>
            <p className="pt-[20px]">
              ※実務未経験〜実務経験1年目の方も応募可能です。
              <br />
              その場合、経歴によってベースの還元率は以下の通りになります。
            </p>
            <p className="pb-[8px] pt-[20px]">プロジェクト例としては以下のようになります。</p>
            <ul className="">
              <li className="pb-[8px]">実務経験1年目：還元率60%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
