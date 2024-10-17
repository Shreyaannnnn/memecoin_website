import React from 'react';
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
const MemePage = () => {
  return (
    <div className={` ${pressStart2P.className} min-h-screen bg-[#000000] relative flex items-center justify-center`}>
      
    </div>
  );
};

export default AboutPage;
