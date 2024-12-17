"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Services = () => {
	const [hoveredIndex, setHoveredIndex] = React.useState(null);

	useEffect(() => {
		AOS.init({
			duration: 500, // Animation duration in ms
			once: true,
		});
	}, []);

	const services = [
		{
			img: "/logos/expert.png",
			title: "Our Expertise",
			description:
				"Comprehensive Solutions for Packaging and Machinery Excellence",
		},
		{
			img: "/logos/design.png",
			title: "Human-Centric Machine Design",
			description:
				"Creating Solutions for Packaging and Machinery Excellence",
		},
		{
			img: "/logos/innovate.png",
			title: "Innovative Machine Interfaces",
			description:
				"Designing User-Friendly Control Systems for Seamless Workflow",
		},
		{
			img: "/logos/package.png",
			title: "Packaging and Marketing Assistance",
			description:
				"Helping Clients Effectively Market Products with Advanced Machinery",
		},
		{
			img: "/logos/view.png",
			title: "Digital Presence Enhancement",
			description:
				"Optimizing Online Visibility for Packaging Businesses",
		},
		{
			img: "/logos/monitor.png",
			title: "Smart Monitoring Tools",
			description:
				"Leveraging Android Apps for Enhanced Machinery Control",
		},
	];

	return (
		<div className="w-full p-8 flex flex-col justify-center items-center mb-8">
			<h1 className="text-2xl lg:text-3xl xl:text-4xl" style={{ color: "#4DBF38" }}>
				ABOUT<span className="font-bold pl-4">US</span>
			</h1>
			<p
				className="justify-center text-center bsm:w-3/4 sm:text-base bsm:text-lg md:text-xl lg:text-2xl mt-4 pt-4 mb-10"
				style={{ color: "#7F7F7F" }}
			>
				Shripanchami Global Gears specializes in providing high-quality
				machinery solutions, including oil packing
				machines, namkeen packing machines, and a wide range of other
				packaging equipment. Our mission is to 
				deliver efficient, reliable, and cost-effective solutions to
				streamline your packaging processes.
			</p>
			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				style={{ width: "80%" }}
                data-aos="fade-up"
			>
				{services.map((service, index) => (
					<div
						key={index}
						
						data-aos-delay={index * 10}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
						className={`${hoveredIndex == index ? 'bg-[#4DBF38]' : 'bg-white'} py-6 px-6 shadow-lg text-left relative transform transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl rounded-t-md`}
					>
						<div className="w-14 h-12 py-10 border border-[#4DBF38] flex justify-center items-center rounded-lg bg-white">
							<img
								src={service.img}
								alt=""
								className="w-10"
							/>
						</div>

						<hr className="border-gray-300 my-4" />
						<h2 className={`${hoveredIndex == index ? 'text-white' : 'text-black'} text-lg lg:text-xl xl:text-2xl font-semibold mb-2 pt-0`}>
							{service.title}
						</h2>
						<p
							className={`${hoveredIndex == index ? 'text-gray-200 opacity-90' : 'text-gray-700'} text-sm lg:text-base xl:text-lg pb-12`}
							style={{ width: "85%" }}
						>
							{service.description}
						</p>
						<div className="absolute bottom-0 left-0 w-full h-2 bg-[#4DBF38]"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
