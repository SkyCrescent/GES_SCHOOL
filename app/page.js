'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import logo from '@/public/icons/logo3.png'
import logo2 from '@/public/icons/logo.png'
import logo3 from '@/public/icons/inscription.png'
import infos from '@/public/icons/info.ico'
import ListScholl from "@/component/scholl/ListSchool"
import {useRouter} from "next/navigation";;
import fr from "@/public/school/profils/Big.jpg";
export default function Home() {
   const router = useRouter();

   const data = [

      {
         id : 1 ,
         nom : "Alphonse Mbama",
         adresse : "24 Rue Mana",
         contact : " 06 689 88 24" ,
         photo : fr.src,
         arrondissement : "Moungali",
         quartier : "Moukondo"
      },
      {
         id : 2 ,
         nom : "La Fleur",
         adresse : "20 Rue Mana",
         contact : " 06 146 85 64" ,
         photo : logo2.src,
         arrondissement : "Moungali",
         quartier : "Moukondo"
      },
      {
         id : 3 ,
         nom : "Charles Monstequieu",
         adresse : "24 Rue XXX",
         contact : " 06 676 74 02" ,
         photo : fr.src,
         arrondissement : "Moungali",
         quartier : "Moukondo"
      },
      {
         id : 4 ,
         nom : "Saint Exépury",
         adresse : "4 Rue XXX",
         contact : " 06 201 47 63" ,
         photo : logo2.src,
         arrondissement : "Bacongo",
         quartier : "Bacongo"
      },
      {
         id : 5 ,
         nom : "Le Coeur de Mely",
         adresse : "60 Rue ZZZZ",
         contact : " 06 478 02 43" ,
         photo : fr.src,
         arrondissement : "Moungali",
         quartier : "Moukondo"
      },
      {
         id : 6 ,
         nom : "Le Coeur de Mely",
         adresse : "60 Rue ZZZZ",
         contact : " 06 478 02 43" ,
         photo : logo2.src,
         arrondissement : "Moungali",
         quartier : "Moukondo"
      },
      {
         id : 7 ,
         nom : "Le Coeur de Mely",
         adresse : "60 Rue ZZZZ",
         contact : " 06 478 02 43" ,
         photo : fr.src,
         arrondissement : "Moungali",
         quartier : "Moukondo"
      }
   ]


  return (

     <>
        {/*<div className="bg-gradient-to-br from-blue-700 to-white via-white  z-40 h-screen opacity-75 "></div>*/}

        <div className="absolute h-screen w-screen z-20">
           <motion.div className="  fixed -top-2 -left-2 rounded-full h-14 w-14 bg-pink-800"></motion.div>
           <motion.div className=" fixed -bottom-12 -right-6 rounded-full h-52 w-52 bg-sky-400"
                       animate={{scale: [0.5, 0.8, 0.5]}}
                       transition={{duration: 2, repeat: Infinity, repeatType: 'loop', ease: "easeInOut",}}></motion.div>
           <motion.div className=" fixed bottom-32 right-[40%]  rotate-12 rounded-md h-10 w-10 bg-red-600"
                       animate={{scale:[1,1.5,1], rotate:[0,360]}}
                       transition={{duration:2, repeat:Infinity, ease:'easeInOut'}}
           ></motion.div>
           <motion.div className="  fixed top-80 left-[450px] rounded-full h-10 w-10 bg-green-500"
                       animate={{scale: [1, 1.5, 1]}}
                       transition={{duration: 2, repeat: Infinity, repeatType: 'loop', ease: "easeInOut"}}></motion.div>
           <motion.div className="  fixed top-20 left-[360px] rounded-full h-8 w-8 bg-black"
                       animate={{scale: [1, 1.5, 1]}}
                       transition={{duration: 2, repeat: Infinity, repeatType: 'loop', ease: "easeInOut",}}></motion.div>
           <div className="  fixed bottom-48 left-52  h-6 w-6 rounded-md rotate-12  bg-pink-800"></div>

           {/*<motion.div*/}
           {/*className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[80px] border-b-blue-500"*/}
           {/*animate={{scale:[1,1.5,1], rotate:[0,360]}}*/}
           {/*transition={{duration:2, repeat:Infinity, ease:'easeInOut'}}>*/}
           {/*</motion.div> le triangle*/}

        </div>


        <div className=" top-0 flex justify-between w-screen h-screen bg-gray-50 z-10">
           <div className="relative w-[55%] h-screen ">
              <img
                 src={logo.src}
                 alt={`Logo `}
                 width="900"
                 height="900"
                 className="  relative h-[80%] w-[100%] top-10 "
              />
           </div>
           <div className="relative w-[50%]  flex justify-between ">
              <div className="relative  w-[80%] top-56 h-52 -mx-52">
                 <div
                    className=" text-blue-700 relative h-auto w-[90%] font-[Gotham] uppercase text-5xl md:text-6xl   opacity-100  flex items-center ">
                    Connector
                    <img
                       src={logo2.src}
                       alt={`Logo `}
                       width="50"
                       height="50"
                       className="  object-center mx-2 "
                    />
                 </div>
                 <div
                    className=" relative h-auto w-[90%]  font-[Gotham] mx-6  text-7xl md:text-[13px] flex-col   opacity-100 text-black flex items-center ">
                    <span
                       className="relative mt-2 font-[Product Sans] text-[15px] -left-4"> Plateforme d'inscription pour les éleves Congolais</span>
                    <span
                       className="relative mt-3 left-8 font-[[Product Sans Light] text-[14px] ">Vous pouvez etre la {data.length + 1}e ecole a s'inscrire  </span>
                    <span className="relative mt-3 left-12 font-[roboto] text-[14px] ">  Liste des écoles admis sur la plateforme </span>

                    <motion.button
                       className="w-full  z-50 mt-4 text-center relative left-10 lg:w-64 bg-blue-500 hover:bg-pink-800 hover:shadow-black text-white  transition duration-300 transform hover:scale-105 px-12 py-4 rounded-md font-[Product Sans]"
                        onClick={()=>{
                           router.push(`/NewSchool`);
                        }}
                    >
                       Nouvelle Inscription
                    </motion.button>


                 </div>
              </div>
              <div
                 className="relative overflow-y-auto scrollbar-hidden w-[55%] rounded-md border border-black/15 shadow-gray-500 shadow-xl right-6 h-[70%] z-30 -bottom-20 hover:bg-gray-100 ">
                 <div className="relative h-auto content-container overflow-hidden   m-1 z-50">
                    {
                       data.map((item, index) => (
                          <div key={item.key}>
                             <motion.div
                                className=" relative flex justify-between mt-1 bg-white border border-gray-200 rounded-md  p-3 scrollbar-hidden  cursor-pointer h-[100%] "
                                whileHover={{scale : 0.95}}>
                                   <div className="relative w-[20%]">
                                      <img
                                         src={`${item.photo}`}
                                         alt={`Logo `}
                                         width="300"
                                         height="300"
                                         className="   rounded-full h-14 w-14 "
                                      />
                                   </div>

                                <div className="relative w-[80%] flex items-center">
                                   <div className="flex flex-col">
                                      <span className=" font-[roboto] font-bold">{item.nom}</span>
                                      <span className=" font-[roboto] text-[10px] font-thin text-blue-500">Adresse:  {item.adresse}</span>
                                      <span className=" font-[roboto] text-[10px] font-thin">Contact: {item.contact} </span>
                                   </div>
                                   <img
                                      // src={item.photo.src}
                                      src={infos.src}
                                      alt={`Logo `}
                                      width="250"
                                      height="250"
                                      className="absolute left-56   object-fill rounded-full h-6 w-6 "
                                   />
                                </div>


                             </motion.div>
                          </div>


                       ))
                    }

                 </div>


              </div>

           </div>

        </div>


     </>

  );
}


