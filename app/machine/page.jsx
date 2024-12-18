'use client';
import React from "react";
import NavBar from "../components/nav";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Machine = () => {
    const machine = {
        "Product Image": "MHWFM.png",
        "Product Name": "MULTI-HEAD WEIGH FILLING MACHINE",
        "Packing Range": "20gm to 1kg, 2kg to 5kg",
        "Sealing type": "center / side seal",
        "Packing Speed": "Upto 40-100 PPM, depends on, nature of material or Heads",
        "Filling System": "Multi head weigher",
        "Pulling Mechanism": "Servo/AC Motors",
        "No. Of Heads": "10 or 14 heads",
        "Packaging Material": "Heat sealable laminated roll",
        "Sealing System": "Pneumatic/servo driven heat sealers",
        "Machine Body": "SS/MS with powder coated",
        "Product Contact Parts": "SS-304",
        "Power": "5 kw, 440v, 3 phase",
        "Control System": "PLC (Programmable logic control), schneider",
        "Temperature Control": "PID, Through PLC",
        "Unwinding System": "Motorized",
        "Compressed Air": "8 Cfm @ 6 bar",
        "Dimension (LXBXH)": "2100X1300X3000 mm (Approx)",
        "Machine Weight": "1 Tonne (Approx)",
        "Products": "Chips, Namkeen, Whole spices, Pulses, Dry fruits, Sugar, Sooji etc."
    };

    return (
        <>
            <NavBar />
            <div className="bg-gray-100 p-8">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start w-10/12 justify-center mx-auto">
                    <div className="md:w-1/2 p-4">
                        <img src={`/SAMP/${machine["Product Image"]}`} alt={machine["Product Name"]} className="w-full h-auto bg-white" />
                        <div className="flex space-x-4 pt-4 w-2/3">
                            {[...Array(5)].map((_, idx) => (
                                <img key={idx} src={`/SAMP/${machine["Product Image"]}`} alt={machine["Product Name"]} className="w-3/12 h-auto bg-white p-3" />
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
