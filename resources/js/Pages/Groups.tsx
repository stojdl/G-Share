import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import BottomNav from "../Components/BottomNav";

export default function Groups() {
    const [hideHeader, setHideHeader] = useState(false);
    const [isAddFriendOpen, setAddFriendOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [isNotifModalOpen, setNotifModalOpen] = useState(false);
    const [isChatModalOpen, setChatModalOpen] = useState(false);
    const [showFriendsDropdown, setShowFriendsDropdown] = useState(false);

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
    const isAnyModalOpen =
        isAddFriendOpen ||
        isNotifModalOpen ||
        isPostModalOpen ||
        isChatModalOpen;

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
            {/* Bottom Navigation */}
            {!isAnyModalOpen && (
                <BottomNav
                    isAnyModalOpen={isAnyModalOpen}
                    activePath="/groups"
                />
            )}
            {/* Sidebar */}
            <aside className="fixed top-0 left-0 h-screen w-72 p-6 bg-gray-900/60 border-r border-gray-800 backdrop-blur-md shadow-md flex flex-col justify-between z-40">
                {/* Horní obsah */}
                <div className="flex flex-col gap-6 overflow-y-auto pb-6">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-red-500 tracking-widest hover:text-red-400 transition"
                    >
                        G-Share
                    </Link>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-gray-700 rounded-full" />
                        <div className="text-sm font-medium">
                            nickname #2435
                        </div>
                        <div className="text-xs text-gray-400">online</div>
                        <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className="w-3 h-3 bg-red-600 rounded-full"
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => setAddFriendOpen(true)}
                            className="mt-2 text-xs px-3 py-1 bg-red-600 hover:bg-red-700 rounded transition"
                        >
                            + Přidat přítele
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                        {["Notifikace", "Chat", "Tým", "Založit tým"].map(
                            (label, i) => {
                                if (label === "Tým") {
                                    return (
                                        <Link
                                            key={i}
                                            href="/find-team"
                                            className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded py-2 transition text-center text-sm"
                                        >
                                            {label}
                                        </Link>
                                    );
                                }

                                return (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            if (label === "Notifikace")
                                                setNotifModalOpen(true);
                                            if (label === "Chat")
                                                setChatModalOpen(true);
                                            // Založit tým můžeš řešit později
                                        }}
                                        className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded py-2 transition"
                                    >
                                        {label}
                                    </button>
                                );
                            }
                        )}
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        {[
                            { label: "Přátelé online", hint: "modal" },
                            { label: "Místnosti", hint: "odkaz" },
                            { label: "Turnaje", hint: "odkaz" },
                            { label: "Výzvy", hint: "odkaz" },
                        ].map((item, i) => (
                            <button
                                key={i}
                                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded p-3 text-left transition"
                            >
                                {item.label}
                                <div className="text-xs text-gray-400">
                                    {item.hint}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Spodní ukotvený prvek */}
                <div className="pb-20 text-xs text-center text-gray-400 pt-4">
                    🚀 Premium jen za{" "}
                    <span className="text-red-500">0,99 €</span>
                </div>
            </aside>

            {isAddFriendOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                        {/* Zavřít */}
                        <button
                            onClick={() => setAddFriendOpen(false)}
                            className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                            aria-label="Zavřít"
                        >
                            ✕
                        </button>

                        {/* Nadpis + vyhledávání */}
                        <h2 className="text-2xl font-bold text-red-400 mb-6 mt-2">
                            Přidat přítele
                        </h2>
                        <input
                            type="text"
                            placeholder="🔍 Hledat hráče"
                            className="w-full mb-6 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white"
                        />

                        {/* Recently Interacted */}
                        <p className="text-sm text-gray-400 mb-3 border-b border-gray-700 pb-1">
                            Nedávné interakce
                        </p>

                        <div className="flex flex-col gap-4">
                            {[1, 2, 3].map((user, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-800 border border-gray-700 rounded flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4"
                                >
                                    {/* Avatar + Info */}
                                    <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                        <div className="w-14 h-14 bg-gray-600 rounded-full" />
                                        <div className="text-sm">
                                            <p className="font-semibold">
                                                nickname#{3100 + i}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                ● online
                                            </p>
                                        </div>
                                    </div>

                                    {/* Čtverečky vztahu */}
                                    <div className="flex gap-1 self-end sm:self-auto">
                                        {[...Array(5)].map((_, idx) => (
                                            <div
                                                key={idx}
                                                className="w-4 h-4 bg-gray-600 border border-gray-500 rounded-sm"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Notifikace Modal */}
            {isNotifModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                        <button
                            onClick={() => setNotifModalOpen(false)}
                            className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                            aria-label="Zavřít"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-6">
                            Notifikace
                        </h2>

                        <div className="flex flex-col gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 bg-gray-800 border border-gray-700 rounded p-4"
                                >
                                    <div className="w-14 h-14 bg-gray-600 rounded-md shrink-0" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white">
                                            Notifikace #{i}
                                        </p>
                                        <p className="text-sm text-gray-300">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            quis diam...
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {isChatModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                        {/* Zavřít */}
                        <button
                            onClick={() => setChatModalOpen(false)}
                            className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                            aria-label="Zavřít"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-red-400 mb-6">
                            Chat
                        </h2>

                        {/* Obsah modalu - prozatím placeholder */}
                        <div className="flex flex-col gap-4">
                            {[1, 2, 3].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-800 border border-gray-700 rounded p-4"
                                >
                                    <p className="font-semibold text-white">
                                        Zpráva #{i + 1}
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        Tady bude konverzace nebo seznam
                                        kontaktů...
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="ml-72 flex-1 p-6 w-full max-w-screen">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Hledat..."
                        className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400"
                    />
                    <div className="w-full bg-gray-950 border-b border-gray-800 px-4 py-1 text-sm flex justify-center items-center">
                        <a
                            href="https://twitch.tv/JinochiTR1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-medium text-white hover:text-red-400 transition"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                            </span>
                            LIVE ON TWITCH
                        </a>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-6 text-white">
                    📁 Groups
                </h1>

                <div className="text-gray-400">
                    Zde budou seznamy a informace o skupinách...
                </div>
            </main>

            {/* Reklamní panel */}
            <aside className="hidden lg:block w-72 p-6 border-l border-gray-800 bg-gray-900/50 backdrop-blur-sm shadow-inner">
                <div className="sticky top-6">
                    <h2 className="text-lg font-semibold text-gray-200 mb-4">
                        📢 Reklama
                    </h2>
                    <div className="w-full h-64 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-gray-500">
                        Reklamní prostor
                    </div>
                    <div className="mt-6 w-full h-64 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-gray-500">
                        Další reklama
                    </div>
                </div>
            </aside>
        </div>
    );
}
