import React from 'react';
import Hero from '../components/Hero';
import LatestColletion from '../components/LatestColletion';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox'; // match the filename exactly

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestColletion />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
