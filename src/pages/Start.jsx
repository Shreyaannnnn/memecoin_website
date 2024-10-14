'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';


function Start() {
  const [clicked, setClicked] = useState(false);

  // Function to handle the button click
  const handleClick = () => {
    setClicked(true);
    const audio = new Audio('/minecraft_click.mp3'); // Path to your sound file in the public folder
    audio.play();

    // Reset the clicked state after a short delay to reset the animation
    setTimeout(() => {
      setClicked(false);
    }, 200); // Same as animation duration
  };

  return (
    <div
      className="min-h-screen  bg-[#0D8D4F] bg-center flex flex-col items-center justify-center relative"
    //   style={{ backgroundImage: 'url(/bg-image.png)' }} // Set background image here
    >
      {/* Minecraft-like Button */}
      <motion.button
        onClick={handleClick}
        className={`text-white font-bold text-2xl rounded-md shadow-lg transition-transform 
        ${clicked ? 'scale-90' : 'scale-100'} `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="/start-btn.png" className="w-full h-full" alt="" />
      </motion.button>

      {/* Text Under the Button */}
      <p className="mt-24 text-lg md:xl lg:text-2xl text-black cursor-pointer">
        Ox3F9929ffFO911c298B9D607b1623b721eE267a88
      </p>


      {/* Image in Bottom Left Corner */}
      <img
        src="/song_icon.png"
        alt="Minecraft Logo"
        className="absolute bottom-20 left-4 h-24"
      />
    </div>
  );
}

export default Start;
