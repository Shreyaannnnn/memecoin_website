'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link from Next.js

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
      className="min-h-screen flex bg-[#0D8D4F] flex-col items-center justify-center relative"
      style={{ 
        backgroundImage: 'url("/bg-image2.png")', // Background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Glitter image at the top left corner */}
      <img 
        src="/gliters.png" // Replace with your glitter image path
        alt="Glitter" 
        className="absolute top-0 left-0 w-full"
      />

      {/* Link wraps the button for navigation */}
      <Link href="/WindowPage">
        <motion.button
          onClick={handleClick}
          className={`text-white font-bold text-2xl rounded-md shadow-lg transition-transform 
          ${clicked ? 'scale-90' : 'scale-100'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/start-btn.png" className="w-[55vw] h-[15vw] md:w-[22vw] md:h-[6vw] lg:w-[20vw] lg:h-[5vw]" alt="" />
        </motion.button>
      </Link>

      {/* Text Under the Button */}
      <p className="mt-16 md:mt-24 text-[2.3vw] md:text-xl lg:text-2xl text-black cursor-pointer">
        Ox3F9929ffFO911c298B9D607b1623b721eE267a88
      </p>

      {/* Image in Bottom Left Corner */}
      <img
        src="/song_icon.png"
        alt="Minecraft Logo"
        className="absolute bottom-10 left-0 md:bottom-20 md:left-4 h-16 md:h-24"
      />

      {/* Glitter image at the bottom right corner */}
      {/* <img 
        src="/gliters.png" // Replace with your glitter image path
        alt="Glitter" 
        className="absolute bottom-0 right-0 w-full"
      /> */}
    </div>
  );
}

export default Start;
