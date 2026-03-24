import Body from "@/components/sections/body";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Home from "@/components/sections/home";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <Home />
      <div className="mt-15.5">
        <Body />
      </div>
      <div className="mt-[94px]">
        <Footer />
      </div>
    </div>
  );
}

export default page;
