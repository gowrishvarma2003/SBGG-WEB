'use client';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: true, // Run animation only once
        });
    }, []);

    return (
        <div className="container mx-auto p-8 flex flex-col items-center mb-8">
            <h1 className="text-4xl" style={{ color: '#4DBF38' }}>
                ABOUT<span className="font-bold pl-4">US</span>
            </h1>
            <p
                className="justify-center text-center text-lg mt-4 pt-4 mb-10"
                style={{ color: '#7F7F7F' }}
            >
                Shripanchami Global Gears specializes in providing high-quality machinery solutions, including oil
                packing <br />
                machines, namkeen packing machines, and a wide range of other packaging equipment. Our mission is to{' '}
                <br />
                deliver efficient, reliable, and cost-effective solutions to streamline your packaging processes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{width: '80%'}}>
                <div
                    data-aos="fade-up"
                    className="bg-white p-6 shadow-lg text-left relative transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <img src="\logos\expert.png" alt="" className="w-10 pt-12 pb-2" />
                    <hr className="border-gray-300 my-4" />
                    <h2 className="text-2xl font-semibold mb-2 pt-0">Our Expertise</h2>
                    <p className="text-gray-700 pb-12" style={{ color: '#7F7F7F',width: '85%' }}>
                        Comprehensive Solutions for Packaging and Machinery Excellence
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500"></div>
                </div>
                <div
                    data-aos="fade-up"
                    className="bg-white p-6 shadow-lg text-left relative transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <img src="\logos\design.png" alt="" className="w-10 pt-12 pb-2" />
                    <hr className="border-gray-300 my-4" />
                    <h2 className="text-2xl font-semibold mb-2 pt-0">Human-Centric Machine Design</h2>
                    <p className="text-gray-700 pb-12" style={{ color: '#7F7F7F', width: '85%' }}>
                        Creating Solutions for Packaging and Machinery Excellence
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500"></div>
                </div>
                <div
                    data-aos="fade-up"
                    className="bg-white p-6 shadow-lg text-left relative transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <img src="\logos\innovate.png" alt="" className="w-10 pt-12 pb-2" />
                    <hr className="border-gray-300 my-4" />
                    <h2 className="text-2xl font-semibold mb-2 pt-0">Innovative Machine Interfaces</h2>
                    <p className="text-gray-700 pb-12" style={{ color: '#7F7F7F', width: '85%' }}>
                        Designing User-Friendly Control Systems for Seamless Workflow
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500"></div>
                </div>
                <div
                    data-aos="fade-up"
                    className="bg-white p-6 shadow-lg text-left relative transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <img src="\logos\package.png" alt="" className="w-10 pt-12 pb-2" />
                    <hr className="border-gray-300 my-4" />
                    <h2 className="text-2xl font-semibold mb-2 pt-0">Packaging and Marketing Assistance</h2>
                    <p className="text-gray-700 pb-12" style={{ color: '#7F7F7F', width: '85%' }}>
                        Helping Clients Effectively Market Products with Advanced Machinery
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500"></div>
                </div>
                <div
                    data-aos="fade-up"
                    className="bg-white p-6 shadow-lg text-left relative transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <img src="\logos\view.png" alt="" className="w-10 pt-12 pb-2" />
                    <hr className="border-gray-300 my-4" />
                    <h2 className="text-2xl font-semibold mb-2 pt-0">Digital Presence Enhancement</h2>
                    <p className="text-gray-700 pb-12" style={{ color: '#7F7F7F', width: '85%' }}>
                        Optimizing Online Visibility for Packaging Businesses
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500"></div>
                </div>
                <div
                    data-aos="fade-up"
                    className="bg-white p-6 shadow-lg text-left relative transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <img src="\logos\monitor.png" alt="" className="w-10 pt-12 pb-2" />
                    <hr className="border-gray-300 my-4" />
                    <h2 className="text-2xl font-semibold mb-2 pt-0">Smart Monitoring Tools</h2>
                    <p className="text-gray-700 pb-12" style={{ color: '#7F7F7F', width: '85%' }}>
                        Leveraging Android Apps for Enhanced Machinery Control
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500"></div>
                </div>
            </div>
        </div>
    );
};

export default Services;
