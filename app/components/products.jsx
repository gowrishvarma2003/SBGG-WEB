import React from "react";

const Products = () => {
    return (
        <div
            className="relative h-screen w-auto"
            style={{ backgroundImage: "url('/product_background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0" style={{ backgroundColor: "#052A47", opacity: 0.7 }}></div>
            <div className="relative z-10 flex  justify-center h-full text-white">
                <div className="justify-center text-center">
                    <h1 className="text-4xl font-bold">Our Products</h1>
                    <p>Shripanchami Global Gears specializes in providing high-quality machinery solutions, including oil packing <br />
                        machines, namkeen packing machines, and a wide range of other packaging equipment. Our mission is to <br />
                        deliver efficient, reliable, and cost-effective solutions to streamline your packaging processes.</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
