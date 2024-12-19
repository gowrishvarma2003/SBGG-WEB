"use client";

import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!name) errors.name = "Name is required";
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        if (!phone) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Phone number is invalid";
        }
        if (!message) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        const response = await fetch("/api/store-contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            alert("Your contact information has been saved successfully.");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } else {
            alert("Failed to save contact information.");
        }
    };

    return (
        <div className="w-full min-h-dvh flex flex-col">
            <div
                className="w-full h-full flex-1 flex"
                style={{ position: "relative" }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: "url(factory2.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 1,
                        position: "absolute",
                    }}
                ></div>
                <div
                    className="w-full p-8 lg:p-0 md:w-10/12 lg:w-7/12 h-full bg-[#052A47F2] opacity-90 z-2 absolute flex items-center justify-center"
                    style={{ zIndex: 2 }}
                >
                    <div className="w-full lg:w-4/5 h-auto flex-col pl-0 md:pl-24 lg:pl-48">
                        <h1
                            className="text-2xl lg:text-3xl xl:text-4xl mb-5"
                            style={{ color: "#4DBF38" }}
                        >
                            CONTACT <span className="font-bold">US</span>
                        </h1>
                        <p className="text-white sm:text-sm bsm:text-base md:text-lg lg:text-xl h-28 pr-6 overflow-y-scroll thin-scrollbar">
                            Shripanchami Global Gears are here to support your
                            business with high-quality machinery and exceptional
                            customer service. Whether you have questions about
                            our products, need technical support, or are looking
                            for a custom solution, our team is ready to assist
                            you.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full mt-5">
                            <div className="w-full flex gap-5">
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-10 px-3 rounded"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="w-1/2">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full h-10 px-3 rounded"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full h-10 px-3 rounded"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                            <div className="w-full mt-5">
                                <textarea
                                    placeholder="Message"
                                    className="w-full h-40 px-3 rounded"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-1/2 h-10 mt-5 text-white rounded text-base"
                                style={{
                                    backgroundColor: "#4DBF38",
                                    color: "white",
                                }}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full h-5 flex-shrink-0 bg-[#4DBF38]"></div>
        </div>
    );
};

export default Contact;