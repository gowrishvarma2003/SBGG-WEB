'use client';
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [activeNav, setActiveNav] = useState("#slider"); // Default active section

    const navItems = [
        { name: "Home", href: "/#slider" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Products", href: "/#products" },
        { name: "Contact", href: "/#contact" }, // Existing Contact link
    ];

    return (
        <nav className="p-4 w-full min-h-14 shadow-lg fixed top-0 z-50 bg-white opacity-90">
            <div className="h-full flex flex-col lg:flex-row lg:justify-end gap-3">
                <div className="flex lg:flex-1 sm:justify-center lg:justify-end items-center lg:mr-24">
                    <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="inline-block h-8 w-8 mr-2 self-center"
                        onClick={() => window.location.href = '/'}
                    />
                    <span className="text-black text-lg font-bold lg:mr-10">
                        Shri Panchami Global Gears
                    </span>
                </div>
                <div className="lg:hidden h-1 border-t-2 border-neutral-100 w-full"></div>
                <div className="h-full flex sm:flex-col bsm:flex-row bsm:justify-between gap-5 px-3">
                    <div className="flex flex-wrap sm:justify-center lg:justify-end items-center gap-x-5">
                        {navItems.map((item, index) => (
                            <div className="flex flex-col" key={index}>
                                <Link href={item.href} legacyBehavior>
                                    <a
                                        onClick={() => setActiveNav(item.href)}
                                        className={`text-black text-base ${activeNav === item.href ? "font-bold text-green-500" : ""
                                            } hover:text-gray-700 py-2 sm:px-1 bsm:px-2`}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                                <div
                                    className={`h-1 w-full ${activeNav === item.href
                                            ? "border-t-4 border-[#4DBF38]"
                                            : "border-t-2 border-neutral-200"
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
