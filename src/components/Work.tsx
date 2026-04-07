import React from "react";

export const Work = () => {
   return (
      <div className="p-4 lg:px-24 py-24 flex flex-col justify-center items-center gap-8">
         <h1 className="text-center uppercase text-[#015fab] font-semibold">London Removals and Storage Services</h1>
         <h1 className="text-3xl lg:text-[2.5rem] font-bold text-center">
            How <span className="font-black">Primecrew </span> Service Works
         </h1>
         <p>
            Moving a sofa down the street or a whole house across the country? No matter what, Primecrew man and van
            service includes:
         </p>

         <div className="w-[90%] grid lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
               <h1 className="text-xl font-semibold">💰 Price match guarantee</h1>
               <p>
                  Customers can save up to 40% with Primecrew, but if you find a better price let us know and we&apos;ll
                  beat it!
               </p>
            </div>
            <div className="flex flex-col gap-2">
               <h1 className="text-xl font-semibold">✅ Free cancellations</h1>
               <p>
                  Plans changed? Edit or cancel your booking up to 48 hours before your move, with pay nothing until 3
                  days before
               </p>
            </div>
            <div className="flex flex-col gap-2">
               <h1 className="text-xl font-semibold"> 📆 Flexible move dates</h1>
               <p>
                  With over 5,000 transport partners we have the best man and van availability, making sure your move
                  happens!
               </p>
            </div>
         </div>
         {/* <Button title="Learn more" variant="outline" className="!w-fit" /> */}
      </div>
   );
};
