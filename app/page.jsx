import React from "react";
import NavBar from "./components/nav";
import About from "./components/about";
import Slider from "./components/slider";

export default function Home() {
  return (
    <>
      <NavBar />
      <Slider />
      <About />
    </>
  );
}
