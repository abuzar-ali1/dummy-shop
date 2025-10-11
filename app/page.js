"use client";
import FeaturedCollections from "./ui/Components/FeaturedCollections";
import Header from "./ui/Components/Header";
import HeroSection from "./ui/Components/Hero";
import NewArrivals from "./ui/Components/NewArrivals";
export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <FeaturedCollections/>
    <NewArrivals/>
    </div>
  );
}
