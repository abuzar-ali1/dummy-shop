"use client";
import FeaturedCollections from "./ui/Components/FeaturedCollections";
import Header from "./ui/Components/Header";
import HeroSection from "./ui/Components/Hero";
export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <FeaturedCollections/>
   </div>
  );
}
