'use client';
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {

    const navItems = [
        { name: "Home", href: "/contact", isActive: true },
        { name: "Service", href: "/about", isActive: false },
        { name: "Product", href: "/contact", isActive: false },
        { name: "Pricing", href: "/about", isActive: false },
    ];

    return (
        <nav className="p-4 w-full min-h-14 shadow-lg">
            <div className="h-full flex flex-col lg:flex-row lg:justify-end gap-3">
                <div className="flex lg:flex-1 sm:justify-center lg:justify-end items-center">
                    <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="inline-block h-8 w-8 mr-2 self-center"
                    />
                    <span className="text-black text-lg font-bold lg:mr-10">
                        Shri Panchami Global Gears
                    </span>
                </div>
                <div className="lg:hidden h-1 border-t-2 border-neutral-100 w-full"></div>
                <div className="h-full flex sm:flex-col bsm:flex-row bsm:justify-between gap-5 px-3">
                    <div className="flex sm:justify-center lg:justify-end items-center gap-x-5">
                        {navItems.map((item, index) => (
                            <div className="flex flex-col" key={index}>
                                <Link href={item.href} legacyBehavior>
                                    <a className={`text-black text-base ${item.isActive ? 'font-bold' : ''} hover:text-gray-700 py-2 sm:px-1 bsm:px-2`}>
                                        {item.name}
                                    </a>
                                </Link>
                                <div
                                    className={`h-1 w-full ${item.isActive
                                        ? "border-t-4 border-[#4DBF38]"
                                        : "border-t-2 border-neutral-200"
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <Link href="/contact" legacyBehavior>
                        <a className="flex font-semibold rounded-sm bg-gradient-to-b hover:from-[#4DBF38] hover:to-[#4cbf38cb] from-white to-white bg-white text-[#4DBF38] hover:text-white border border-[#4DBF38] transition-all duration-500 delay-100 justify-center items-center text-center px-3 lg:ml-20 text-nowrap py-2">
                            Contact us
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
