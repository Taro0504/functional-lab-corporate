import React from "react";

const Location: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <p className="text-main text-[5vw] font-semibold text-center py-[5.5vw] my-[6.5vw] border-y border-sub">勤務地</p>
        <div>
          <div>
            <p className="font-semibold">本社または客先（現状100%フルリモート勤務）</p>
            <ul className="pt-[20px]">
              <li className="pb-[8px]">フルリモート案件ならばフルリモートワーク可、転勤はありません。</li>
            </ul>
            <p className="font-semibold pt-[20px] pb-[8px]">【本社】</p>
            <ul className="">
              <li className="pb-[8px]">〒170-0013</li>
              <li className="">東京都豊島区東池袋1-34-5 イチゴ東池袋ビル6階</li>
            </ul>
            <p className="pt-[20px] pb-[8px]">＜交通＞</p>
            <ul className="">
              <li className="pb-[8px]">JR線「池袋駅」徒歩5分</li>
              <li className="">東京メトロ丸の内線・有楽町線「池袋駅」徒歩6分</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;