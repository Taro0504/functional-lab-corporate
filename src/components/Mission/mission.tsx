import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


const Mission = () => {
  return (
    <section id="mission" className="p-8 relative">
      <div className="relative w-9/12 h-[900px] bg-[url('/bg_01_sp.png')] bg-no-repeat bg-top-center">
        <h2 className="text-white text-5xl md:text-8xl lg:text-[130px] text-center md:text-left">
          Our <br className="md:hidden" />Mission
        </h2>
        <p className="text-white text-xl md:text-2xl lg:text-base mt-4 md:mt-8 lg:mt-14">
          FunctionalLabはエンジニアを第一に考えるSES企業です。
          <br className="hidden md:block" />
          IT業界で働くエンジニアの待遇と地位の向上に貢献する、それが私たちのミッションです。
        </p>
      </div>
      <div className="absolute top-0 right-0 w-4/5 md:w-3/4 lg:w-[809px] mt-[650px] md:mt-[399px] lg:mt-[399px] mr-[-1rem] lg:mr-[107px]">
        <StaticImage src="../../images/Mission_bg.svg" alt="" />
      </div>
    </section>
  );
};

export default Mission;