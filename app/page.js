"use client";
import BestSellersSection from "./ui/Components/BestSeller";
import BlogSection from "./ui/Components/BlogSection";
import CustomerReviews from "./ui/Components/CustomerReviews";
import FeaturedCollections from "./ui/Components/FeaturedCollections";
import FinalCTA from "./ui/Components/FinalCTA";
import HeroSection from "./ui/Components/Hero";
import NewArrivals from "./ui/Components/NewArrivals";
import OurTeam from "./ui/Components/OurTeam";

import WhyChooseUs from "./ui/Components/WhyChooseUs";
export default function Home() {
  return (
   <div>
    <HeroSection/>
    <FeaturedCollections/>
    <NewArrivals/>
    <BestSellersSection/>
    <CustomerReviews/>
    <WhyChooseUs/>
    <BlogSection/>
    <OurTeam/>
    <FinalCTA/>
    </div>
  );
}
