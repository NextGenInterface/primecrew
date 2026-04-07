import { WhatWeDo } from "@/components/WhatWeDo";
import { Hero } from "../components/Hero";
import { Service } from "@/components/Service";
import { Work } from "@/components/Work";

export default function Home() {
   return (
      <>
         <Hero />
         <Service />
         <Work />
         <WhatWeDo />
      </>
   );
}
