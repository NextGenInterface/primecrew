import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export const Service = () => {
   const servicesArray = [
      {
         title: "Removals & Clearance Services",
         img: "/removal.avif",
         list: ["Exterior Cleaning Services", "Interior Cleaning Services"],
         url: "/service/removal",
      },
      {
         title: "Cleaning Solutions",
         img: "/cleaning.avif",
         list: ["Home & Flat Removals", "Office Relocations", "House & Property Clearance", "Waste Removal & Disposal"],
         url: "/service/cleaning",
      },
   ];
   return (
      <div className=" justify-center grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 bg-neutral-100">
         {servicesArray.map((ser) => (
            <div key={ser.title} className="grid grid-cols-1 md:grid-cols-2 items-center w-full ">
               <div className="h-48 md:h-96">
                  <Image
                     src={ser?.img}
                     alt=""
                     width={500}
                     height={500}
                     priority
                     className="object-cover object-center h-full w-full"
                  />
               </div>

               <div className="space-y-4 p-6">
                  <h1 className="text-3xl font-black">{ser.title}</h1>
                  <ul className="list-disc left-5 relative">
                     {ser.list.map((l) => (
                        <li key={l}>{l}</li>
                     ))}
                  </ul>
                  <Link href={ser.url} className="flex items-center gap-2 underline">
                     Explore full service <BsArrowRight />
                  </Link>
               </div>
            </div>
         ))}
      </div>
   );
};
