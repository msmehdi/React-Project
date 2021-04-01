import React from 'react';
import HeroSection from '../../HeroSection';
import { section1, section2, section3 } from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>
      <HeroSection {...section1} />
      <HeroSection {...section3} />
      <HeroSection {...section2} />
      <Pricing />
    </>
  );
}

export default Home;
