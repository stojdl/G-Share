import { PropsWithChildren } from "react";
import { Link } from "@inertiajs/react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
            <Link
                href="/"
                className="text-3xl font-bold text-red-500 hover:text-red-400 transition mb-6"
            >
                G-Share
            </Link>

            <div className="w-full max-w-md rounded-xl bg-gray-900 border border-gray-800 p-6 sm:p-8 shadow-2xl">
                {children}
            </div>
        </div>
    );
}
