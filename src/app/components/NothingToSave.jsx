'use client';
import React from 'react';
import { motion } from 'framer-motion';

function NothingToSaveModal() {
  return (
    <div className="relative">
      <motion.div
        className=" w-[40vw] md:w-[35vw] lg:w-[30vw] absolute  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='/there_is_nothing_to_save.png' className='w-full' alt='' />

      </motion.div>


      <motion.div
        className=" w-[40vw] md:w-[35vw] lg:w-[30vw] absolute top-4 left-4  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='/there_is_nothing_to_save.png' className='w-full' alt='' />

      </motion.div>

      <motion.div
        className=" w-[40vw] md:w-[35vw] lg:w-[30vw] absolute top-8 left-8  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='/there_is_nothing_to_save.png' className='w-full' alt='' />

      </motion.div>

      <motion.div
        className=" w-[40vw] md:w-[35vw] lg:w-[30vw] absolute top-12 left-12  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='/there_is_nothing_to_save.png' className='w-full' alt='' />

      </motion.div>

      <motion.div
        className=" w-[40vw] md:w-[35vw] lg:w-[30vw] absolute top-16 left-16  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='/there_is_nothing_to_save.png' className='w-full' alt='' />
      </motion.div>
    </div>
  );
}

export default NothingToSaveModal;
