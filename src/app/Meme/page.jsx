import React from 'react';
import { Press_Start_2P } from 'next/font/google';
import { motion } from 'framer-motion';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
const MemePage = () => {
  return (
    <div className={` ${pressStart2P.className} min-h-screen bg-[#000000] relative flex justify-center`}>


      <div className="flex text-[#FFFFFF] mx-[5vw] mt-[10wh] text-xl md:text-2xl lg:text-2xl text-left p-2 md:p-6">
        {/* <motion.div
          className="text-[#FFFFFF] mx-[5vw] w-[80%] text-xl md:text-2xl lg:text-2xl text-left p-2 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div> */}
          <p className="mb-[2vw]">Mirror</p>
      </div>

      
    </div>
  );
};

export default MemePage;
