'use client';
import React from 'react';
import { motion } from 'framer-motion';

function TryAgainModal() {
  return (
    <div className="relative">
      <motion.div
        className="bg-[#F0F0F0] w-[30vw] absolute border-4 border-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-[#6BA9D6] p-2 border-b-4 border-black">
          <p className="text-black font-semibold">&nbsp;</p> {/* Empty space for the header title */}
          <button className="text-black border-4 border-black px-2 py-1 font-bold">X</button>
        </div>

        {/* Modal Body */}
        <div className="flex  items-center justify-center p-[3vw]">
          {/* Error Icon */}
          <img src="/cross.png" alt="Error" className="w-[8vw] h-[8vw] " />
          <p className="text-[1.5vw] font-bold text-black">Try Again</p>
        </div>
      </motion.div>
    </div>
  );
}

export default TryAgainModal;
