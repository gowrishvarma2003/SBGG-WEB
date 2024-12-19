"use client"
import React from "react";
import NavBar from "./components/nav";
import About from "./components/about";
import Slider from "./components/slider";
import Services from "./components/services";
import Testimonies from "./components/testimonies";
import Contact from "./components/contact";
import Footer from "./components/footer";
import PricingCard from "./components/pricing";
import Products from "./components/products";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="h-20"></div>
      <Slider />
      <About />
      <Services />
      <Products />
      <Testimonies />
      <PricingCard />
      <Contact />
      <Footer />
    </>
  );
}
