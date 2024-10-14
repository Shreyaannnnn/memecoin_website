import NotFoundModal from '@/app/components/NotFound'
import NothingToSaveModal from '@/app/components/NothingToSave'
import SaveBeforeClosingModal from '@/app/components/SaveBeforeClosing'
import TryAgainModal from '@/app/components/TryAgain'
import React from 'react'
const WindowPage = () => {
  return (
    <div className="relative  bg-[#0D8D4F] min-h-screen" >
        <div className="absolute z-0 top-16 left-[20vw]" >
            <NotFoundModal/>
        </div>
        <div className="absolute z-0 top-[10vw] right-[42vw]" >
            <NothingToSaveModal/>
        </div>
        <div className="absolute z-0 top-[30vw] left-[40vw]" >
            <SaveBeforeClosingModal/>
        </div>
        <div className="absolute z-0 top-[20vw] left-[25vw]" >
            <TryAgainModal/>
        </div>

        <div className="flex" >

        <div className=" flex flex-col space-y-[4vw] py-[4vw] ml-[1vw] " >
            <div>
            <img src="/folder_image.png" className="w-[8vw] h-[8vw]  " alt="" />
            <p>Dexscreener</p>
            </div>

            <div className="flex space-x-[0.6vw]" >
                <div className="items-center" >
                <img src="/folder_image.png" className="w-[8vw] h-[8vw]  " alt="" />
                <p className="w-[80%] text-center" >Know your meme</p>
                </div>

                <div className="mt-[4vw]" >
                <img src="/folder_image.png" className="w-[8vw] h-[8vw]  " alt="" />
                <p className="text-center" >About</p>
                </div>
            
            </div>

            <div className="flex space-x-[5vw]" >
                <div>
                <img src="/folder_image.png" className="w-[8vw] h-[8vw]  " alt="" />
                <p className="text-center">Telegram</p>
                </div>

                <div className="mt-[4vw]" >
                <img src="/folder_image.png" className="w-[8vw] h-[8vw]  " alt="" />
                <p className="text-center">X</p>
                </div>
            
            </div>
        </div>


        <div className="absolute bottom-[15vw] right-[2vw] " >
                <img src="/folder_image.png" className="w-[8vw] h-[8vw]  " alt="" />
                <p className="text-center">DO NOT OPEN</p>
        </div>

        <div className="absolute bottom-[4vw] right-[10vw] " >
                <img src="/folder_image.png" className="w-[8vw] h-[8vw]  " alt="" />
                <p className="text-center">Memes</p>
        </div>


        

        </div>
    </div>
  )
}

export default WindowPage