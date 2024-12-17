import React from 'react';
import PricingCard from './pricing';
const Testimonies = () => {
    return (
        <>
            <div className="relative bg-cover bg-center h-screen justify-center" style={{ backgroundImage: "url('/testimonials_background.png')" }}>
                <div className="absolute inset-0 bg-white opacity-90"></div>
                <div className="relative z-10 flex flex-col items-center  h-full text-black">
                    <h1 className="text-4xl font-bold mb-4 pt-20" style={{ color: '#4DBF38' }}>Testimonials</h1>
                    <img src="/logos/testimonies.png" alt="" className='w-10 pt-10' />
                    <p className="text-lg justify-center text-center pt-4" style={{ color: '#7F7F7F' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  <br />
                        has been the industry's standard dummy text ever since the 1500s, when an unknown <br />
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <h2 className="text-lg font-bold justify-center text-center pt-4 " style={{ color: '#052A47' }}>CRAIG</h2>
                    <p className="justify-center text-center pt-" style={{ color: '#7F7F7F' }}>Bussiness man</p>
                </div>
            </div>
        </>
    );
};

export default Testimonies;
