import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="flex items-center justify-between h-[12vw] p-6">
        <div className="w-[17vw] min-w-[150px]">
          <Link to="/">
            <img src="/logo_header.svg" alt="FunctionalLab" />
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-12 text-black font-bold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#mission">Our Mission</Link></li>
            <li><Link to="/#company">Company</Link></li>
            <li><Link to="/#recruit">Recruit</Link></li>
            <li>
              <Link to="/#contact" className="bg-orange-500 px-4 py-2 rounded">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden relative w-12 h-12 cursor-pointer">
          <span className="absolute left-4 transition-all duration-400 w-1/2 h-1 bg-[#5dc1cf] rounded-md"></span>
          <span className="absolute left-4 transition-all duration-400 w-1/2 h-1 bg-[#5dc1cf] rounded-md mt-3"></span>
          <span className="absolute left-4 transition-all duration-400 w-1/2 h-1 bg-[#5dc1cf] rounded-md mt-6"></span>
          <nav id="g-nav" className="hidden">
            <ul className="flex items-center space-x-12 text-black font-bold">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#mission">Our Mission</Link></li>
              <li><Link to="/#company">Company</Link></li>
              <li><Link to="/#recruit">Recruit</Link></li>
              <li>
                <Link to="/#contact" className="bg-orange-500 px-4 py-2 rounded">
                  <FontAwesomeIcon icon={faEnvelope} /> Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;