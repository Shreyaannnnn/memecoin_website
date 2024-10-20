'use client';
import React from 'react';
import { motion } from 'framer-motion';

function SaveBeforeClosingModal() {
  return (
    <div className=" relative">
      <motion.div
        className=" w-[40vw] md:w-[30vw] lg:w-[25vw] absolute  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
       <img src='save_before_changes.PNG' className='w-[80%]' alt='' />
      </motion.div>


      <motion.div
        className=" w-[40vw] md:w-[30vw] lg:w-[25vw] absolute top-4 left-4  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='save_before_changes.PNG' className='w-[80%] ' alt='' />

      </motion.div>

      <motion.div
        className="w-[40vw] md:w-[30vw] lg:w-[25vw] absolute top-8 left-8  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='save_before_changes.PNG' className='w-[80%]' alt='' />

      </motion.div>

      <motion.div
        className="w-[40vw] md:w-[30vw] lg:w-[25vw] absolute top-12 left-12  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='save_before_changes.PNG' className='w-[80%]' alt='' />

      </motion.div>
    </div>
  );
}

export default SaveBeforeClosingModal;
