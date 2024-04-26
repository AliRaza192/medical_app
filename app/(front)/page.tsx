import DoctersList from "@/components/DoctersList";
import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import MegaMenu from "@/components/Frontend/MegaMenu";
import TabbedSection from "@/components/Frontend/TabbedSection";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <TabbedSection />
      <DoctersList />
      <DoctersList
        className="bg-white py-8 lg:py-24"
        title="In-Person Doctor Visit"
        isInPerson={true}
      />
    </section>
  );
}
