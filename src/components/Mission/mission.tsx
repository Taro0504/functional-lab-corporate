import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


const Mission = () => {
  return (
    <section id="mission" className="relative p-8">
      <div className="relative w-9/12 h-[70rem] bg-[#5dc1cf] bg-no-repeat bg-top-center">
        <h2 className="text-white text-9xl leading-none">Our <br className="sm:hidden" />Mission</h2>
        <p className="text-white text-2xl mt-4 flex justify-end">
          FunctionalLabはエンジニアを第一に考えるSES企業です。
          <br className="lg:hidden" />
          IT業界で働くエンジニアの待遇と地位の向上に貢献する、それが私たちのミッションです。
        </p>
      </div>
      <div className="absolute top-0 right-0 w-4/5 mt-80 mr-[-0.5rem]">
        <StaticImage src="../../images/Mission_bg.svg" alt="" />
      </div>
    </section>
  );
};

export default Mission;