"use client";
import React from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const WhatWeDo = () => {
   const router = useRouter();
   return (
      <div className="w-full py-24 bg-sky-950">
         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
            <div className="text-white flex flex-col gap-3">
               <h1 className="text-3xl lg:text-4xl font-bold ">We move more for less</h1>
               <div className="w-full h-px bg-sky-800"></div>
               <p>
                  That’s less cost, less stress, and less fuss, which means you can enjoy more time focusing on your
                  exciting new home move instead.
               </p>
               <Button title="Get instant prices" onClick={() => router.push("/quote")} className="!w-fit mt-6" />
            </div>
            <div className="text-white flex flex-col gap-3">
               <h1 className="text-3xl lg:text-4xl font-bold">
                  Every move is great, when it&apos;s got a great home mover
               </h1>
               <div className="w-full h-px bg-sky-800"></div>
               <p>
                  We know that every move is unique, and so that&apos;s why every removal comes with a dedicated local
                  expert, and:
               </p>
               <p>
                  48 hour cancellation - Plans changed? No worries, edit or cancel your booking up to 2 days beforehand
               </p>
            </div>
         </div>
      </div>
   );
};
