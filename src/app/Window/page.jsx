import NotFoundModal from '@/app/components/NotFound';
import NothingToSaveModal from '@/app/components/NothingToSave';
import SaveBeforeClosingModal from '@/app/components/SaveBeforeClosing';
import TryAgainModal from '@/app/components/TryAgain';
import React from 'react';
import Link from 'next/link';
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const WindowPage = () => {
  return (
    <div className={`${pressStart2P.className} relative bg-[#0D8D4F] min-h-screen `}>
      {/* Modals positioned absolutely */}
      <div className="absolute z-0 top-[5%] left-[40%] md:top-[10%] md:left-[25%] lg:top-[6%] lg:left-[17%]">
        <NotFoundModal />
      </div>
      <div className="absolute z-0 top-[30%] right-[60%] md:top-[20%] md:right-[50%] lg:top-[20%] lg:right-[45%]">
        <NothingToSaveModal />
      </div>
      <div className="absolute z-0 top-[20%] left-[25%] md:top-[50%] md:left-[40%] lg:top-[55%] lg:left-[35%]">
        <SaveBeforeClosingModal />
      </div>
      <div className="absolute z-0 top-[45%] left-[30%] md:top-[40%] md:left-[40%] lg:top-[35%] lg:left-[30%]">
        <TryAgainModal />
      </div>

      {/* Main content layout */}
      <div className="flex min-h-screen">
  {/* Folders section */}
  <div className="flex flex-col min-h-screen justify-between py-10 ml-4">
    {/* Dexscreener Folder */}
    <Link href="https://dexscreener.com/ethereum/0xd56ce7a608a2bc865dfab82ec22c02ec1c757ac0?__cf_chl_rt_tk=9d8SklMDbHuaQeGH3rdx_IeSuJkubGggA7OahmZ_yx4-1729101657-1.0.1.1-DTGllecUHjXZcxn35.Oek6sXAXdmyGp7cVyBGJtAiIw" target='_blank' >
    <div className="flex flex-col items-center text-center">
      <img
        src="/folder_image.png"
        className="h-8 w-10 md:h-16 md:w-20 lg:h-20 lg:w-24"
        alt="Dexscreener"
      />
      <p className="mt-2 text-[8px] md:text-sm">Dexscreener</p>
    </div>
    </Link>

    {/* Know Your Meme and About Folders */}
    <div className="flex space-x-5">
      <Link href="https://knowyourmeme.com/memes/smug-frog/photos" target='_blank' >
      <div className="flex flex-col items-center text-center">
        <img
          src="/folder_image.png"
          className="h-8 w-10 md:h-16 md:w-20 lg:h-20 lg:w-24"
          alt="Know Your Meme"
        />
        <p className="mt-2 w-20 text-[8px] md:text-sm">Know Your Meme</p>
      </div>
      </Link>
    </div>

    {/* Telegram and X Folders */}
    <div className="flex space-x-20">
      <Link href="https://t.me/SmugCTOPortal" target='_blank'>
      <div className="flex flex-col items-center text-center">
        <img
          src="/folder_image.png"
          className="h-8 w-10 md:h-16 md:w-20 lg:h-20 lg:w-24"
          alt="Telegram"
        />
        <p className="mt-2 text-[8px] md:text-sm">Telegram</p>
      </div>
      </Link>
    </div>
  </div>

  {/* Bottom Right Error Link */}
  <Link href="/Error">
    <div className="absolute bottom-[20%] right-[2%] flex flex-col items-center text-center">
      <img
        src="/folder_image.png"
        className="h-8 w-10 md:h-16 md:w-20 lg:h-20 lg:w-24"
        alt="DO NOT OPEN"
      />
      <p className="mt-2 text-[8px] md:text-sm">DO NOT OPEN</p>
    </div>
  </Link>

  {/* Memes Folder */}
  <Link href="/Meme">
  <div className="absolute bottom-[2%] right-[15%] flex flex-col items-center text-center">
    <img
      src="/folder_image.png"
      className="h-8 w-10 md:h-16 md:w-20 lg:h-20 lg:w-24"
      alt="Memes"
    />
    <p className="mt-2 text-[8px] md:text-sm">Biggest meme</p>
  </div>
  </Link>

  <div className="flex max-h-screen flex-col-reverse space-y-14 mb-5 space-y-reverse">
    <Link href="https://x.com/smugthepepe" target='_blank' >
    <div className="flex flex-col items-center text-center">
      <img
        src="/folder_image.png"
        className="h-8 w-10 md:h-16 md:w-20 lg:h-20 lg:w-24"
        alt="X"
      />
      <p className="mt-2 text-[8px] md:text-sm">X</p>
    </div>
    </Link>

    <Link href="/About">
      <div className="flex flex-col items-center text-center">
        <img
          src="/folder_image.png"
          className="h-8 w-10 md:h-16 md:w-20 lg:h-20 lg:w-24"
          alt="About"
        />
        <p className="mt-2 text-[8px] md:text-sm">About</p>
      </div>
    </Link>
  </div>
</div>
</div>
  );
};

export default WindowPage;
