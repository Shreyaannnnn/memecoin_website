import React from 'react';
import "../app/globals.css"
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
const AboutPage = () => {
  return (
    <div className={` ${pressStart2P.className} min-h-screen bg-[#007A39] relative flex items-center justify-center`}>
      <div className="max-w-[60%] px-4">
        <p className=" text-center text-[12px] sm:text-[18px] md:text-[15px] lg:text-[25px]  text-black">
          Before Pepe was widely recognized, Smug Frog was the true OG on 4chan. 
          People used the smug, self-satisfied frog to express superiority and mock others 
          without knowing it was actually a version of Pepe. To many, Smug Frog was the original, 
          defining meme before Pepe&apos;s full identity and origins became known.
        </p>
      </div>
      <img
        src="/pepe.png"
        alt="pepe"
        className="absolute w-[35vw] md:w-[25vw] lg:w-[25vw] bottom-0 -left-[5vw]"
      />
    </div>
  );
};

export default AboutPage;
