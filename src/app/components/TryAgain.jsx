'use client';
import React from 'react';
import { motion } from 'framer-motion';

function TryAgainModal() {
  return (
    <div className="relative">
      <motion.div
        className="w-[40vw] md:w-[30vw] lg:w-[25vw] absolute "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header */}
       <img src='/try-again.png' className="w-full" alt='' />
      </motion.div>
    </div>
  );
}

export default TryAgainModal;
