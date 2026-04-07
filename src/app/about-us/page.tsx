import React from "react";
import Image from "next/image";
import pic from "../../../public/about.avif";

export default function AboutUs() {
   return (
      <div className="py-24">
         <div className="max-w-6xl mx-auto py-8 md:py-32 space-y-8 relative p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
               <h1 className="text-4xl md:text-6xl font-black">
                  Reliable Removals Clearance and Cleaning Services in London with Primecrew Ltd
               </h1>
               <div className="h-96 rounded-md overflow-hidden">
                  <Image
                     src={pic}
                     alt="pic"
                     width={500}
                     height={100}
                     priority
                     className="object-cover h-full w-full object-center "
                  />
               </div>
            </div>

            <p>
               Based in the heart of London, Primecrew is a reliable local company providing professional removals,
               waste clearance, and cleaning services. Our goal is to make every job simple, efficient, and stress free
               for our customers. We specialise in house and office removals, furniture transport, and full property
               clearances. In addition, we provide professional cleaning services including gutter cleaning, roof
               cleaning, and pressure washing to help keep homes and commercial properties clean and well maintained.
               Our experienced team handles every job with care and professionalism, whether it is a single item move, a
               full house clearance, or exterior cleaning work. We arrive on time, work efficiently, and always leave
               the property clean and tidy. With fair pricing, clear communication, and a dependable approach, Primecrew
               is a trusted choice for removals, clearance, and property cleaning services across London.
            </p>
         </div>
      </div>
   );
}
