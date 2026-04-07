import Image from "next/image";
import React from "react";

export default function HomeRemoval() {
   const data = [
      {
         title: "House Clearance",
         content:
            "Our professional house clearance team offers fast and reliable house clearance services in London, removing unwanted furniture, appliances, and waste while ensuring a smooth and hassle-free property clearance.",
         image: "/house.avif",
      },
      {
         title: "Office Relocations",
         content:
            "Office RelocationsMinimize disruption to your business operations with our efficient commercial office relocation services. We plan and execute your move around your schedule to help reduce downtime and keep your business running smoothly.",
         image: "/office.avif",
      },
      {
         title: "House Removals",
         content:
            "Save time with our skilled house removals team. We carefully handle packing, loading, transportation, and the disassembly and reassembly of furniture to ensure a smooth and stress-free move to your new home.types of furniture at your new location.",
         image: "/house_remove.avif",
      },
      {
         title: "Waste Removals",
         content:
            "Our expert team provides fast and reliable waste removal services across London. We handle household items, bulky items, furniture, and general debris, ensuring everything is removed quickly and safely. Wherever possible, we prioritize responsible disposal and recycling to minimize environmental impact. With professional service and efficient clearance, we leave your property clean, clear, and clutter free.",
         image: "/waste.avif",
      },
   ];
   return (
      <div className="pb-24 px-4">
         <div className="py-32 relative">
            <div className="absolute top-0 -z-10 h-full w-full bg-[url(/removal_back.avif)] bg-cover bg-no-repeat opacity-15"></div>

            <div className="max-w-6xl mx-auto space-y-20">
               <h1 className="text-center font-black text-4xl md:text-5xl">Clearance & Removal</h1>
               <p>
                  Primecrew Ltd provides professional removals and clearance services in London for both residential and
                  commercial clients. Whether you’re planning a house move, office relocation, or property clearance,
                  our experienced team delivers reliable, efficient, and stress-free moving and clearance solutions. We
                  specialize in house removals, office removals, furniture removals, waste removal, and full property
                  clearance services in London. From single-item collections to complete house or office clearances, we
                  handle every job with care, professionalism, and attention to detail. Our team is equipped to manage
                  domestic and commercial relocations, ensuring safe handling, secure transport, and timely delivery of
                  your belongings. We also provide responsible waste disposal and eco-friendly recycling services,
                  helping you clear unwanted items quickly and sustainably. As a trusted removals and clearance company
                  in London, Primecrew Ltd is committed to delivering affordable pricing, flexible scheduling, and
                  dependable service tailored to your needs.
               </p>
            </div>
         </div>
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 space-y-6 md:space-y-0">
               {data.map((card) => (
                  <div key={card.title} className="space-y-2">
                     <div className="h-40 rounded-md overflow-hidden">
                        <Image
                           src={card.image}
                           alt=""
                           width={500}
                           height={100}
                           priority
                           className="object-cover h-full w-full object-center "
                        />
                     </div>
                     <div className="space-y-3 ">
                        <h1 className="font-bold"> {card.title}</h1>
                        <p className="text-sm">{card.content}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
