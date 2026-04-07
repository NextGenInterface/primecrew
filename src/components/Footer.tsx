import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { LogoName } from "./LogoName";

export const Footer = () => {
   return (
      <div className="px-4 lg:px-24 py-12 pb-2 bg-neutral-300">
         <div className="max-w-6xl mx-auto p-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
               <div className="space-y-4">
                  <Link href={"/"} className="flex items-center gap-2">
                     <Logo box="#262626" arrow="#262626" className="w-6 md:w-6" />
                     <LogoName color="#262626" className="relative top-1 w-30 md:w-38" />
                  </Link>
                  <p className="text-sm">
                     Reliable & Affordable Removals, Clearance & Cleaning Services Professional • Reliable • Careful
                     Handling for Every Job
                  </p>
                  {/* <ul className="">
                     {navLinks?.map((link) => (
                        <li key={link.label}>
                           <Link href={"/"} className="capitalize font-semibold text-sm hover:underline">
                              {link.label}
                           </Link>
                        </li>
                     ))}
                  </ul> */}
               </div>

               <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-end items-start">
                  <div className="flex-col flex gap-4 justify-end">
                     <div className="flex-col flex gap-4">
                        <div className="">
                           <p>Call:</p>
                           <h1 className="text-xl">079 0838 0510</h1>
                        </div>
                        <div className="">
                           <p>WhatsApp:</p>
                           <h1 className="text-xl">077 6703 381</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full py-4 border-t border-neutral-500">
               <p className="text-sm">Copyright © 2026 Primecrew Ltd. All rights reserved.</p>
            </div>
         </div>
      </div>
   );
};
