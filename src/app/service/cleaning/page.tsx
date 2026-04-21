import React from "react";
import Image from "next/image";

export default function Cleaning() {
   const data = [
      {
         title: "Pressure Washing",
         content:
            "Our professional pressure washing service in London removes stubborn dirt, moss, algae, and grime from driveways, patios, walls, pathways, and exterior surfaces. Using powerful, professional equipment, Primecrew restores the appearance of your property and helps protect surfaces from long-term damage. Our pressure washing service is ideal for both residential and commercial properties looking for a deep, effective exterior clean.",
         image: "/washing.avif",
      },
      {
         title: "Gutter Cleaning & Maintenance",
         content:
            "Gutter Cleaning & MaintenancePrimecrew provides reliable gutter cleaning and gutter maintenance services across London to keep your property protected from water damage. Our team removes leaves, debris, moss, and blockages to ensure rainwater flows properly through your gutter system. Regular gutter cleaning helps prevent leaks, damp issues, and costly repairs while keeping your property safe and well maintained.",
         image: "/gutter.avif",
      },
      {
         title: "Roof Cleaning",
         content:
            "Our roof cleaning service helps remove moss, algae, lichen, and dirt that build up over time on residential and commercial roofs. Primecrew uses safe and effective cleaning methods to restore the appearance of your roof while helping extend its lifespan. Professional roof cleaning also improves drainage and protects your property from potential roof damage.",
         image: "/roof.avif",
      },
      {
         title: "Window Cleaning",
         content:
            "Our window cleaning service keeps your property looking bright, clear, and well-maintained. We remove dirt, streaks, and buildup from all types of windows, leaving a spotless, streak-free finish inside and out. Whether for residential or commercial properties, we deliver reliable, high-quality results that enhance both appearance and natural light.",
         image: "/window.webp",
      },
      {
         title: "Soft washing",
         content:
            "Our soft washing service safely removes dirt, algae, mold, and stains from exterior surfaces without causing damage. Using low-pressure cleaning methods and effective treatments, we restore the look of your walls, roofs, driveways, and other surfaces while protecting their condition. It’s a gentle yet powerful solution for long-lasting cleanliness and curb appeal.",
         image: "/soft.webp",
      },
   ];
   return (
      <div className="pb-24">
         <div className="py-32 relative">
            <div className="absolute top-0 -z-10 h-full w-full bg-[url(/clean.avif)] bg-cover bg-no-repeat opacity-15"></div>
            <div className="max-w-6xl mx-auto space-y-20 p-4">
               <h1 className="text-center font-black text-4xl md:text-5xl">Exterior and Interior Cleaning Solutions</h1>
               <p>
                  Our professional exterior and interior cleaning services in London help keep residential and
                  commercial properties clean, safe, and well-maintained all year round. At Primecrew Ltd, we provide
                  reliable pressure washing, roof cleaning, gutter cleaning, gutter maintenance, and house cleaning
                  services, tailored to meet your property’s needs. Whether you need driveway pressure washing, patio
                  cleaning, roof moss removal, blocked gutter cleaning, or deep interior house cleaning, our experienced
                  team uses advanced and effective cleaning methods to remove dirt, moss, algae, mould, and built-up
                  grime. We specialize in restoring the appearance of your property while helping to prevent long-term
                  structural damage. Our affordable and professional cleaning services in London are designed for both
                  homeowners and businesses looking for trusted, high-quality cleaning solutions. With flexible
                  scheduling, competitive pricing, and dependable service, Primecrew Ltd is your go-to choice for
                  exterior cleaning, interior cleaning, and full property maintenance in London.
               </p>
            </div>
         </div>
         <div className="max-w-6xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 space-y-6 md:space-y-0">
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
                     <div className="md:h-80 space-y-3">
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
