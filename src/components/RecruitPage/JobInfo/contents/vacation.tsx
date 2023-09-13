import React from "react";

const Vacation: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <p className="text-main text-[5vw] font-semibold text-center py-[5.5vw] my-[6.5vw] border-y border-sub">休日休暇</p>
        <div>
          <ul>
            <li className="font-semibold pb-[8px]">■ 完全週休2日制</li>
            <li className="font-semibold pb-[8px]">■ 祝祭日・年末年始</li>
            <li className="font-semibold pb-[8px]">■ 有給休暇（入社日から有給10日付与）</li>
            <li className="font-semibold pb-[8px]">■ 産休・育休</li>
            <li className="font-semibold pb-[8px]">■ 年末年始・慶弔休暇</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vacation;