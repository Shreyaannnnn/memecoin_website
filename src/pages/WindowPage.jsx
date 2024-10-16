import NotFoundModal from '@/app/components/NotFound';
import NothingToSaveModal from '@/app/components/NothingToSave';
import SaveBeforeClosingModal from '@/app/components/SaveBeforeClosing';
import TryAgainModal from '@/app/components/TryAgain';
import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const WindowPage = () => {
  return (
    <div className={`${pressStart2P.className} relative bg-[#0D8D4F] min-h-screen`}>
      {/* Modals positioned absolutely */}
      <div className="absolute z-0 top-[5%] left-[40%] md:top-[10%] md:left-[25%] lg:top-[10%] lg:left-[20%]">
        <NotFoundModal />
      </div>
      <div className="absolute z-0 top-[30%] right-[60%] md:top-[20%] md:right-[50%]  lg:top-[20%] lg:right-[45%]">
        <NothingToSaveModal />
      </div>
      <div className="absolute z-0 top-[20%] left-[30%] md:top-[50%] md:left-[40%] lg:top-[55%] lg:left-[35%]">
        <SaveBeforeClosingModal />
      </div>
      <div className="absolute z-0 top-[40%] left-[30%] md:top-[40%] md:left-[40%] lg:top-[35%] lg:left-[30%]">
        <TryAgainModal />
      </div>

      {/* Main content layout */}
      <div className='flex' >
      <div className="flex">
        {/* Folders section */}
        <div className="flex flex-col min-h-screen justify-between py-10 ml-4">
          {/* Dexscreener Folder */}
          <div className=" flex flex-col ">
          <img src="/folder_image.png" className="h-10 w-14 md:h-20 md:w-24 lg:h-24 lg:w-28 mx-auto" alt="Telegram" />
          <p className="text-xs md:text-sm">Dexscreener</p>
          </div>

          {/* Know Your Meme and About Folders */}
          <div className="flex space-x-5">
            <div className="text-center">
            <img src="/folder_image.png" className="h-10 w-14 md:h-20 md:w-24 lg:h-24 lg:w-28 mx-auto" alt="Telegram" />
            <p className="mt-2 w-20 text-xs md:text-sm mx-auto">Know Your Meme</p>
            </div>

            {/* <Link href="/AboutPage">
              <div className="text-center  ">
                <img src="/folder_image.png" className="w-32 h-32 mx-auto" alt="About" />
                <p className="mt-2">About</p>
              </div>
            </Link> */}
          </div>

          {/* Telegram and X Folders */}
          <div className="flex space-x-20">
            <div className="text-center">
              <img src="/folder_image.png" className="h-10 w-14 md:h-20 md:w-24 lg:h-24 lg:w-28 mx-auto" alt="Telegram" />
              <p className="mt-2 text-xs md:text-sm">Telegram</p>
            </div>

            {/* <div className="text-center mt-10">
              <img src="/folder_image.png" className="w-32 h-32 mx-auto" alt="X" />
              <p className="mt-2">X</p>
            </div> */}
          </div>
        </div>

        {/* Bottom Right Error Link */}
        <Link href="/ErrorPage">
          <div className="absolute  bottom-[20%] right-[2%] ">
          <img src="/folder_image.png" className="h-10 w-14 md:h-20 md:w-24 lg:h-24 lg:w-28 mx-auto" alt="Telegram" />
          <p className="mt-2 text-xs md:text-sm ">DO NOT OPEN</p>
          </div>
        </Link>

        {/* Memes Folder */}
        <div className="absolute bottom-[2%] right-[15%] text-center">
        <img src="/folder_image.png" className="h-10 w-14 md:h-20 md:w-24 lg:h-24 lg:w-28 mx-auto" alt="Telegram" />
        <p className="mt-2 text-xs md:text-sm ">Memes</p>
        </div>
      </div>

        <div className="flex max-h-screen flex-col-reverse space-y-28 mb-5  space-y-reverse">

          <div className="text-center">
            <img src="/folder_image.png" className="h-10 w-14 md:h-20 md:w-24 lg:h-24 lg:w-28 mx-auto" alt="Telegram" />
            <p className="mt-2 text-xs md:text-sm">X</p>
          </div>

          <Link href="/AboutPage">
            <div className="text-center">
            <img src="/folder_image.png" className="h-10 w-14 md:h-20 md:w-24 lg:h-24 lg:w-28 mx-auto" alt="Telegram" />
            <p className="mt-2 text-xs md:text-sm">About</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WindowPage;
