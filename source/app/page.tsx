import { Hero } from "@/components/Hero";
import Map from "@/components/Map"


export default function Home() {
  return (
   <div className="flex p-8">
    <Map/>
    <Hero/>
   </div>
  );
}
