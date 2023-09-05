import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex-row justify-between items-center pb-14">
          <div className="mb-4 md:mb-0 mx-auto w-[19.4444444444vw] pt-[9.2592592593vw]">
            <StaticImage src="../../images/footer_logo.svg" alt="FunctionalLab" className=""/>
          </div>
          <div className="mb-4 md:mb-0 text-center">
            <p>〒170-0013<br />東京都豊島区東池袋1丁目34番5号<br />いちご東池袋ビル6階</p>
          </div>
          <ul className="flex md:flex-col mt-10 font-semibold justify-between items-center">
            <li><Link to="#mission">Our Mission</Link></li>
            <li><Link to="#company">Company</Link></li>
            <li><Link to="#recruit">Recruit</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
        <div className="mt-4 bg-[#5dc1cf] text-white">
          <p>© 2022 Functional Lab inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;