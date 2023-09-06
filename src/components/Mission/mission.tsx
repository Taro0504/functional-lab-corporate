import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


const Mission = () => {
  return (
    <section id="mission" className="relative">
      <div className="relative w-[90.74vw] h-[138.88vw] bg-[url('/bg_01_sp.png')] lg:bg-[url('/bg_01.png')] bg-no-repeat bg-cover bg-top lg:w-[836px] lg:h-[1028px]">
        <h2 className="text-white text-[14.5vw] font-extrabold mx-auto lg:text-[130px] lg:text-end lg:mr-4">
          Our <br className="lg:hidden" />
          Mission
        </h2>
        <p className="flex text-white text-paragraph leading-paragraph w-4/5 justify-end mx-auto lg:text-paragraphlg lg:leading-paragraphlg">
          FunctionalLabはエンジニアを第一に考えるSES企業です。
          <br className="hidden lg:block" />
          IT業界で働くエンジニアの待遇と地位の向上に貢献する、それが私たちのミッションです。
        </p>
      </div>
      <div className="absolute top-0 right-0 w-[83.3vw] mt-[80vw] mr-[-3.5vw] lg:w-[809px] lg:mt-[399px] lg:mr-[107px]">
        <StaticImage src="../../images/Mission_bg.svg" alt="" />
      </div>
    </section>
  );
};

export default Mission;