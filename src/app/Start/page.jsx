'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {useEffect, useState} from 'react'
import MusicContext from '../components/MusicContext';
import { useContext } from 'react';
function Start() {
  const [clicked, setClicked] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false); // Track if the song is playing
  // const audioRef = useRef(null); // Ref to store the audio instance

  // // Ensure audio initialization only runs on the client side
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     audioRef.current = new Audio('/song_bg.mp3'); // Initialize the audio
  //     audioRef.current.loop = true; // Loop the song
  //   }
  // }, []);

  const handleClick = () => {
    setClicked(true);
    toggleMusic();
    console.log('log');
    
    const clickSound = new Audio('/minecraft_click.mp3'); // Click sound
    clickSound.play();

    // Reset the clicked state after a short delay to reset the animation
    setTimeout(() => {
      setClicked(false);
      
    }, 200);
  };

//   useEffect(() => {
//     // This function will run once when the page loads
//     toggleMusic
//     console.log('togle');
    
//     // Your page load logic here
// }, []);

  // const toggleSong = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause(); // Pause the song
  //     } else {
  //       audioRef.current.play(); // Play the song
  //     }
  //     setIsPlaying(!isPlaying); // Toggle play state
  //   }
  // };

  const { isPlaying, toggleMusic } = useContext(MusicContext);

  return (
    <div
      className="min-h-screen flex bg-[#0D8D4F] flex-col items-center justify-center relative"
      style={{
        backgroundImage: 'url("/bg-image2.png")', // Background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img src="/gliters.png" alt="Glitter" className="absolute top-0 left-0" />
      <img src="/gliters.png" alt="Glitter" className="absolute top-0 right-0" />

      <Link href="/Window">
        <motion.button
          onClick={handleClick}
          className={`text-white font-bold text-2xl rounded-md shadow-lg transition-transform 
          ${clicked ? 'scale-90' : 'scale-100'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src="/start-btn.png"
            className="w-[55vw] h-[15vw] md:w-[22vw] md:h-[6vw] lg:w-[20vw] lg:h-[5vw]"
            alt="Start Button"
          />
        </motion.button>
      </Link>

      <p className="mt-16 md:mt-24 text-[2.3vw] md:text-xl lg:text-2xl text-black cursor-pointer z-10">
        Ox3F9929ffFO911c298B9D607b1623b721eE267a88
      </p>

      {/* Song Control Icon */}
      {/* <img
        src="/song_icon.png"// Change icon based on play state
        alt="Song Icon"
        className="absolute bottom-10 left-0 md:bottom-20 md:left-4 h-16 md:h-24 cursor-pointer"
        onClick={toggleMusic} // Toggle song on click
      /> */}
    </div>
  );
}

export default Start;
