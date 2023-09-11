import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="pb-[12vw] mt-[4.6vw] bg-gray">
        <p className="md:mb-0 mx-auto w-[19.4vw] pt-[9.25vw]">
          <StaticImage src="../../../images/footer_logo.svg" alt="FunctionalLab" className="w-full max-w-full align-middle"/>
        </p>
        <address className="px-[8%] text-center mt-[4.62vw] text-paragraph leading-[6.4vw] not-italic">
          〒170-0013
          <br />
          東京都豊島区東池袋1丁目34番5号
          <br />
          いちご東池袋ビル6階
        </address>
          <ul className="flex md:flex-col mt-[5.5vw] text-[2.77vw] font-semibold justify-between items-center px-[8%]">
            <li><Link to="#mission">Our Mission</Link></li>
            <li><Link to="#company">Company</Link></li>
            <li><Link to="#recruit">Recruit</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
      </div>
      <div className="py-[2%] bg-[#5dc1cf]">
          <p className="px-[8%] text-[2.3vw] text-white">© 2022 Functional Lab inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;