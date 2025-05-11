import { PropsWithChildren, useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function Guest({ children }: PropsWithChildren) {
    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        let lastScroll = 0;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 50) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
            lastScroll = currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-6">
            <div className="flex justify-between w-full max-w-7xl py-8">
                <Link
                    href="/"
                    className="text-3xl font-bold text-red-500 hover:text-red-400 transition mb-6"
                >
                    G-Share
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/register"
                        className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 transition text-white font-semibold shadow"
                    >
                        Registrovat
                    </Link>
                    <Link
                        href="/login"
                        className="px-5 py-2 rounded bg-gray-700 hover:bg-gray-800 transition text-white font-semibold shadow"
                    >
                        Přihlásit
                    </Link>
                </div>
            </div>

            <div className="w-full max-w-7xl rounded-xl bg-gray-900 border border-gray-800 p-6 sm:p-8 shadow-2xl">
                {children}
            </div>
        </div>
    );
}
