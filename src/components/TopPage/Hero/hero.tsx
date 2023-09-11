import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[#5dc1cf] lg:hidden" style={{ clipPath: 'polygon(0 0, 0 71%, 103% 0)' }}></div>
      <div className="hidden absolute inset-0 bg-[#5dc1cf] lg:block" style={{ clipPath: 'polygon(0 0, 0 85%, 90% 0)' }}></div>
      <div className="relative flex flex-col items-center justify-center h-full transform -translate-y-1/2 top-1/2">
        <StaticImage src="../../../images/Hero_bg_01.svg" alt="" className="w-full" />
        <div className="pb-[8.3076923077vw]">
          <h1 className="text-center text-[8.3333333333vw]">一歩先へリードする<br />技術を追求する</h1>
        </div>
      </div>
      <StaticImage src="../../images/Hero_bg_02.svg" alt="" className="hidden" />
      
    </div>
  );
};

export default Hero;