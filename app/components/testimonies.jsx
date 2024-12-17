import React, { useState, useEffect } from 'react';

const Testimonies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const testimonies = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "CRAIG",
      role: "Businessman",
    },
    {
      id: 2,
      text: "This is an amazing product! It has significantly improved our productivity and workflow. Highly recommended for businesses of all sizes. With its intuitive design and robust features, it allows users to accomplish tasks more efficiently. I was particularly impressed with the attention to detail and the customer support, which ensured we had a seamless experience. This product is truly a testament to excellent craftsmanship and innovation.",
      name: "SARAH",
      role: "Entrepreneur",
    },
    {
      id: 3,
      text: "A game-changer in the industry! The functionality and design are top-notch. Truly a remarkable innovation. It's not just a product; it's a solution that addresses real-world problems effectively. We've seen a dramatic increase in productivity and a decrease in operational costs since adopting it. The team behind this is clearly committed to quality and excellence, making it an essential part of any modern business strategy.",
      name: "JAMES",
      role: "CEO",
    },
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
