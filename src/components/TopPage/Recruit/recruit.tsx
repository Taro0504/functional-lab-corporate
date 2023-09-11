import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Recruit: FC = () => {
  return (
    <section 
      id="recruit" 
      className="relative bg-white max-w-[1300px] mx-auto p-section
        before:content-[''] before:bg-gray before:absolute before:right-0 before:bottom-0 before:w-[74vw] before:h-[46vw] before:z-[1] before:mb-[-5.5vw]"
    >
      <div className="absolute right-0 bottom-0 z-[3] w-[55.5vw] mr-[3.7vw] mb-[15vw]">
        <StaticImage src="../../../images/ill_05.svg" alt="" />
      </div>
      <div className="relative z-[2] pt-[8.3vw] px-[8%] pb-[25vw] mr-[9.25vw] bg-main max-w-[1300px] mx-auto">
        <h2 className="text-left text-[14.8vw] font-bold text-white">Recruit</h2>
        <div className="p-recruit__box">
          <p className="text-[5.5vw] text-white p-recruit__ttl">共に働き、共に学ぶ。</p>
          <p className="text-paragraph leading-paragraph text-white mt-[4.62vw] p-section__txt p-recruit__txt">
            当社では、共にIT業界の現在そして未来を創造する仲間を募集しています。
          </p>
        </div>
      </div>
      <div className="relative z-[3] w-full px-[8%] my-[27.7vw] font-bold">
        <Link to="/recruit/" className="block w-full bg-main py-[5%] text-[2.77vw] text-center text-white rounded-md">View More</Link>
      </div>
    </section>
  );
};

export default Recruit;