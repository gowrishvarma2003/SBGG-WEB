import React from "react";

const About = () => {
	return (
		<>
			<div className="relative min-h-dvh">
				<div
					className="bg-cover bg-center h-full bg-gray-100 relative"
					style={{ backgroundImage: 'url("/Frame.png")' }}
				>
					<div className="flex flex-col items-center h-full p-8">
						<h1
							className="text-xl sm:text-xl bsm:text-2xl lg:text-3xl xl:text-4xl mb-4 pb-4"
							style={{ color: "#4DBF38" }}
						>
							ABOUT<span className="font-bold pl-4">US</span>
						</h1>
						<p
							className="bsm:w-3/4 sm:text-base bsm:text-lg md:text-xl lg:text-2xl text-center"
							style={{ color: "#052A47" }}
						>
							India's leading Manufacturer & Exporter of Oil
							extraction
							machinery, Food Processing Machinery and Packing
							machineries also
						</p>
						<p
							className="
                            bsm:w-5/6
                            justify-center text-center text-pretty 
                            text-ssm bsm:text-sm md:text-base lg:text-lg my-4 
                            pt-8 pb-20 bsm:pb-36 lg:pb-48
                            "
							style={{ color: "#7F7F7F" }}
						>
							Shripanchami Global Gears specializes in providing
							high-quality machinery solutions, including oil
							packing machines,
							namkeen packing machines, and a wide range of other
							packaging equipment. Our mission is to deliver
							efficient,
							reliable, and cost-effective solutions to streamline
							your packaging processes. We cater to industries
							looking to 
							optimize their production lines with cutting-edge
							technology and exceptional customer support. Partner
							with
							Shripanchami Global Gears for innovative machinery
							that drives your business forward.
						</p>
						<div
							className="
                        absolute w-full bottom-0 
                        translate-y-20 bsm:translate-y-28 lg:translate-y-32
                        rounded-lg p-2 mx-auto z-20 flex justify-center items-center"
						>
							<img
								src="/about.png"
								alt="Description of image"
								className="sm:w-56 bsm:w-72 md:w-80 lg:w-96 h-auto rounded-lg"
								style={{ objectFit: "contain" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
