'use client'
import {motion} from "framer-motion";

export default function News(){



   return(
      <>

         <div className="absolute h-screen w-screen z-20">
            <motion.div className="  fixed -top-2 -left-2 rounded-full h-14 w-14 bg-pink-800"></motion.div>
            <motion.div className=" fixed -bottom-12 -right-6 rounded-full h-52 w-52 bg-sky-400"
                        animate={{scale: [0.5, 0.8, 0.5]}}
                        transition={{
                           duration: 2,
                           repeat: Infinity,
                           repeatType: 'loop',
                           ease: "easeInOut",
                        }}></motion.div>
            <motion.div className=" fixed bottom-32 right-[40%]  rotate-12 rounded-md h-10 w-10 bg-red-600"
                        animate={{scale: [1, 1.5, 1], rotate: [0, 360]}}
                        transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
            ></motion.div>
            <motion.div className="  fixed top-80 left-[450px] rounded-full h-10 w-10 bg-green-500"
                        animate={{scale: [1, 1.5, 1]}}
                        transition={{
                           duration: 2,
                           repeat: Infinity,
                           repeatType: 'loop',
                           ease: "easeInOut"
                        }}></motion.div>
            <motion.div className="  fixed top-20 left-[360px] rounded-full h-8 w-8 bg-black"
                        animate={{scale: [1, 1.5, 1]}}
                        transition={{
                           duration: 2,
                           repeat: Infinity,
                           repeatType: 'loop',
                           ease: "easeInOut",
                        }}></motion.div>
            <div className="  fixed bottom-48 left-52  h-6 w-6 rounded-md rotate-12  bg-pink-800"></div>

         </div>


         <div className=" top-0 flex justify-between w-screen h-screen bg-gray-50 z-10">
            ddd
         </div>

      </>
   );
}