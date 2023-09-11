import React, { FC, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface WelfareBoxProps {
  imgSrc: string;
  title: string;
  details: string[];
}

const WelfareBox: FC<WelfareBoxProps> = ({ imgSrc, title, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const varImgSrc = imgSrc;


  return (
    <div className="flex flex-wrap items-center justify-between px-[10%] py-[8%] border border-main bg-white min-h-[300px]">
      <div className="w-[45%] ">
        <figure className="w-[23vw]">
          <StaticImage 
            src="../../../images/icon_wel01.svg"
            alt="" 
            layout="fullWidth"
            className="block align-middle overflow-clip"
          />
        </figure>
      </div>
      <div className="w-[45%]">
        <p className="text-main font-bold text-[3.7vw] mr-[5.5vw]">{title}</p>
      </div>
      <div className="w-[10%] spOnly">
        <div 
          className="w-[8.3vw] h-[8.3vw] bg-main rounded-full cursor-pointer btn-maney"
          onClick={() => setShowDetails(!showDetails)}>
          <p 
            className="
              relative block w-[2.7vw] h-[2.7vw]
              before:absolute before:bg-white before:w-[4px] before:content-[''] before:top-[2.2vw] before:left-[3.7vw] before:h-[3.7vw]
              after:absolute after:bg-white after:w-[3.7vw] after:content-[''] after:top-[3.7vw] after:left-[2.2vw] after:h-[4px]
          ">

          </p>
        </div>
      </div>
      {showDetails && (
        <div className="w-full text-center border-t border-main mt-[55px] pt-[25px] detail-maney">
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WelfareBox;
