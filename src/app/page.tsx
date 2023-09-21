import { Cont } from "@/components/Cont";
import Gallery from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero1 } from "@/components/Hero1";
import { Hero2 } from "@/components/Hero2";
import Participant from "@/components/Participant";
import Team from "@/components/team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero1 />
      <Hero2 />
      <Cont />
      <Participant />
      <Gallery />
      <Team />
    </div>
  );
}
