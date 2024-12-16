import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-center items-center">
                <img src="/logo.png" alt="Company Logo" className="inline-block h-8 w-8 mr-2 self-center w-14 h-14" />
                <span className="text-black text-lg font-bold mr-4 pr-16">Company Name</span>
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a className="text-black hover:text-gray-700">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a className="text-black hover:text-gray-700">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a className="text-black hover:text-gray-700">Service</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a className="text-black hover:text-gray-700">Product</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a className="text-black hover:text-gray-700">Pricing</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a className="bg-[#4DBF38] text-white pr-3 pl-3 pt-2 pb-2 ml-20">Contact us</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
