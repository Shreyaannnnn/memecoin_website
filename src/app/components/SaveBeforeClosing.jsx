'use client';
import React from 'react';
import { motion } from 'framer-motion';

function SaveBeforeClosingModal() {
  return (
    <div className=" relative">
      <motion.div
        className="bg-[#F0F0F0] w-[30vw] absolute  border-4 border-black"
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
          {/* Warning Icon */}
          <img src="/danger.png" alt="Warning" className=" w-[9vw] h-[8vw] " />
          <p className="text-[1vw]  text-black mb-[1vw]">Save Before Closing?</p>

          {/* Buttons */}
          <div className="flex space-x-4 ">
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">Yes</button>
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">No</button>
            <button className="px-[1vw] py-[0.5vw] border-4  border-black">Cancel</button>
          </div>
        </div>
      </motion.div>


      <motion.div
        className="bg-[#F0F0F0] w-[30vw] absolute top-4 left-4  rounded-lg shadow-lg border-4 border-black"
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
          {/* Warning Icon */}
          <img src="/danger.png" alt="Warning" className=" w-[9vw] h-[8vw] " />
          <p className="text-[1vw]  text-black mb-[1vw]">Save Before Closing?</p>

          {/* Buttons */}
          <div className="flex space-x-4 ">
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">Yes</button>
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">No</button>
            <button className="px-[1vw] py-[0.5vw] border-4  border-black">Cancel</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#F0F0F0] w-[30vw] absolute top-8 left-8  rounded-lg shadow-lg border-4 border-black"
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
          {/* Warning Icon */}
          <img src="/danger.png" alt="Warning" className=" w-[9vw] h-[8vw] " />
          <p className="text-[1vw]  text-black mb-[1vw]">Save Before Closing?</p>

          {/* Buttons */}
          <div className="flex space-x-4 ">
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">Yes</button>
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">No</button>
            <button className="px-[1vw] py-[0.5vw] border-4  border-black">Cancel</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#F0F0F0] w-[30vw] absolute top-12 left-12  rounded-lg shadow-lg border-4 border-black"
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
          {/* Warning Icon */}
          <img src="/danger.png" alt="Warning" className=" w-[9vw] h-[8vw] " />
          <p className="text-[1vw]  text-black mb-[1vw]">Save Before Closing?</p>

          {/* Buttons */}
          <div className="flex space-x-4 ">
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">Yes</button>
            <button className="px-[1vw] py-[0.5vw]  border-4 border-black ">No</button>
            <button className="px-[1vw] py-[0.5vw] border-4  border-black">Cancel</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SaveBeforeClosingModal;
