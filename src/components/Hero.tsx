"use client";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Hero = () => {
   const router = useRouter();
   return (
      <div className=" justify-center items-center flex px-4 h-screen py-24">
         <div className="max-w-6xl mx-auto flex flex-col-reverse justify-center items-center grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-12 ">
            <div className="my-auto z-20">
               <div className="space-y-10 lg:space-y-14">
                  <div className="space-y-3">
                     <h1 className="text-5xl lg:text-6xl font-black text-neutral-800">From Clutter to Clean Spaces</h1>
                     <h1 className="text-2xl lg:text-4xl font-bold text-neutral-800">
                        Moving, Clearing, and Cleaning—Handled for You
                     </h1>
                     <p className="text-md lg:text-2xl text-neutral-800 font-medium">
                        Find a price that&apos;s right up your street
                     </p>
                  </div>
                  <div className="w-full bg-white shadow-md rounded-lg gap-3 p-5 flex flex-col md:flex-row">
                     <Button title=" Get instant prices" onClick={() => router.push("/quote")} />
                     <a
                        href="https://wa.me/0776703381"
                        className="h-14 w-full text-sm lg:text-lg flex items-center justify-center gap-2 font-semibold py-2 px-8 rounded-lg duration-300 cursor-pointer bg-transparent border border-neutral-400 hover:bg-neutral-100 text-neutral-800"
                     >
                        <BsWhatsapp className="text-xl" />
                        0776703381
                     </a>
                  </div>
               </div>
            </div>
            <div className="absolute w-full h-full right-0 left-0 z-10 bg-linear-to-r from-sky-400 via-sky-400 mix-blend-color  to-transparent" />
            <div className="absolute w-full h-full right-0 left-0 z-10 bg-linear-to-r from-sky-400 via-sky-400  to-transparent" />

            <Image
               src="/ll.webp"
               alt="landing-img"
               priority
               width={1000}
               height={976}
               className="h-full absolute right-0 object-cover"
            />
         </div>
      </div>
   );
};
