import React, { useState } from "react";
import data from "./data.json";
import Link from "next/link";

const Products = () => {
	const [selectedPCategory, setSelectedPCategory] = useState("ALL"); // also: "CPOM", "NM", "SAMP"
	const products = data.products;
	const CPOMProducts = products.filter((product) => product['Product Category'] == 'CPOM');
	const NMProducts = products.filter((product) => product['Product Category'] == 'NM');
	const SAMPProducts = products.filter((product) => product['Product Category'] == 'SAMP');
	const allProducts = [...CPOMProducts, ...NMProducts, ...SAMPProducts];

	const productsToShow =
		selectedPCategory === "ALL"
			? allProducts
			: selectedPCategory === "CPOM"
			? CPOMProducts
			: selectedPCategory === "NM"
			? NMProducts
			: SAMPProducts;

	return (
		<div className="w-full min-h-dvh flex flex-col">
			<div
				className="w-full h-full flex-1 overflow-clip"
				style={{ position: "relative" }}
			>
				<div
					className="w-full h-full blur-md"
					style={{
						backgroundImage: "url(factory1.png)",
						backgroundSize: "cover",
						backgroundPosition: "center",
						zIndex: 1,
						position: "absolute",
					}}
				></div>
				<div
					className="w-full h-full bg-[#052A47] opacity-65"
					style={{ zIndex: 2, position: "absolute" }}
				></div>
				<div className="w-full flex flex-col items-center h-full p-8 absolute z-10">
					<div className="w-full flex justify-center text-center">
						<h1
							className="text-2xl lg:text-3xl xl:text-4xl mb-4 pb-4"
							style={{ color: "#4DBF38" }}
						>
							OUR<span className="font-bold pl-2">PRODUCTS</span>
						</h1>
					</div>
					<div className="w-full flex justify-center text-center">
						<p className="w-3/4 sm:text-sm md:text-base lg:text-lg xl:text-xl text-center text-white">
							Shripanchami Global Gears specializes in providing
							high-quality machinery solutions, including oil
							packing machines, namkeen packing machines, and a
							wide range of other packaging equipment. Our mission
							is to deliver efficient, reliable, and
							cost-effective solutions to streamline your
							packaging processes.
						</p>
					</div>
					<div className="w-full flex flex-wrap justify-center items-center gap-2 my-4 text-base lg:text-lg xl:text-xl">
						<div
							className={`${
								selectedPCategory == "ALL"
									? "bg-[#4DBF38] text-white font-semibold"
									: "bg-white text-[#4DBF38]"
							} w-auto py-2 px-6 cursor-pointer transition-all duration-300 rounded-sm`}
							onClick={() => setSelectedPCategory("ALL")}
						>
							All Machines
						</div>
						<div
							className={`${
								selectedPCategory == "CPOM"
									? "bg-[#4DBF38] text-white font-semibold"
									: "bg-white text-[#4DBF38]"
							} w-auto py-2 px-6 cursor-pointer transition-all duration-300 rounded-sm`}
							onClick={() => setSelectedPCategory("CPOM")}
						>
							Packing Machines
						</div>
						<div
							className={`${
								selectedPCategory == "NM"
									? "bg-[#4DBF38] text-white font-semibold"
									: "bg-white text-[#4DBF38]"
							} w-auto py-2 px-6 cursor-pointer transition-all duration-300 rounded-sm`}
							onClick={() => setSelectedPCategory("NM")}
						>
							Namkeen Machines
						</div>
						<div
							className={`${
								selectedPCategory == "SAMP"
									? "bg-[#4DBF38] text-white font-semibold"
									: "bg-white text-[#4DBF38]"
							} w-auto py-2 px-6 cursor-pointer transition-all duration-300 rounded-sm`}
							onClick={() => setSelectedPCategory("SAMP")}
						>
							Oil Machines
						</div>
					</div>
					<div className="w-5/6 flex-1 overflow-y-scroll thin-scrollbar pr-6 grid grid-cols-1 bsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{productsToShow.map((product, index) => (
							<div
								key={index}
								className="w-full h-max bg-white rounded-md overflow-hidden shadow-md"
							>
								<img
									src={
										product["Product Category"] +
										"/" +
										product["Product Image"]
									}
									alt={product["Product Name"]}
									className="w-full h-48 object-contain my-5"
								/>
								<div className="w-full border-t-2 border-neutral-300 mt-5"></div>
								<div className="w-full h-full px-4 pb-1 flex items-start justify-between hover:bg-[#4DBF38] hover:bg-opacity-25 transition-colors duration-300">
									<div className="flex-1 h-full flex items-start justify-start text-start pr-2 py-2">
										<h2 className="text-lg font-semibold text-[#052A47] line-clamp-4 pointer-events-none">
											{product["Product Name"]}
										</h2>
									</div>
									<div className="w-14 h-36 flex items-start justify-center py-2 relative">
										<Link
											href={`/machine?name=${product["Product Name"]}`}
											className="z-20"
										>
											<div className="w-14 h-14 flex justify-center items-center rounded-full border border-[#4DBF38] bg-[#4DBF38] hover:bg-white bg-opacity-25 cursor-pointer relative z-30">
												<img
													src="cross_arrow.png"
													alt="arrow cross"
													className="relative w-7 h-7 z-40"
												/>
											</div>
										</Link>
									</div>
								</div>
								<div className="w-full h-3 bg-[#4DBF38]"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
