'use client';
import React from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "../components/nav";
import Contact from "../components/contact";
import Footer from "../components/footer";
import data from "../components/data.json";

const Machine = () => {
    const searchParams = useSearchParams();
    const machineId = searchParams.get("name");
    console.log(machineId);

    const machine = data.products.find((product) => product["Product Name"] === machineId);

    return (
        <>
            <NavBar />
            <div className="bg-gray-100 p-8">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start w-10/12 justify-center mx-auto">
                    <div className="md:w-1/2 p-4">
                        <img src={`/${machine['Product Category']}/${machine["Product Image"]}`} alt={machine["Product Name"]} className="w-full h-auto bg-white" />
                        <div className="flex space-x-4 pt-4 w-2/3">
                            {[...Array(5)].map((_, idx) => (
                                <img key={idx} src={`/${machine["Product Category"]}/${machine["Product Image"]}`} alt={machine["Product Name"]} className="w-3/12 h-auto bg-white p-3" />
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4 pt-16 pl-16">
                        <h1 className="text-4xl font-semibold mb-4" style={{ color: '#052A47' }}>{machine["Product Name"]}</h1>
                        <p className="mb-4 w-1/2 font-bold" style={{ color: '#052A47' }}>
                            Products: {machine["Products"]}
                        </p>
                        <div className="flex space-x-4 pt-10">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">View More Details</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">Get Best Quote</button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white p-6 shadow-lg rounded-lg w-2/3 justify-center mx-auto">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: '#052A47' }}>Product Specification</h2>
                    <table className="w-full border-collapse border border-gray-200">
                        <tbody>
                            {Object.entries(machine).map(([key, value], index) => {
                                if (key === "Product Image" || key === "Product Name" || key === "Products") {
                                    return null;
                                }
                                return (
                                    <tr key={index} className="border-b border-gray-200">
                                        <td className="p-3 font-semibold text-gray-700">{key}</td>
                                        <td className="p-3 text-gray-600">{value}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
};

export default Machine;
