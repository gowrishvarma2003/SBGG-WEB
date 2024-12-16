import { useState, useEffect } from "react";
import './slider.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const slides = [
    { id: 1, image: "CPOM/WTCPOM10.png", alt: "Wooden Type Cold Press Oil Machine (10 Kgs)" },
    { id: 2, image: "NM/ANMM.png", alt: "Automatic Namkeen Making Machine" },
    { id: 3, image: "SAMP/MHWFM.png", alt: "Multi-Head Weigh Filling Machine" },
  ];

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 200);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full min-h-dvh flex flex-col">
      <div className="w-full h-full flex-1 overflow-clip" style={{ position: "relative" }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(factory1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            position: "absolute",
          }}
        ></div>
        <div
          className="w-full h-full bg-gradient-to-t from-sky-800 to-transparent opacity-80"
          style={{ zIndex: 2, position: "absolute" }}
        ></div>
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ zIndex: 3, position: "absolute" }}
        >
          <div
            className="w-full h-full triangle-animation triangle-1"
            style={{
              backgroundImage: "url(triangle_white.png)",
              backgroundSize: "100% 160%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.25,
              transform: "translateX(-1%)",
            }}
          ></div>
        </div>
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ zIndex: 4, position: "absolute" }}
        >
          <div
            className="w-full h-full triangle-animation triangle-2"
            style={{
              backgroundImage: "url(triangle_green.png)",
              backgroundSize: "90% 140%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          ></div>
        </div>
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ zIndex: 5, position: "absolute" }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url(triangle_white.png)",
              backgroundSize: "80% 120%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 1,
            }}
          ></div>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-auto flex justify-between items-center"></div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-full flex"
        style={{ zIndex: 5, position: "absolute" }}
      >
        <div className="w-64 h-full flex-shrink-0 flex flex-col items-center justify-center relative">
          <div className="w-11 h-11 transform origin-center rotate-45 bg-transparent hover:bg-[#4DBF38] border border-white cursor-pointer relative"
          onClick={prevSlide}></div>
          <img
            src="left_arrow.png"
            alt="arrow left"
            className="absolute pointer-events-none"
          />
        </div>
        <div className="h-full flex-1">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="h-96 aspect-square flex items-center justify-center">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            {/* display name of it */}
            <div className="w-full h-12 flex items-center justify-center my-3">
              <h1 className="text-black text-3xl font-bold">{slides[currentSlide].alt.toUpperCase()}</h1>
            </div>
            <div className="w-full h-12 flex items-center justify-center">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className={`w-3 h-3 mx-1 rounded-full ${currentSlide === slide.id - 1 ? 'bg-[#4DBF38]' : 'bg-white'} border border-gray-700 cursor-pointer`}
                  onClick={() => setCurrentSlide(slide.id - 1)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-64 h-full flex-shrink-0 flex flex-col items-center justify-center">
          <div className="w-11 h-11 transform origin-center rotate-45 bg-transparent hover:bg-[#4DBF38] border border-white cursor-pointer relative"
          onClick={nextSlide}></div>
          <img
            src="right_arrow.png"
            alt="arrow right"
            className="absolute z-1 pointer-events-none"
          />
        </div>
      </div>
      <div className="w-full h-5 flex-shrink-0 bg-[#4DBF38]"></div>
    </div>
  );
};

export default Slider;
