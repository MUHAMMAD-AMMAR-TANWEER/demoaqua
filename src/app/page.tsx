import { Cont } from "@/components/Cont";
import { Header } from "@/components/Header";
import { Hero1 } from "@/components/Hero1";
import { Hero2 } from "@/components/Hero2";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero1 />
      <Hero2 />
      <Cont />
    </div>
  );
}
