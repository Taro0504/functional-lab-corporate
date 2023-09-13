import React from 'react';

const SalaryTable: React.FC = () => {
  // 年収例のデータ
  const salaryData = [
    { unitPrice: '60万円', salary70: '434万円', salary75: '465万円', salary80: '496万円', salary85: '527万円' },
    { unitPrice: '65万円', salary70: '470万円', salary75: '504万円', salary80: '537万円', salary85: '571万円' },
    { unitPrice: '70万円', salary70: '506万円', salary75: '543万円', salary80: '579万円', salary85: '615万円' },
    { unitPrice: '75万円', salary70: '543万円', salary75: '581万円', salary80: '620万円', salary85: '659万円' },
    { unitPrice: '80万円', salary70: '579万円', salary75: '620万円', salary80: '662万円', salary85: '703万円' },
    { unitPrice: '85万円', salary70: '615万円', salary75: '659万円', salary80: '703万円', salary85: '747万円' },
    { unitPrice: '90万円', salary70: '651万円', salary75: '698万円', salary80: '744万円', salary85: '791万円' },
    { unitPrice: '95万円', salary70: '687万円', salary75: '737万円', salary80: '786万円', salary85: '835万円' },
    { unitPrice: '100万円', salary70: '724万円', salary75: '775万円', salary80: '827万円', salary85: '879万円' },
    // 以下、同様のデータを追加
  ];


  return (
    <div className="relative flex flex-col flex-nowrap pb-[9.25vw] mt-[12vw] bg-base">
      <h3 
        className="relative text-main font-semibold text-[6.1vw] pb-[2.8vw] mt-[7.4vw] ml-[17.6vw] mb-4
          before:contents-['']"
        >
          年収例
      </h3>
      <div className="overflow-x-scroll">
        <table className="w-[740px] mx-[10%] border-collapse">
          <tbody className="">
            <tr>
              <td className="text-center text-[14px] font-semibold text-base bg-gradient-to-b from-lightnavy to-darknavy p-[10px] ml-[-1px]">単価</td>
              <td className="text-center text-[14px] font-semibold text-base bg-gradient-to-b from-lightnavy to-darknavy p-[10px] ml-[-1px]">70%年収</td>
              <td className="text-center text-[14px] font-semibold text-base bg-gradient-to-b from-lightnavy to-darknavy p-[10px] ml-[-1px]">75%年収</td>
              <td className="text-center text-[14px] font-semibold text-base bg-gradient-to-b from-lightnavy to-darknavy p-[10px] ml-[-1px]">80%年収</td>
              <td className="text-center text-[14px] font-semibold text-base bg-gradient-to-b from-lightnavy to-darknavy p-[10px] ml-[-1px]">85%年収</td>
            </tr>
            {salaryData.map((row, index) => (
              <tr key={index}>
                <td className="text-[13.5px] text-center border-b border-border py-[22px]">{row.unitPrice}</td>
                <td className="text-[13.5px] text-center border-b border-border py-[22px]">{row.salary70}</td>
                <td className="text-[13.5px] text-center border-b border-border py-[22px]">{row.salary75}</td>
                <td className="text-[13.5px] text-center border-b border-border py-[22px]">{row.salary80}</td>
                <td className="text-[13.5px] text-center border-b border-border py-[22px]">{row.salary85}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryTable;



