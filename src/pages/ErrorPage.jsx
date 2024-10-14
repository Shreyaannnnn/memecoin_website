'use client';
import React from 'react';
import { motion } from 'framer-motion';

function BlueScreenError() {
  return (
    <div className="min-h-screen bg-[#0000AA] flex flex-col items-center justify-center" >
        <p className="text-center text-2xl text-[#0000AA] bg-gray-300 p-2 shadow-sm shadow-gray-200 " >Windows</p>
    <div className=" flex  items-center ">
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
        <p className="text-center text-2xl text-white " >Press any key to continue _</p>

    </div>
  );
}

export default BlueScreenError;
