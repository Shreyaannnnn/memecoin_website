'use client';
import React from 'react';
import { motion } from 'framer-motion';

function NotFoundModal() {
  return (
    <div className="relative">
      <motion.div
        className="bg-[#F0F0F0] absolute w-[30vw] border-4 border-black "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-[#6BA9D6] p-[0.5vw] border-b-4 border-black">
          <p className="text-black font-semibold">&nbsp;</p> {/* Empty space for the header title */}
          <button className="text-black px-[0.5vw] py-[0.25vw] border-4 border-black font-bold">X</button>
        </div>

        {/* Modal Body */}
        <div className="flex  items-center space-x-5 justify-center p-[3vw]">
          {/* Error Icon */}
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <div className="flex flex-col items-center justify-center" >
            <p className="text-4xl font-bold text-black">404</p>
            <p className="text-lg font-bold text-black">Not Found!</p>
          </div>
          
        </div>
      </motion.div>


      <motion.div
        className="bg-[#F0F0F0] absolute top-4 left-4 w-[30vw] border-4 border-black "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-[#6BA9D6] p-2 border-b-4 border-black">
          <p className="text-black font-semibold">&nbsp;</p> {/* Empty space for the header title */}
          <button className="text-black px-[0.5vw] py-[0.25vw] border-4 border-black font-bold">X</button>
        </div>

        {/* Modal Body */}
        <div className="flex  items-center space-x-5 justify-center p-[3vw]">
          {/* Error Icon */}
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <div className="flex flex-col items-center justify-center" >
            <p className="text-4xl font-bold text-black">404</p>
            <p className="text-lg font-bold text-black">Not Found!</p>
          </div>
          
        </div>
      </motion.div>

      <motion.div
        className="bg-[#F0F0F0] absolute top-8 left-8 w-[30vw] border-4 border-black "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-[#6BA9D6] p-2 border-b-4 border-black">
          <p className="text-black font-semibold">&nbsp;</p> {/* Empty space for the header title */}
          <button className="text-black px-[0.5vw] py-[0.25vw] border-4 border-black font-bold">X</button>
        </div>

        {/* Modal Body */}
        <div className="flex  items-center space-x-5 justify-center p-[3vw]">
          {/* Error Icon */}
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <div className="flex flex-col items-center justify-center" >
            <p className="text-4xl font-bold text-black">404</p>
            <p className="text-lg font-bold text-black">Not Found!</p>
          </div>
          
        </div>
      </motion.div>
      
    </div>
  );
}

export default NotFoundModal;
