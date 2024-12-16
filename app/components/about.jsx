import React from 'react';

const About = () => {
    return (
        <>
            {/* First Div with Background Image */}
            <div
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: 'url("/Frame.png")' }}
            >
                <div
                    className="flex flex-col items-center h-full p-8"
                >
                    <h1 className="text-4xl mb-4 pb-4" style={{ color: '#4DBF38' }}>
                        ABOUT<span className="font-bold pl-4">US</span>
                    </h1>
                    <p className="text-3xl text-center" style={{ color: '#052A47' }}>
                        India's leading Manufacturer & Exporter of Oil extraction <br />
                        machinery, Food Processing Machinery and Packing machineries also
                    </p>
                    <p className="justify-center text-center text-lg mt-4 pt-10" style={{ color: '#7F7F7F' }}>
                        Shripanchami Global Gears specializes in providing high-quality machinery solutions, including oil packing machines, <br />
                        namkeen packing machines, and a wide range of other packaging equipment. Our mission is to deliver efficient, <br />
                        reliable, and cost-effective solutions to streamline your packaging processes. We cater to industries looking to <br />
                        optimize their production lines with cutting-edge technology and exceptional customer support. Partner with <br />
                        Shripanchami Global Gears for innovative machinery that drives your business forward. <br />
                    </p>
                </div>
            </div>

            {/* Second Div Positioned Independently */}
            <div
                className="relative bg-white shadow-lg rounded-lg p-8 mx-auto -mt-48 z-20 flex justify-center"
                style={{ width: '60%', color: '#052A47' }}
            >
                <img
                    src="/about.png"
                    alt="Description of image"
                    className="h-auto rounded-lg"
                    style={{ width: '100%', objectFit: 'contain' }}
                />
            </div>
        </>
    );
};

export default About;
