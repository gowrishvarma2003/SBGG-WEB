'use client';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: true, // Run animation only once
        });
    }, []);

    const services = [
        {
            img: '/logos/expert.png',
            title: 'Our Expertise',
            description: 'Comprehensive Solutions for Packaging and Machinery Excellence',
        },
        {
            img: '/logos/design.png',
            title: 'Human-Centric Machine Design',
            description: 'Creating Solutions for Packaging and Machinery Excellence',
        },
        {
            img: '/logos/innovate.png',
            title: 'Innovative Machine Interfaces',
            description: 'Designing User-Friendly Control Systems for Seamless Workflow',
        },
        {
            img: '/logos/package.png',
            title: 'Packaging and Marketing Assistance',
            description: 'Helping Clients Effectively Market Products with Advanced Machinery',
        },
        {
            img: '/logos/view.png',
            title: 'Digital Presence Enhancement',
            description: 'Optimizing Online Visibility for Packaging Businesses',
        },
        {
            img: '/logos/monitor.png',
            title: 'Smart Monitoring Tools',
            description: 'Leveraging Android Apps for Enhanced Machinery Control',
        },
    ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ width: '80%' }}>
                {services.map((service, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className="bg-white p-6 text-left relative transform transition duration-500 hover:scale-105"
                        style={{
                            boxShadow: '5px 15px 15px rgba(0, 0, 0, 0.2)', 
                            transition: 'box-shadow 0.5s ease, transform 0.5s ease', 
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={service.img} alt="" className="w-10 pt-12 pb-2" />
                        <hr className="border-gray-300 my-4" />
                        <h2 className="text-2xl font-semibold mb-2 pt-0">{service.title}</h2>
                        <p className="text-gray-700 pb-12" style={{ color: '#7F7F7F', width: '85%' }}>
                            {service.description}
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-green-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
