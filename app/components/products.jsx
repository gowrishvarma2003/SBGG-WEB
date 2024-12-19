import React, { useState } from "react";
import data from "./data.json";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const Products = () => {
	const [selectedPCategory, setSelectedPCategory] = useState("ALL"); // also: "CPOM", "NM", "SAMP"
	const products = data.products;
	const CPOMProducts = products.filter(
		(product) => product["Product Category"] == "CPOM"
	);
	const NMProducts = products.filter(
		(product) => product["Product Category"] == "NM"
	);
	const SAMPProducts = products.filter(
		(product) => product["Product Category"] == "SAMP"
	);
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
								className="w-full h-max bg-white border-t-2 border-[#4DBF38] rounded-md overflow-hidden shadow-md"
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
								<div className="bg-white w-full h-28 px-4 pb-1 flex items-start justify-between hover:bg-[#4DBF38] hover:bg-opacity-25 transition-colors duration-300">
									<div className="flex-1 h-full flex items-start justify-start text-start py-2">
										<h2 className="font-semibold text-lg text-[#052A47] line-clamp-3 pointer-events-none text-pretty">
											{product["Product Name"].toUpperCase()}
										</h2>
									</div>
								</div>
								<div className={`w-full bg-[#4DBF38] text-white hover:bg-white hover:text-black border-t hover:border-[#4DBF38] transition-all duration-300`}>
									<Link
										href={`/machine?name=${product["Product Name"]}`}
										className="z-20"
										legacyBehavior
									>
										<a className="w-full h-full flex items-center justify-center font-semibold text-lg py-2 gap-1">
											<p className="pointer-events-none">View Product</p>
											<TbExternalLink />
										</a>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
