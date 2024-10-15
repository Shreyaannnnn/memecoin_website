'use client';
import React from 'react';
import { motion } from 'framer-motion';

function NotFoundModal() {
  return (
    <div className="relative  ">
      <motion.div
        className="w-[40vw] md:w-[35vw] lg:w-[30vw] absolute  "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img src='/404-not-found.png' className=''  alt='' />
      </motion.div>


      <motion.div
        className="w-[40vw] md:w-[35vw] lg:w-[30vw] absolute top-4 left-4   "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='/404-not-found.png' className=''  alt='' />
      </motion.div>

      <motion.div
        className="w-[40vw] md:w-[35vw] lg:w-[30vw] absolute top-8 left-8   "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
        <img src='/404-not-found.png' className=''  alt='' />
      </motion.div>
      
    </div>
  );
}

export default NotFoundModal;
