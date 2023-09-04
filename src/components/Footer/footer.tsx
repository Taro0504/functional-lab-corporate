import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo_footer.svg" alt="FunctionalLab" />
          </div>
          <div className="mb-4 md:mb-0">
            <p>〒170-0013<br />東京都豊島区東池袋1丁目34番5号<br />いちご東池袋ビル6階</p>
          </div>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link to="#mission">Our Mission</Link></li>
            <li><Link to="#company">Company</Link></li>
            <li><Link to="#recruit">Recruit</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
        <div className="mt-4 text-center">
          <p>© 2022 Functional Lab inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;