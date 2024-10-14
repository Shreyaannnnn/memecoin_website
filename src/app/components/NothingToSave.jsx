'use client';
import React from 'react';
import { motion } from 'framer-motion';

function NothingToSaveModal() {
  return (
    <div className="relative">
      <motion.div
        className="bg-[#F0F0F0] w-[35vw] absolute border-4 border-black "
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
        <div className="flex flex-col items-center justify-center p-[0.5vw]">
          {/* Error Icon */}
          <div className="flex items-center justify-center " >
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <p className="text-lg font-bold text-black ">There is nothing to save.</p>

          </div>
          
          {/* Ok Button */}
          <div className="flex justify-center">
            <button className="px-8 py-2  border-4 border-black ">Ok</button>
          </div>
        </div>
      </motion.div>


      <motion.div
        className="bg-[#F0F0F0] w-[35vw] absolute top-4 left-4 border-4 border-black "
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
        <div className="flex flex-col items-center justify-center p-[0.5vw]">
          {/* Error Icon */}
          <div className="flex items-center justify-center " >
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <p className="text-lg font-bold text-black ">There is nothing to save.</p>

          </div>
          
          {/* Ok Button */}
          <div className="flex justify-center">
            <button className="px-8 py-2  border-4 border-black ">Ok</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#F0F0F0] w-[35vw] absolute top-8 left-8 border-4 border-black "
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
        <div className="flex flex-col items-center justify-center p-[0.5vw]">
          {/* Error Icon */}
          <div className="flex items-center justify-center " >
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <p className="text-lg font-bold text-black ">There is nothing to save.</p>

          </div>
          
          {/* Ok Button */}
          <div className="flex justify-center">
            <button className="px-8 py-2  border-4 border-black ">Ok</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#F0F0F0] w-[35vw] absolute top-12 left-12 border-4 border-black "
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
        <div className="flex flex-col items-center justify-center p-[0.5vw]">
          {/* Error Icon */}
          <div className="flex items-center justify-center " >
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <p className="text-lg font-bold text-black ">There is nothing to save.</p>

          </div>
          
          {/* Ok Button */}
          <div className="flex justify-center">
            <button className="px-8 py-2  border-4 border-black ">Ok</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#F0F0F0] w-[35vw] absolute top-16 left-16 border-4 border-black "
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
        <div className="flex flex-col items-center justify-center p-[0.5vw]">
          {/* Error Icon */}
          <div className="flex items-center justify-center " >
          <img src="/cross.png" alt="Error" className="w-[7vw] h-[7vw] " />
          <p className="text-lg font-bold text-black ">There is nothing to save.</p>

          </div>
          
          {/* Ok Button */}
          <div className="flex justify-center">
            <button className="px-8 py-2  border-4 border-black ">Ok</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default NothingToSaveModal;
