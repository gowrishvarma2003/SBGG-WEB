import React from "react";

// Pricing Section Component
const Pricing = () => {
    return (
        <section className="py-12 bg-gray-100 item">
            <h1 className="text-4xl font-bold text-center mb-10" style={{ color: '#4DBF38' }}>PRICING</h1>
            <div className="flex justify-center items-center" style={{ width: '100%' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                    {/* STARTER Plan */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                        <div className="mb-4">
                            <h2 className="text-4xl font-bold" style={{ color: '#4DBF38' }}>$39<span className="text-lg">/month</span></h2>
                            <h3 className="text-2xl font-semibold mt-2 uppercase">STARTER</h3>
                        </div>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>1 Machine Setup</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>100KG Capacity</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Standard Maintenance Plan</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Access to basic training model</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Shared Support Assistance</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>24/7 Support</li>
                            <hr className="border-grey-300 py-1" />
                        </ul>
                        <button className="w-full py-2 rounded hover:bg-green-700 transition-colors" style={{ backgroundColor: '#4DBF38', color: 'white' }}>ORDER NOW →</button>
                    </div>

                    {/* BUSINESS Plan */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                        <div className="mb-4">
                            <h2 className="text-4xl font-bold" style={{ color: '#4DBF38' }}>$69<span className="text-lg">/month</span></h2>
                            <h3 className="text-2xl font-semibold mt-2 uppercase">BUSINESS</h3>
                        </div>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>1 Machine Setup</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>100KG Capacity</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Standard Maintenance Plan</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Access to basic training model</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Shared Support Assistance</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>24/7 Support</li>
                            <hr className="border-grey-300 py-1" />
                        </ul>
                        <button className="w-full py-2 rounded hover:bg-green-700 transition-colors" style={{ backgroundColor: '#4DBF38', color: 'white' }}>ORDER NOW →</button>
                    </div>

                    {/* PRO Plan */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                        <div className="mb-4">
                            <h2 className="text-4xl font-bold" style={{ color: '#4DBF38' }}>$99<span className="text-lg">/month</span></h2>
                            <h3 className="text-2xl font-semibold mt-2 uppercase">PRO</h3>
                        </div>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>1 Machine Setup</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>100KG Capacity</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Standard Maintenance Plan</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Access to basic training model</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Shared Support Assistance</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>24/7 Support</li>
                            <hr className="border-grey-300 py-1" />
                        </ul>
                        <button className="w-full py-2 rounded hover:bg-green-700 transition-colors" style={{ backgroundColor: '#4DBF38', color: 'white' }}>ORDER NOW →</button>
                    </div>

                    {/* ULTRA Plan */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                        <div className="mb-4">
                            <h2 className="text-4xl font-bold" style={{ color: '#4DBF38' }}>$199<span className="text-lg">/month</span></h2>
                            <h3 className="text-2xl font-semibold mt-2 uppercase">ULTRA</h3>
                        </div>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>1 Machine Setup</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>100KG Capacity</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Standard Maintenance Plan</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Access to basic training model</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>Shared Support Assistance</li>
                            <hr className="border-grey-300 py-1" />
                            <li className="flex items-left gap-2"><span className="font-bold"><img src="/logos/check.png" alt="" style={{ color: '#4DBF38' }} /></span>24/7 Support</li>
                            <hr className="border-grey-300 py-1" />
                        </ul>
                        <button className="w-full py-2 rounded hover:bg-green-700 transition-colors" style={{ backgroundColor: '#4DBF38', color: 'white' }}>ORDER NOW →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
