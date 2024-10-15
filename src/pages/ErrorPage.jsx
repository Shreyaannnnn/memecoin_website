'use client';
import React from 'react';
import { motion } from 'framer-motion';
import "../app/globals.css"
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
function BlueScreenError() {
  return (
    <div className={` ${pressStart2P.className} min-h-screen bg-[#0000AA] flex flex-col items-center justify-center`}>
<motion.p
      className="text-center text-2xl text-[#0000AA] bg-gray-300 p-2 shadow-sm shadow-gray-200"
      initial={{ opacity: 1 }}
      animate={{
        opacity: [1, 0.5, 1], // Flickering effect by changing opacity
      }}
      transition={{
        duration: 0.5, // Duration of one flicker
        repeat: Infinity, // Repeat indefinitely
        repeatType: "loop", // Set to loop
        ease: "easeInOut", // Ease for a smoother effect
      }}
    >
      Windows
    </motion.p>    <div className=" flex  items-center ">
      <motion.div
        className="text-[#FFFFFF] mx-[5vw] w-[80%] text-2xl text-left p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-[2vw]">An error has occurred. To continue:</p>
        <p className="mb-[2vw]">Press Enter to return to Windows, or</p>
        <p className="mb-[2vw]">
          Press CTRL+ALT+DEL to restart your computer. If you do this, you will
          lose any unsaved information in all open applications.
        </p>
        <p className="mb-[2vw]">Error: 0E : 016F : BFF9B3D4</p>
      </motion.div>
    </div>
    <p className="text-center text-2xl text-white">
  <motion.span
    initial={{ opacity: 1 }}
    animate={{
      opacity: [1, 0.5, 1], // Flickering effect by changing opacity
    }}
    transition={{
      duration: 0.5, // Duration of one flicker
      repeat: Infinity, // Repeat indefinitely
      ease: "easeInOut", // Smooth transition
    }}
  >
    Press any key to continue _
  </motion.span>
</p>
    </div>
  );
}

export default BlueScreenError;
