'use client'
import axios from "axios";
import fr from "@/public/school/profils/Big.jpg"
import logo3 from "@/public/icons/inscription.png";
export default function  ListScholl (){

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
         photo : fr.src,
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
         photo : fr.src,
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
      }
   ]




   return(
      <>

         <div className="relative h-auto bg-red-500  rounded-md border border-black z-50">

            {
               data.map((item ,index)=> (
                  <div key={item.key}>
                     <div
                        className=" relative flex justify-between hover:bg-black h-[60%] border border-black">

                        <div className="relative w-[20%]">
                           <img
                              // src={item.photo.src}
                              src={`${item.photo}`}
                              alt={`Logo `}
                              width="120"
                              height="120"
                              className="  object-center rounded-full h-12 w-12 "
                           />
                        </div>

                     </div>
                  </div>


               ))
            }

         </div>


      </>
   )
}