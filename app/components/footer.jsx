import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="w-full h-auto flex flex-col bg-black justify-center items-center">
			<div className="w-full flex py-10 justify-center gap-20">
				<div className="w-5/12 flex flex-col items-center justify-start gap-5">
					<div className="w-full h-auto flex items-center gap-5">
						<img src="logo.png" alt="logo" className="h-14" />
						<h1 className="text-2xl text-white font-bold">
							Shri Panchami Global Gears
						</h1>
					</div>
					<div className="w-full">
						<p className="text-white text-sm text-pretty">
							Shripanchami Global Gears specializes in providing
							high-quality machinery solutions, including oil
							packing machines, namkeen packing machines, and a
							wide range of other packaging equipment. Our mission
							is to deliver efficient
						</p>
					</div>
					<div className="w-full flex gap-5 items-center">
						<h2 className="text-xl" style={{ color: "#4DBF38" }}>
							FOLLOW <span className="font-bold">US ON:</span>
						</h2>
						<Link href="https://www.facebook.com/">
							<img
								src="fb_icon.png"
								alt="facebook"
								className="h-7 cursor-pointer"
							/>
						</Link>
						<Link href="https://www.facebook.com/">
							<img
								src="insta_icon.png"
								alt="instagram"
								className="h-7 cursor-pointer"
							/>
						</Link>
						<Link href="https://www.facebook.com/">
							<img
								src="yt_icon.png"
								alt="youtube"
								className="h-5 cursor-pointer"
							/>
						</Link>
					</div>
				</div>
				<div className="w-2/12 flex flex-col gap-5 items-start">
					<h3 className="text-white text-xl">Quick Links</h3>
					<Link href="/" className="text-white text-sm hover:underline">
						Home
					</Link>
					<Link href="/about" className="text-white text-sm hover:underline">
						About
					</Link>
					<Link href="/services" className="text-white text-sm hover:underline">
						Services
					</Link>
					<Link href="/contact" className="text-white text-sm hover:underline">
						Contact
					</Link>
				</div>
                <div className="w-2/12 flex flex-col gap-5 items-start">
					<h3 className="text-white text-xl">Get in Touch</h3>
                    <div className="w-full flex gap-5 items-center">
                        <img src="email_icon.png" alt="location" className="h-8" />
                        <p className="text-white text-sm">info@yourdomain.com</p>
                    </div>
                    <div className="w-full flex gap-5 items-center">
                        <img src="phone_icon.png" alt="phone" className="h-8" />
                        <p className="text-white text-sm">+91 98450 12345</p>
                    </div>
				</div>
			</div>

			<hr className="w-full border border-neutral-900" />

			<div className="w-full flex justify-center items-center py-5">
				<p className="text-white text-sm">
					© 2021 SBGG. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
