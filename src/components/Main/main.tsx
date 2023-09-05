import React from 'react';
import Hero from '../Hero/hero';
import Mission from '../Mission/mission';
import Recruit from '../Recruit/recruit';
import Contact from '../Contact/contact';
import Company from '../Company/company';


const Main = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Company />
      <Recruit />
      <Contact />
    </div>
  );
};

export default Main;