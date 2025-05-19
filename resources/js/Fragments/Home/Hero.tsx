import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { BiGame } from "react-icons/bi";
import { FaHandMiddleFinger, FaShareAlt } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";

const Hero = () => {
    const { auth, home } = usePage<PageProps>().props;

    console.log(home);

    return (
        <section className="w-full space-y-8 flex flex-col items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-[#49ab93]">
                    Game Share
                </h1>
                <p className="text-xl flex items-center space-x-2 ">
                    <span>{home.title}</span>
                    <IoGameControllerOutline />
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <div className="bg-[#141414] border border-[#262626] p-6 rounded shadow-md hover:shadow-lg transition">
                    <h2 className="flex items-center space-x-2 text-2xl font-bold text-[#49ab93] mb-4">
                        <FaShareAlt /> <span>{home.tile.left.title}</span>
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                        <li>{home.tile.left.text1}</li>
                        <li>{home.tile.left.text2}</li>
                        <li>{home.tile.left.text3}</li>
                        <li>{home.tile.left.text4}</li>
                    </ul>
                </div>

                <div className="bg-[#141414] border border-[#262626] p-6 rounded shadow-md hover:shadow-lg transition">
                    <h2 className="flex items-center space-x-2 text-2xl font-bold text-[#49ab93] mb-4">
                        <FaHandMiddleFinger />
                        <span>{home.tile.right.title}</span>
                    </h2>
                    <ul className="list-disc ml-6 space-y-2 text-sm">
                        <li>{home.tile.right.text1}</li>
                        <li>{home.tile.right.text2}</li>
                        <li>{home.tile.right.text3}</li>
                        <li>{home.tile.right.text4}</li>
                    </ul>
                </div>
            </div>

            {/* CTA Section */}
            {auth.user ? (
                <Link
                    href={route("share_place")}
                    className="px-5 py-2 flex items-center space-x-2 rounded bg-[#49ab93] hover:bg-[#328573] border border-[#49ab93] text-[#141414] hover:text-[#f0f0f0] transition font-semibold shadow"
                >
                    <span>{home.enter}</span>
                    <BiGame className="text-lg" />
                </Link>
            ) : (
                <div className="mt-16 flex flex-col md:flex-row gap-6 w-full max-w-3xl text-center">
                    <div className="flex-1 bg-[#141414] border border-[#262626] p-6 rounded shadow-md">
                        <p className="mb-4 font-medium">
                            {home.tile.register.paragraph}
                        </p>
                        <Link
                            href="/register"
                            className="inline-block px-6 py-2 rounded bg-[#49ab93] hover:bg-[#328573] border border-[#49ab93] text-[#141414] hover:text-[#f0f0f0] font-semibold transition"
                        >
                            {home.tile.register.button}
                        </Link>
                    </div>
                    <div className="flex-1 bg-[#141414] border border-[#262626] p-6 rounded shadow-md">
                        <p className="mb-4 font-medium">
                            {home.tile.login.paragraph}
                        </p>
                        <Link
                            href="/login"
                            className="inline-block px-6 py-2 rounded border border-[#49ab93] hover:border-[#6cb8a2] hover:bg-[#328573] text-[#49ab93] hover:text-[#f0f0f0] font-semibold transition"
                        >
                            {home.tile.login.button}
                        </Link>
                    </div>
                </div>
            )}
            <div className="mt-20 text-center">
                <p className="text-lg font-semibold mb-2">{home.explore}</p>
                <div className="text-3xl animate-bounce text-[#49ab93]">↓</div>
            </div>
        </section>
    );
};

export default Hero;
