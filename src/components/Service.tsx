import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export const Service = () => {
   const servicesArray = [
      {
         title: "Removals Services",
         img: "/re.jpg",
         list: ["Home & Flat Removals", "Exterior Cleaning Services"],
         url: "/service/removal",
      },
      {
         title: "Clearance Services",
         img: "/removal.avif",
         list: [, "House & Property Clearance", "Office Relocations"],
         url: "/service/clearance",
      },
      {
         title: "Cleaning Services",
         img: "/cleaning.avif",
         list: ["Interior Cleaning Services", "Exterior Cleaning Services", "Waste Removal & Disposal"],
         url: "/service/cleaning",
      },
   ];
   return (
      <div className=" justify-center grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 bg-neutral-200/40">
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

               <div className="space-y-4 p-2">
                  <h1 className="text-xl font-black">{ser.title}</h1>
                  <ul className="list-disc left-5 relative">
                     {ser.list.map((l) => (
                        <li key={l} className="text-sm">
                           {l}
                        </li>
                     ))}
                  </ul>
                  <Link href={ser.url} className="flex items-center gap-2 hover:underline text-sm font-semibold">
                     Explore full service <BsArrowRight strokeWidth={1} />
                  </Link>
               </div>
            </div>
         ))}
      </div>
   );
};
