"use client"
import React, {useEffect} from "react";
import NavBar from "./components/nav";
import About from "./components/about";
import Slider from "./components/slider";
import Services from "./components/services";
import Testimonies from "./components/testimonies";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Products from "./components/products";


export default function Home() {

  return (
    <>
      <NavBar />
      <div className="h-16 lg:h-20"></div>
      <div id="slider"><Slider /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="products"><Products /></div>
      <div id="testimonies"><Testimonies /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
