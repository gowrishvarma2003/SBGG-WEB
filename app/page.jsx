"use client"
import React from "react";
import NavBar from "./components/nav";
import About from "./components/about";
import Slider from "./components/slider";
import Services from "./components/services";
import Testimonies from "./components/testimonies";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Slider />
      <About />
      <Services />
      {/* <Testimonies /> */}
      <Contact />
      <Footer />
    </>
  );
}
