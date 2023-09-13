import React from "react";

const Welfare: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <p className="text-main text-[5vw] font-semibold text-center py-[5.5vw] my-[6.5vw] border-y border-sub">福利厚生</p>
        <div>
          <ul>
            <li className="font-semibold pb-[8px]">■ 交通費支給（月最大2万円まで）</li>
            <li className="font-semibold pb-[8px]">■ 時間外手当（みなし残業30時間）</li>
            <li className="font-semibold pb-[8px]">■ 健康診断</li>
            <li className="font-semibold pb-[8px]">■ 社会保険完備</li>
            <li className="font-semibold pb-[8px]">■ 書籍購入費補助（月最大1万円まで）</li>
            <li className="font-semibold pb-[8px]">■ AWSなどのサービス検証費補助（月最大1万円まで）</li>
            <li className="font-semibold pb-[8px]">■ 資格合格時受験料補助</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welfare;