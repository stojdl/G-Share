import TwitchButton from "@/Components/TwitchButton";
import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";

interface Props {
    users: any;
    posts: any;
}

export default function CreateTeam({ users, posts }: Props) {
    return (
        <Layout>
            <main className="flex-1 lg:ml-72 lg:mr-72 lg:mt-0 p-6 pt-3 pb-28 w-full max-w-screen-xl mx-auto space-y-8">
                <TwitchButton />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="bg-red-600 hover:bg-red-700  px-4 py-2 rounded font-semibold text-sm">
                            Vytvořit tým
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-semibold text-sm">
                            Najít tým
                        </button>
                    </div>
                    <select className="bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 pr-10 text-sm w-full md:w-auto">
                        <option>Vyber hru</option>
                    </select>
                </div>
                {/* Team Form Section */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-full flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                            <p className="text-gray-300 text-sm">
                                Popisek týmu (hledáme hráče na hraní večer po
                                práci nebo na víkendové hraní a tak)
                            </p>
                            <input
                                type="text"
                                placeholder="Název týmu"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-sm placeholder-gray-400"
                            />
                            <div className="flex flex-wrap justify-between items-center gap-2">
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded text-xs">
                                        Region
                                    </span>
                                    <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded text-xs">
                                        Jazyk
                                    </span>
                                    <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded text-xs">
                                        Herní mód
                                    </span>
                                </div>
                                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-xs text-white font-semibold transition">
                                    Vytvořit tým
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-900 border border-gray-800 rounded-xl min-h-[160px] flex items-center justify-center text-gray-500 text-sm px-4"
                    >
                        Výpis týmů bude zde #{i + 1}
                    </div>
                ))}
                <div className="h-20" /> {/* Spacer for bottom nav */}
            </main>
        </Layout>
    );
}
