import React, { useState, useEffect } from 'react';

const Testimonies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const testimonies = [
    {
      id: 1,
      text: "As the Director of Shripanchami Global Gears, Bokkasam Rupa Jyothi brings years of leadership and strategic vision to the company. With a deep understanding of the machinery industry and a commitment to operational excellence, Rupa Jyothi plays a pivotal role in driving the company’s growth and ensuring that the organization remains at the forefront of technological innovation. She is dedicated to fostering an environment of teamwork, collaboration, and continuous improvement, ensuring that Shripanchami Global Gears delivers high-quality products and services to clients worldwide.",
      name: "Rupa Jyothi Bokkasam",
      role: "Director",
    }
  ];


  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonies.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Automatically change slides every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-cover bg-center h-screen justify-center" style={{ backgroundImage: "url('/testimonials_background.png')" }}>
      <div className="absolute inset-0 bg-white opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center h-full text-black">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 pt-20" style={{ color: '#4DBF38' }}>Testimonials</h1>
        <img src="/logos/testimonies.png" alt="Testimonials Logo" className="w-10 pt-10" />
        <div className="relative h-full w-1/2 flex flex-col items-center justify-start mt-8">
          <div className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <p className="sm:text-sm bsm:text-base lg:text-lg text-center pt-4 h-72 bsm:h-56 overflow-y-scroll pr-3 thin-scrollbar" style={{ color: '#7F7F7F' }}>
              {testimonies[currentSlide].text}
            </p>
            <h2 className="text-lg font-bold text-center pt-4 mt-4" style={{ color: '#052A47' }}>
              {testimonies[currentSlide].name}
            </h2>
            <p className="text-center" style={{ color: '#7F7F7F' }}>{testimonies[currentSlide].role}</p>
          </div>
          <div className="w-full flex justify-center mt-8">
            {testimonies.map((testimony, index) => (
              <div
                key={testimony.id}
                className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#4DBF38]' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
