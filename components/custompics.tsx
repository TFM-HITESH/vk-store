import React from 'react'
import Image from 'next/image'

type Props = {}

export default function custompics({ }: Props) {
    return (
        <div className="flex flex-row text-white md:p-10 p-3 w-full relative md:h-[100vh] ">
            <Image
                src="/merchpic.jpg"
                fill={true}
                alt="Picture of the author"
                className="flex flex-col -z-10 relative"
            />
            {/* <div className="w-full flex flex-col items-start justify-end p-10 text-left">
                <motion.div
                    className="md:text-[4rem] text-[30pt] font-bold flex justify-center "
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    DONT MISS OUT,
                </motion.div>
                <motion.div
                    className="md:text-[4rem] text-[30pt] font-bold flex justify-center "
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    EXPLORE OUR COLLECTION
                </motion.div>
                <motion.div
                    className="md:text-[2rem] text-[15pt] font-light flex justify-center pt-[3.5%] "
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    UNCOVER THE LATEST TRENDS DAILY AT VICUNA STORE, WHERE OUR CURATED
                    COLLECTION ELEVATE YOUR EVERYDAY STYLE.
                </motion.div>
                <motion.div
                    className="flex items-center justify-start w-full pt-[5%] "
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    <motion.button className="bg-fuchsia-600/60 border ring-1 ring-gray-900/5 border-white border-1 p-4 px-8 md:text-3xl text-xl rounded-[0.2rem] hover:scale-110 hover:bg-fuchsia-600/90 hover:border-3 transition-all duration-300 ease-in-out font-bold hover:font-extrabold  hover:shadow-4xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80">
                        SHOP NOW !
                    </motion.button>
                </motion.div>
            </div> */}
        </div>
    )
}