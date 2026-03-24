import React from "react";
import HeroSection from "../hero-section";
import Clients from "../clients";
import Community from "../community";

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <Clients />
      <Community />
    </div>
  );
}

export default Home;
