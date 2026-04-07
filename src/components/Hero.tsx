"use client";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Hero = () => {
   const router = useRouter();
   return (
      <div className="bg-sky-500 justify-center items-center flex px-4 h-screen py-24">
         <div className="max-w-6xl mx-auto flex flex-col-reverse justify-center items-center grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-12 ">
            <div className="my-auto">
               <div className="space-y-10 lg:space-y-20">
                  <div className="space-y-3">
                     <h1 className="text-5xl lg:text-6xl font-black text-neutral-800">Moving & Logistics</h1>
                     <h1 className="text-2xl lg:text-[40px] font-bold text-neutral-800">Let&apos;s get your move on</h1>
                     <p className="text-md lg:text-2xl text-neutral-800 font-medium">
                        Find a price that&apos;s right up your street, from the nation&apos;s favourite way to move
                     </p>
                  </div>
                  <div className="w-full bg-white shadow-md rounded-lg gap-3 p-5 flex flex-col md:flex-row">
                     <Button title=" Get instant prices" onClick={() => router.push("/quote")} />
                     <Button title=" 0776703381" icon={<BsWhatsapp className="text-xl" />} variant="outline" />
                  </div>
               </div>
            </div>
            <div className="h-60 w-60 md:h-150 md:w-150 justify-around flex items-center relative mx-auto">
               <Image
                  src="/van.png"
                  alt="landing-img"
                  width={500}
                  height={500}
                  priority
                  className="object-contain object-center h-full w-full self-center"
               />
            </div>
         </div>
      </div>
   );
};
