import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { BiGame } from "react-icons/bi";
import { FaHandMiddleFinger, FaShareAlt } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";

const Hero = () => {
    const { auth } = usePage<PageProps>().props;

    return (
        <section className="w-full space-y-8 flex flex-col items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-[#49ab93]">
                    Game Share
                </h1>
                <p className="text-xl flex items-center space-x-2 ">
                    <span>Platforma, která spojuje hráče napříč světem.</span>
                    <IoGameControllerOutline />
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <div className="bg-[#141414] border border-[#262626] p-6 rounded shadow-md hover:shadow-lg transition">
                    <h2 className="flex items-center space-x-2 text-2xl font-bold text-[#49ab93] mb-4">
                        <FaShareAlt /> <span>Sdílej své zážitky z her</span>
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                        <li>Ukaž svá nejlepší herní videa a momenty</li>
                        <li>Označ si je na svém profilu</li>
                        <li>Získej likey, komentáře a sdílení</li>
                        <li>Odemkni herní odměny a respekt</li>
                    </ul>
                </div>

                <div className="bg-[#141414] border border-[#262626] p-6 rounded shadow-md hover:shadow-lg transition">
                    <h2 className="flex items-center space-x-2 text-2xl font-bold text-[#49ab93] mb-4">
                        <FaHandMiddleFinger />
                        <span>Spoj se s komunitou hráčů</span>
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                        <li>Bezpečně chatuj s hráči z celého světa</li>
                        <li>Přidej si spoluhráče z in-game zápasů</li>
                        <li>Sleduj profily, reaguj, komentuj</li>
                        <li>Najdi si tým, turnaj nebo výzvu</li>
                    </ul>
                </div>
            </div>

            {/* CTA Section */}
            {auth.user ? (
                <Link
                    href={route("share_place")}
                    className="px-5 py-2 flex items-center space-x-2 rounded bg-[#49ab93] hover:bg-[#328573] border border-[#49ab93] text-[#141414] hover:text-[#f0f0f0] transition font-semibold shadow"
                >
                    <span> Vstoupit do aplikace</span>{" "}
                    <BiGame className="text-lg" />
                </Link>
            ) : (
                <div className="mt-16 flex flex-col md:flex-row gap-6 w-full max-w-3xl text-center">
                    <div className="flex-1 bg-[#141414] border border-[#262626] p-6 rounded shadow-md">
                        <p className="mb-4 font-medium">
                            Nemáš účet? Přidej se k nám ↓
                        </p>
                        <Link
                            href="/register"
                            className="inline-block px-6 py-2 rounded bg-[#49ab93] hover:bg-[#328573] border border-[#49ab93] text-[#141414] hover:text-[#f0f0f0] font-semibold transition"
                        >
                            Registrovat
                        </Link>
                    </div>
                    <div className="flex-1 bg-[#141414] border border-[#262626] p-6 rounded shadow-md">
                        <p className="mb-4 font-medium">
                            Už máš účet? Vstup do hry ↓
                        </p>
                        <Link
                            href="/login"
                            className="inline-block px-6 py-2 rounded border border-[#49ab93] hover:border-[#6cb8a2] hover:bg-[#328573] text-[#49ab93] hover:text-[#f0f0f0] font-semibold transition"
                        >
                            Přihlásit
                        </Link>
                    </div>
                </div>
            )}
            <div className="mt-20 text-center">
                <p className="text-lg font-semibold mb-2">Objevuj</p>
                <div className="text-3xl animate-bounce text-[#49ab93]">↓</div>
            </div>
        </section>
    );
};

export default Hero;
