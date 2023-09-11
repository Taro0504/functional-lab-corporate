import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { FC } from 'react';

interface CompanyFlowBoxProps {
  step: number;
  title: string;
  text: string;
}

const CompanyFlowBox: FC<CompanyFlowBoxProps> = ({ step, title, text }: CompanyFlowBoxProps) => {
  return (
    <div className="pt-[12vw] mt-[-3vw]">
      <div className="relative text-main font-bold text-[5.5vw]">
        {`Step-${step}　　　${title}`}
        <p className="absolute top-0 left-0 w-[3.7vw] mt-[11vw] ml-[3vw]  spOnly">
          <StaticImage src="../../images/icon_step.svg" alt="" className='block overflow-clip w-full align-middle max-w-full'/>
        </p>
      </div>
      <p className="w-full text-[3.4vw] leading-paragraph pt-[7.4vw] pl-[11vw]">{text}</p>
    </div>
  );
};

export default CompanyFlowBox;