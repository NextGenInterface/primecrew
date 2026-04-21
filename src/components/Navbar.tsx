"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { LogoName } from "./LogoName";
import { MdMenu } from "react-icons/md";
import { BiChevronDown, BiSolidChevronRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/navigation";

export const navLinks = [
   { url: "/", label: "Home" },
   {
      url: "/service",
      label: "Service",
      dropdown: [
         { label: "Removal", url: "/service/removal" },
         { label: "Clearance", url: "/service/clearance" },
         { label: "Cleaning", url: "/service/cleaning" },
      ],
   },
   { url: "/about-us", label: "About" },
];

export const Navbar = () => {
   const [dropdown, setDropdown] = useState(false);
   const [menu, setMenu] = useState(false);

   const router = useRouter();

   return (
      <nav className=" bg-sky-400 flex justify-between fixed top-0 z-50 w-full shadow-sm shadow-black/3">
         <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 h-16 relative">
            <Link href={"/"} className="flex items-center gap-2">
               <Logo box="#262626" arrow="#262626" className="w-6 md:w-6" />
               <LogoName color="#262626" className="relative top-1 w-30" />
            </Link>
            <div className="hidden md:flex flex-1 w-full gap-6 justify-end items-center h-full ">
               {navLinks.map((l) => (
                  <div key={l.label} className="relative" onMouseLeave={() => setDropdown(false)}>
                     <Link
                        key={l.label}
                        href={l.url}
                        className="flex items-center hover:text-slate-600 font-medium  relative h-full "
                        onMouseEnter={() => {
                           if (l.dropdown) setDropdown(true);
                        }}
                     >
                        {l.label}
                        {l.dropdown && <BiChevronDown />}
                     </Link>

                     {dropdown && l.dropdown && (
                        <div className="bg-white p-4 rounded-xl absolute top-10 -right-25 z-50 w-60 ">
                           <div className="bg-white w-6 h-6 absolute left-1/3 -top-2 rotate-45"></div>
                           {
                              <ul>
                                 {l.dropdown.map((d) => (
                                    <li key={d.label} className="">
                                       <Link
                                          key={d.label}
                                          href={d.url}
                                          className="text-sm cursor-pointer hover:text-slate-500 font-medium"
                                       >
                                          {d.label}
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           }
                        </div>
                     )}
                  </div>
               ))}
               <Link
                  href={"/quote"}
                  className="bg-sky-500 p-1 px-4 rounded-full font-semibold hover:bg-sky-500/50 ring-sky-700"
               >
                  Get a quote
               </Link>
            </div>
            <MdMenu size={32} className="md:hidden" onClick={() => setMenu(true)} />
            {menu && (
               <div className="bg-sky-400 fixed top-0 w-full h-screen left-0 right-0 p-6">
                  <div className="flex justify-end z-20">
                     <CgClose onClick={() => setMenu(false)} size={32} />
                  </div>
                  <div className="">
                     {navLinks.map((l) => (
                        <div key={l.label} className="relative" onMouseLeave={() => setDropdown(false)}>
                           <button
                              key={l.label}
                              onClick={() => {
                                 router.push(`${l.url}`);
                                 setMenu(false);
                              }}
                              className="flex items-center hover:underline relative h-full text-xl font-bold py-4 w-full"
                           >
                              {l.label}
                           </button>
                           {l.dropdown && (
                              <div className="">
                                 {
                                    <ul className="left-3 relative space-y-3 my-3">
                                       {l.dropdown.map((d) => (
                                          <li key={d.label} className="">
                                             <button
                                                key={l.label}
                                                onClick={() => {
                                                   router.push(d.url);
                                                   setMenu(false);
                                                }}
                                                className="text-xl p-2 font-bold cursor-pointer hover:underline items-center flex gap-2"
                                             >
                                                <BiSolidChevronRight />
                                                {d.label}
                                             </button>
                                          </li>
                                       ))}
                                    </ul>
                                 }
                              </div>
                           )}
                        </div>
                     ))}
                     <button
                        onClick={() => {
                           router.push(`/quote`);
                           setMenu(false);
                        }}
                        className="bg-sky-500 p-2 px-4 text-xl  rounded-full font-semibold hover:bg-sky-500/50 ring-sky-700"
                     >
                        Get a quote
                     </button>
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};
