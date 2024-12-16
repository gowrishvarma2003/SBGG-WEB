import { useState } from "react";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, subject, message);
    }

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
					className="w-7/12 h-full bg-[#052A47F2] opacity-90 z-2 absolute flex items-center justify-center"
					style={{ zIndex: 2 }}
				>
					<div className="w-4/5 h-auto flex-col pl-48">
						<h1 className="text-4xl mb-5" style={{ color: "#4DBF38" }}>
							CONTACT <span className="font-bold">US</span>
						</h1>
						<p className="text-white text-lg">
							Shripanchami Global Gears are here to support your
							business with high-quality machinery and exceptional
							customer service. Whether you have questions about
							our products, need technical support, or are looking
							for a custom solution, our team is ready to assist
							you.
						</p>

                        <form onSubmit={handleSubmit} className="w-full mt-5">
                            <div className="w-full flex gap-5">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-1/2 h-10 px-3 rounded"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-1/2 h-10 px-3 rounded"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full h-10 px-3 mt-5 rounded"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                placeholder="Message"
                                className="w-full h-40 px-3 mt-5 rounded"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button
                                type="submit"
                                className="w-1/2 h-10 mt-5 text-white rounded"
                                style={
                                    { 
                                        backgroundColor: "#4DBF38",
                                        color: "white",
                                    }
                                }
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
