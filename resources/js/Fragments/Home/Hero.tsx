import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { BiGame } from "react-icons/bi";
import {
    FaAngleDoubleDown,
    FaArrowDown,
    FaCrosshairs,
    FaHandMiddleFinger,
    FaShareAlt,
    FaSignInAlt,
} from "react-icons/fa";
import {
    FaAnglesDown,
    FaArrowDownLong,
    FaJoint,
    FaUserPlus,
} from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RxCrosshair2 } from "react-icons/rx";

const Hero = () => {
    const { auth, home } = usePage<PageProps>().props;

    console.log(home);

    return (
        <section className="w-full space-y-8 flex flex-col items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="flex items-center space-x-2 justify-center text-5xl sm:text-6xl font-extrabold text-[#49ab93]">
                    <span>Game Share</span>
                </h1>
                <p className="text-xl flex items-center space-x-2 ">
                    <IoGameControllerOutline className="text-2xl" />
                    <span>{home.title}</span>
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <div className="bg-[#141414] border border-[#262626] p-6 rounded shadow-md hover:shadow-lg transition">
                    <h2 className="flex items-center space-x-2 text-2xl font-bold text-[#49ab93] mb-4">
                        <span>{home.tile.left.title}</span> <FaShareAlt />
                    </h2>
                    <ul className="ml-4 space-y-2 text-sm">
                        {[
                            home.tile.left.text1,
                            home.tile.left.text2,
                            home.tile.left.text3,
                            home.tile.left.text4,
                        ].map((tile) => (
                            <li className="flex items-center space-x-2">
                                <RxCrosshair2 />
                                <span>{tile}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#141414] border border-[#262626] p-6 rounded shadow-md hover:shadow-lg transition">
                    <h2 className="flex items-center space-x-2 text-2xl font-bold text-[#49ab93] mb-4">
                        <span>{home.tile.right.title}</span>
                        <FaHandMiddleFinger />
                    </h2>
                    <ul className="ml-4 space-y-2 text-sm">
                        {[
                            home.tile.right.text1,
                            home.tile.right.text2,
                            home.tile.right.text3,
                            home.tile.right.text4,
                        ].map((tile) => (
                            <li className="flex items-center space-x-2">
                                <RxCrosshair2 />
                                <span>{tile}</span>
                            </li>
                        ))}
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
                    <div className="flex-1 flex flex-col items-center bg-[#141414] border border-[#262626] p-6 rounded shadow-md">
                        <p className="mb-4 flex items-center space-x-2 font-medium">
                            <span> {home.tile.register.paragraph}</span>
                            <FaAnglesDown />
                        </p>
                        <Link
                            href="/register"
                            className="w-max pl-4 pr-3.5 py-2 flex items-center space-x-2 rounded bg-[#49ab93] hover:bg-[#328573] border border-[#49ab93] text-[#141414] hover:text-[#f0f0f0] font-semibold transition"
                        >
                            <span>{home.tile.register.button}</span>
                            <FaUserPlus className="text-xl" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col items-center bg-[#141414] border border-[#262626] p-6 rounded shadow-md">
                        <p className="mb-4 flex items-center space-x-2 font-medium">
                            <span>{home.tile.login.paragraph}</span>
                            <FaAnglesDown />
                        </p>
                        <Link
                            href="/login"
                            className="pl-4 pr-3.5 py-2 flex items-center space-x-2 rounded border border-[#49ab93] hover:border-[#6cb8a2] hover:bg-[#328573] text-[#49ab93] hover:text-[#f0f0f0] font-semibold transition"
                        >
                            <span> {home.tile.login.button}</span>
                            <FaSignInAlt />
                        </Link>
                    </div>
                </div>
            )}
            <div className="mt-20 flex flex-col items-center space-y-4">
                <p className="flex items-center space-x-2 text-lg font-semibold">
                    <span>{home.explore}</span>
                    <MdOutlineTravelExplore className="text-xl" />
                </p>
                <div className="text-3xl animate-bounce text-[#49ab93]">
                    <FaArrowDownLong />
                </div>
            </div>
        </section>
    );
};

export default Hero;
