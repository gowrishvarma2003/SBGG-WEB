import React from "react";
import NavBar from "../components/nav";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Machine = () => {
    return (
        <>
            <NavBar />
            <div className="bg-gray-100 p-8">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start w-10/12 justify-center mx-auto">
                    <div className="md:w-1/2 p-4 ">
                        <img src="/SAMP/vcs.png" alt="Vertical Continuous Sealer" className="w-full h-auto bg-white" />
                        <div className="flex space-x-4 pt-4 w-2/3">
                            <img src="/SAMP/vcs.png" alt="Vertical Continuous Sealer" className="w-4/12 h-auto bg-white p-3" />
                            <img src="/SAMP/vcs.png" alt="Vertical Continuous Sealer" className="w-3/12 h-auto bg-white p-3" />
                            <img src="/SAMP/vcs.png" alt="Vertical Continuous Sealer" className="w-3/12 h-auto bg-white p-3" />
                            <img src="/SAMP/vcs.png" alt="Vertical Continuous Sealer" className="w-3/12 h-auto bg-white p-3" />
                            <img src="/SAMP/vcs.png" alt="Vertical Continuous Sealer" className="w-3/12 h-auto bg-white p-3" />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4 pt-16 pl-16">
                        <h1 className="text-4xl font-semibold mb-4" style={{ color: '#052A47' }}>Vertical Continuous Sealer</h1>
                        <p className="mb-4 w-1/2 font-bold" style={{ color: '#052A47' }}>
                            Products: Pulse, Whole spices, Tea, Coffee powder, Detergent Powders, and all types of Granular products, etc.
                        </p>
                        <p className="mb-4 w-3/4" style={{ color: '#7F7F7F' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </p>
                        <div className="flex space-x-4 pt-10">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">View More Details</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">Get Best Quote</button>
                        </div>
                    </div>
                </div>

                {/* Product Specification Table */}
                <div className="mt-8 bg-white p-6 shadow-lg rounded-lg w-2/3 justify-center mx-auto">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: '#052A47' }}>Product Specification</h2>
                    <table className="w-full border-collapse border border-gray-200">
                        <tbody>
                            {/* Specification Rows */}
                            {[
                                { title: "Packing Range", value: "10gm to 100gm, 100gm to 250gm, 250gm to 1kg" },
                                { title: "Sealing Type", value: "Center Seal" },
                                { title: "Filling Accuracy", value: "+2%" },
                                { title: "Filling System", value: "Volumetric cup filler telescope adjustment" },
                                { title: "Packaging Material", value: "Heat sealable laminated roll" },
                                { title: "Sealing System", value: "Pneumatic/servo driven heat sealers" },
                                { title: "Machine Body", value: "SS-304" },
                                { title: "Product Contact Parts", value: "SS-304" },
                                { title: "Power", value: "5 kw, 440v, 3 phase" },
                                { title: "Control System", value: "PLC (Programmable logic control) schneider" },
                                { title: "Temperature Control", value: "PID, Through PLC" },
                                { title: "Unwinding System", value: "Motorized" },
                                { title: "Compressed Air", value: "8cfm@ 4 bar" },
                                { title: "Control System", value: "900×900×1800 MM (Approx)" },
                                { title: "Machine Weight", value: "400kgs (Approx.)" }
                            ].map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="p-3 font-semibold text-gray-700">{item.title}</td>
                                    <td className="p-3 text-gray-600">{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
}

export default Machine;
