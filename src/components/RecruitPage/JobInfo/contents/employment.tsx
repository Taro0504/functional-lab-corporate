import React from "react";

const Employment: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <p className="text-main text-[5vw] font-semibold text-center py-[5.5vw] my-[6.5vw] border-y border-sub">雇用形態</p>
        <div>
          <div>
            <p className="font-semibold pb-[8px]">正社員</p>
            <p className="">※3ヶ月の試用期間あり、試用期間中の待遇に変更はありません</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;