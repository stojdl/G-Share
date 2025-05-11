import { Link } from "@inertiajs/react";
import React from "react";

const Hero = () => {
    return (
        <section className="space-y-8 flex flex-col items-center justify-center bg-gray-900 text-white">
            <div className="text-center space-y-4">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-red-500">
                    Game Share
                </h1>
                <p className="text-xl text-gray-300">
                    Platforma, která spojuje hráče napříč světem. 🎮
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">
                        🧠 Sdílej své zážitky z her
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-gray-300 text-sm">
                        <li>Ukaž svá nejlepší herní videa a momenty</li>
                        <li>Označ si je na svém profilu</li>
                        <li>Získej likey, komentáře a sdílení</li>
                        <li>Odemkni herní odměny a respekt</li>
                    </ul>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">
                        🤝 Spoj se s komunitou hráčů
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-gray-300 text-sm">
                        <li>Bezpečně chatuj s hráči z celého světa</li>
                        <li>Přidej si spoluhráče z in-game zápasů</li>
                        <li>Sleduj profily, reaguj, komentuj</li>
                        <li>Najdi si tým, turnaj nebo výzvu</li>
                    </ul>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 flex flex-col md:flex-row gap-6 w-full max-w-3xl text-center">
                <div className="flex-1 bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow hover:bg-gray-700 transition">
                    <p className="text-gray-300 mb-4 font-medium">
                        Nemáš účet? Přidej se k nám ↓
                    </p>
                    <Link
                        href="/register"
                        className="inline-block px-6 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                    >
                        Registrovat
                    </Link>
                </div>
                <div className="flex-1 bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow hover:bg-gray-700 transition">
                    <p className="text-gray-300 mb-4 font-medium">
                        Už máš účet? Vstup do hry ↓
                    </p>
                    <Link
                        href="/login"
                        className="inline-block px-6 py-2 rounded bg-gray-700 hover:bg-gray-800 text-white font-semibold transition"
                    >
                        Přihlásit
                    </Link>
                </div>
            </div>
            <div className="mt-20 text-center">
                <p className="text-lg font-semibold text-white mb-2">Objevuj</p>
                <div className="text-3xl animate-bounce text-red-500">↓</div>
            </div>
        </section>
    );
};

export default Hero;
