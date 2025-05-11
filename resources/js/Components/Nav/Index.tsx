import { Link } from "@inertiajs/react";
import React from "react";

const Index: React.FC = () => {
    return (
        <nav className="w-full py-8 flex justify-between">
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
        </nav>
    );
};

export default Index;
