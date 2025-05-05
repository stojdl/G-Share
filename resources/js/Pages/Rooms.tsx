import React, { useEffect, useState } from "react";
import { Link, router } from "@inertiajs/react";

interface Props {
    users: any;
    posts: any;
}

export default function Rooms({ users, posts }: Props) {
    const [hideHeader, setHideHeader] = useState(false);
    const [isAddFriendOpen, setAddFriendOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [isNotifModalOpen, setNotifModalOpen] = useState(false);
    const [isChatOpen, setChatOpen] = useState(false);
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
        isAddFriendOpen || isNotifModalOpen || isPostModalOpen || isChatOpen;

    return (
        <div className="min-h-screen flex flex-col bg-black text-white lg:flex-row">
            {/* Left Sidebar */}
            <aside className="w-full lg:w-72 h-auto lg:h-screen lg:fixed top-0 left-0 flex flex-col justify-between p-6 bg-gray-900/70 border-b lg:border-b-0 lg:border-r border-gray-800 backdrop-blur-md shadow-xl z-40">
                <Link
                    href="/"
                    className="text-3xl text-center font-extrabold text-red-500 tracking-wider hover:text-red-400 transition"
                >
                    G-Share
                </Link>

                <div className="flex flex-col items-center gap-3 mt-6">
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9865bd5-9256-461e-9cad-595da83f5964/d884qiy-a305329c-9f47-4b75-a7c0-ba603075ebc2.png/v1/fit/w_400,h_400,q_70,strp/request__zed_avatar_by_soulivium_d884qiy-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvZDg4NHFpeS1hMzA1MzI5Yy05ZjQ3LTRiNzUtYTdjMC1iYTYwMzA3NWViYzIucG5nIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvc291bGl2aXVtLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ovwlBbubWp7eWHdb39FUNBKxcXhzUZiigf5aKFmMupk"
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full object-cover shadow-md border border-gray-700"
                    />
                    <div className="text-base font-semibold">
                        JinochiTR1 #0420
                    </div>
                    <div className="text-sm text-green-400">● online</div>
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
                        className="mt-3 text-sm px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl shadow transition-all"
                    >
                        + Přidat přítele
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mt-8">
                    {["Notifikace", "Chat", "Vytvořit tým", "Najít tým"].map(
                        (label, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    if (label === "Notifikace")
                                        setNotifModalOpen(true);
                                    if (label === "Chat") setChatOpen(true);
                                    if (label === "Vytvořit tým")
                                        router.visit("/create-team");
                                    if (label === "Najít tým")
                                        router.visit("/find-team");
                                }}
                                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl py-2 shadow transition"
                            >
                                {label}
                            </button>
                        )
                    )}
                </div>

                <div className="flex flex-col gap-4 text-sm mt-8">
                    <div className="relative">
                        <button
                            onClick={() =>
                                setShowFriendsDropdown(!showFriendsDropdown)
                            }
                            className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 text-left shadow transition w-full"
                        >
                            <p className="font-medium">Přátelé online</p>
                            <p className="text-xs text-gray-400">dropdown</p>
                        </button>
                        {showFriendsDropdown && (
                            <div className="absolute z-50 w-48 bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden top-full mt-2 lg:left-full lg:top-0 lg:ml-2 lg:mt-0">
                                {[
                                    "PlayerOne",
                                    "ShadowWolf",
                                    "ZedKiller",
                                    "NovaXD",
                                ].map((friend, i) => (
                                    <div
                                        key={i}
                                        className="px-4 py-2 text-sm text-white hover:bg-gray-700 transition cursor-pointer"
                                    >
                                        🟢 {friend}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {["Místnosti", "Turnaje", "Výzvy"].map((label, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (label === "Místnosti")
                                    router.visit("/rooms");
                                if (label === "Turnaje")
                                    router.visit("/tournaments");
                                if (label === "Výzvy")
                                    router.visit("/challenges");
                            }}
                            className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 text-left shadow transition"
                        >
                            <p className="font-medium">{label}</p>
                            <p className="text-xs text-gray-400">odkaz</p>
                        </button>
                    ))}
                </div>

                <div className="pt-10 pb-20 text-xs text-center text-gray-400">
                    🚀 Premium jen za{" "}
                    <span className="text-red-500">0,99 €</span>
                </div>
            </aside>

            {/* Add Friend Modal */}
            {isAddFriendOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                        <button
                            onClick={() => setAddFriendOpen(false)}
                            className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                            aria-label="Zavřít"
                        >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold text-white mb-6">
                            Přidat přítele
                        </h2>

                        <input
                            type="text"
                            placeholder="🔍 Hledat hráče"
                            className="w-full mb-6 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white"
                        />

                        <p className="text-sm text-gray-400 mb-3 border-b border-gray-700 pb-1">
                            Nedávné interakce
                        </p>

                        <div className="flex flex-col gap-4">
                            {[1, 2, 3].map((user, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-800 border border-gray-700 rounded flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4"
                                >
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

            {/* Notification Modal */}
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

                        <h2 className="text-3xl font-bold text-white mb-6">
                            Notifikace
                        </h2>

                        <div className="pb-21 flex flex-col gap-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 bg-gray-800 border border-gray-700 rounded p-3"
                                >
                                    <div className="w-10 h-10 bg-gray-600 rounded-md shrink-0" />
                                    <div className="flex flex-col text-sm">
                                        <p className="font-semibold text-white text-sm">
                                            Notifikace #{i}
                                        </p>
                                        <p className="text-xs text-gray-300 leading-snug">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            quis diam. Etiam ligula pede,
                                            sagittis quis, interdum ultricies.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {isChatOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col text-white relative">
                        <button
                            onClick={() => setChatOpen(false)}
                            className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                            aria-label="Zavřít"
                        >
                            ✕
                        </button>

                        <div className="p-6 sm:p-8 border-b border-gray-800">
                            <h2 className="text-2xl font-bold">
                                💬 Chat místnost
                            </h2>
                            <p className="text-sm text-gray-400">
                                Diskutuj s hráči v reálném čase
                            </p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-800">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-gray-600 rounded-full" />
                                    <div>
                                        <p className="text-sm font-semibold">
                                            Hráč #{i + 1}
                                        </p>
                                        <p className="text-sm text-gray-300">
                                            Tohle je zpráva do chatu. 🎯
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-800 p-4 bg-gray-900">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // handle send
                                }}
                                className="flex items-center gap-3"
                            >
                                <input
                                    type="text"
                                    placeholder="Napiš zprávu..."
                                    className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-xl border border-gray-600 placeholder-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl font-semibold transition"
                                >
                                    Odeslat
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            <main className="flex-1 lg:ml-72 lg:mr-72 lg:mt-0 p-6 pt-3 pb-28 w-full max-w-screen-xl mx-auto space-y-8">
                <div className="bg-gray-950 border border-gray-800 px-4 py-2 text-sm flex justify-center items-center rounded-xl shadow">
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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <input
                        type="text"
                        placeholder="🔍 Hledat místnosti..."
                        className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400 shadow"
                    />
                </div>

                <h1 className="text-3xl font-extrabold">ROOMS</h1>

                <div className="flex flex-wrap gap-3">
                    {["🎮 podle hry", "👥 podle přátel", "💬 text/hlas"].map(
                        (filter, i) => (
                            <button
                                key={i}
                                className="bg-gray-800 border border-gray-700 hover:bg-gray-700 px-4 py-2 rounded text-sm shadow"
                            >
                                {filter}
                            </button>
                        )
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 border border-gray-800 rounded-xl min-h-[150px] flex items-center justify-center text-gray-500 shadow-md hover:shadow-lg transition"
                        >
                            Místnost #{i + 1}
                        </div>
                    ))}
                </div>
            </main>

            {/* Right Ad Sidebar */}
            <aside className="hidden lg:flex w-72 fixed right-0 top-0 h-screen p-6  border-l border-gray-800 bg-gray-900/60 backdrop-blur-md shadow-xl z-40 flex-col">
                <div className="sticky top-6 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-200">
                        📢 Reklama
                    </h2>
                    <div className="w-full h-80 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-500 shadow-md">
                        Reklamní prostor
                    </div>
                    <div className="w-full h-80 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-500 shadow-md">
                        Další reklama
                    </div>
                </div>
            </aside>

            {/* Bottom Navigation */}
            {!isAnyModalOpen && (
                <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 px-4 py-3 flex flex-wrap justify-around sm:justify-evenly lg:justify-center gap-2 lg:gap-6 shadow-inner backdrop-blur-md">
                    {[
                        {
                            label: "Share Place",
                            href: "/share-place",
                            active: false,
                        },
                        { label: "Komunity", href: "/communities" },
                        { label: "Skupiny", href: "/groups" },
                        { label: "Esports", href: "/esports" },
                    ].map(({ label, href, active }, index) => (
                        <Link
                            key={index}
                            href={href}
                            className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-semibold transition-all shadow-md ${
                                active
                                    ? "bg-red-600 text-white hover:bg-red-700"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
