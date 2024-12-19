import { useState, useEffect } from "react";
import "./slider.css";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [fade, setFade] = useState(true);

	const slides = [
		{
			id: 1,
			image: "CPOM/WTCPOM10.png",
			alt: "Wooden Type Cold Press Oil Machine (10 Kgs)",
		},
		{
			id: 2,
			image: "NM/ANMM.png",
			alt: "Automatic Namkeen Making Machine",
		},
		{
			id: 3,
			image: "SAMP/MHWFM.png",
			alt: "Multi-Head Weigh Filling Machine",
		},
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
			setCurrentSlide(
				(prev) => (prev - 1 + slides.length) % slides.length
			);
			setFade(true);
		}, 200);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 8000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="w-full min-h-dvh flex flex-col">
			<div
				className="w-full h-full flex-1 overflow-clip"
				style={{ position: "relative" }}
			>
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
						}}
					></div>
				</div>
				<div
					className="w-full h-full flex items-center justify-center"
					style={{ zIndex: 5, position: "absolute" }}
				>
					<div
						className="w-full h-full triangle-3"
						style={{
							backgroundImage: "url(triangle_white.png)",
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
				<div className="hidden bsm:flex flex-col items-center justify-center sm:w-0 bsm:w-32 md:w-32 lg:w-48 xl:w-64 h-full flex-shrink-0 relative">
					<div
						className="w-11 h-11 transform origin-center rotate-45 bg-transparent hover:bg-[#4DBF38] transition-all duration-150 border border-white cursor-pointer relative"
						onClick={prevSlide}
					></div>
					<img
						src="left_arrow.png"
						alt="arrow left"
						className="absolute pointer-events-none"
					/>
				</div>
				<div className="h-full flex-1">
					<div className="w-full h-full flex flex-col items-center justify-center">
						<div className="h-16 flex-shrink-0"></div>
						<div className="sm:h-72 bsm:h-80 lg:h-80 xl:h-96 aspect-square flex items-center justify-center">
							<img
								src={slides[currentSlide].image}
								alt={slides[currentSlide].alt}
								className={`w-full h-full object-cover transition-opacity duration-1000 ${
									fade ? "opacity-100" : "opacity-0"
								}`}
							/>
						</div>
						<div className="w-3/4 my-3 text-center text-lg sm:text-xl bsm:2xl md:text-3xl">
							<p className="text-black font-bold text-pretty">
								{slides[currentSlide].alt.toUpperCase()}
							</p>
						</div>
						<div className="w-full h-12 flex items-center justify-center">
							{slides.map((slide) => (
								<div
									key={slide.id}
									className={`w-4 h-4 mx-1 rounded-full ${
										currentSlide === slide.id - 1
											? "bg-[#4DBF38]"
											: "bg-gray-500 opacity-50"
									} cursor-pointer`}
									onClick={() =>
										setCurrentSlide(slide.id - 1)
									}
								></div>
							))}
						</div>
					</div>
				</div>
				<div className="hidden bsm:flex flex-col items-center justify-center sm:w-0 bsm:w-32 md:w-32 lg:w-48 xl:w-64 h-full flex-shrink-0 relative">
					<div
						className="w-11 h-11 transform origin-center rotate-45 bg-transparent hover:bg-[#4DBF38] border transition-all duration-150 border-white cursor-pointer relative"
						onClick={nextSlide}
					></div>
					<img
						src="right_arrow.png"
						alt="arrow right"
						className="absolute pointer-events-none"
					/>
				</div>
			</div>
			<div className="w-full h-5 flex-shrink-0 bg-[#4DBF38]"></div>
		</div>
	);
};

export default Slider;
