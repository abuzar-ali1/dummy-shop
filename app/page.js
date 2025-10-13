"use client";
import BestSellersSection from "./ui/Components/BestSeller";
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
    <BestSellersSection/>
    </div>
  );
}
