import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";

interface Props {
    users: any;
    posts: any;
}

export default function FindTeam({ users, posts }: Props) {
    return (
        <Layout>
            <main className="flex-1 lg:ml-72 lg:mr-72 lg:mt-0 p-6 pt-3 pb-18 w-full max-w-screen-xl mx-auto space-y-8">
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
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-semibold text-sm">
                            Vytvořit tým
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold text-sm">
                            Najít tým
                        </button>
                    </div>
                    <select className="bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 pr-10 text-sm w-full md:w-auto">
                        <option>Vyber hru</option>
                    </select>
                </div>

                {/* Filtry */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {["Role", "Region", "Herní mód", "Rank", "Jazyk"].map(
                        (item, i) => (
                            <button
                                key={i}
                                className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm hover:bg-gray-700"
                            >
                                {item}
                            </button>
                        )
                    )}
                    <button className="col-span-2 sm:col-span-1 bg-red-600 hover:bg-red-700 rounded px-4 py-2 text-sm font-semibold">
                        Najít spoluhráče
                    </button>
                </div>

                {/* Výsledky týmů */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <div className="flex flex-wrap gap-3 text-xs">
                        {[
                            "Marksman",
                            "EUNE",
                            "Ranked game",
                            "Gold/Platina",
                            "Polish",
                        ].map((tag, i) => (
                            <span
                                key={i}
                                className="bg-gray-800 border border-gray-700 rounded px-3 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Výpis hráčů */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-white mb-2">
                            Pozvat přátele
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-300"
                            >
                                Přítel #{i + 1}
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-white mb-2">
                            Hráči podle filtrů / náhodní hráči
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-300"
                            >
                                Hráč #{i + 1}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-white mb-2">
                            Pozvat přátele
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-300"
                            >
                                Přítel #{i + 1}
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-white mb-2">
                            Hráči podle filtrů / náhodní hráči
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-gray-300"
                            >
                                Hráč #{i + 1}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-20" />
            </main>
        </Layout>
    );
}
