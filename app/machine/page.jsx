"use client";
import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "../components/nav";
import Contact from "../components/contact";
import Footer from "../components/footer";
import data from "../components/data.json";

const Machine = () => {
	const searchParams = useSearchParams();
	const machineId = searchParams.get("name");

	const machine = data.products.find(
		(product) => product["Product Name"] === machineId
	);


    if (!machine) {
        return (
            <div className="w-full min-h-dvh flex justify-center items-center">
                <p className="text-gray-700 text-lg">Machine not found.</p>
            </div>
        );
    }

	// Ref for specification scrolling
	const specRef = useRef(null);

	// Scroll handler for specification
	const scrollToSpec = () => {
		specRef.current.scrollIntoView({ behavior: "smooth" });
	};

	// Redirect to WhatsApp
	const redirectToWhatsApp = () => {
		const phoneNumber = "6303635448"; // Replace with your WhatsApp number
		const message = `Hello, I am interested in the ${machine["Product Name"]}. Can you provide more details?`;
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.location.href = url;
	};

	return (
		<div className="w-full min-h-dvh">
			<NavBar />
			<div className="h-56 bsm:h-40 lg:h-28 bg-gray-100"></div>
			<div className="w-full bg-gray-100 mb-10">
				<div className="flex flex-col md:flex-row items-center md:items-start w-10/12 justify-center mx-auto md:gap-x-8">
					<div className="w-full bsm:3/4 md:w-1/2 lg- flex justify-center items-center bg-gray-200 rounded-xl">
						<img
							src={`/${machine["Product Category"]}/${machine["Product Image"]}`}
							alt={machine["Product Name"]}
							className="w-56 bsm:w-72 h-auto rounded-lg"
						/>
					</div>
					<div className="w-full flex flex-col justify-center items-start md:w-1/2 pt-8 bsm:pt-12 lg:pl-16">
						<h1
							className="text-xl bsm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
							style={{ color: "#052A47" }}
						>
							{machine["Product Name"]}
						</h1>
						{machine["Products"] ? (
							<p
								className="mb-4 w-1/2 font-bold"
								style={{ color: "#052A47" }}
							>
								Products: {machine["Products"]}
							</p>
						) : null}

						<div className="w-full flex lg:gap-x-4 gap-y-4 pt-4 flex-col lg:flex-row text-sm bsm:text-base">
							<button
								onClick={scrollToSpec}
								className="shadow-md hover:bg-blue-500 hover:text-white text-blue-500 bg-white transition-all duration-200 delay-100 px-4 py-2 rounded-lg"
							>
								View More Details
							</button>
							<button
								onClick={redirectToWhatsApp}
								className="shadow-md hover:bg-green-500 hover:text-white text-green-500 bg-white transition-all duration-200 delay-100 px-4 py-2 rounded-lg"
							>
								Get Best Quote
							</button>
						</div>
					</div>
				</div>

				<div
					ref={specRef}
					className="mt-8 bg-white p-6 shadow-lg rounded-lg w-10/12 justify-center mx-auto"
				>
					<h2 className="text-2xl font-bold mb-4 bg-neutral-900 px-2 py-1 text-white rounded-t-lg">
						Product Specification
					</h2>
					<table className="w-full border-collapse border border-gray-200">
						<tbody>
							{Object.entries(machine).map(([key, value], index) => {
								if (
									key === "Product Image" ||
									key === "Product Name" ||
									key === "Products"
								) {
									return null;
								}
								return (
									<tr key={index} className="border-b border-gray-200">
										<td className="p-3 font-bold text-gray-700 text-sm bsm:text-base">
											{key}
										</td>
										<td className="p-3 text-gray-600 text-sm bsm:text-base">
											{value}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
			<Contact />
			<Footer />
		</div>
	);
};

export default Machine;
