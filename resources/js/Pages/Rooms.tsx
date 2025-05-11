import TwitchButton from "@/Components/TwitchButton";
import Layout from "@/Layouts/Layout";

export default function Rooms() {
    return (
        <Layout>
            <main className="flex-1 lg:ml-72 lg:mr-72 lg:mt-0 p-6 pt-3 pb-28 w-full max-w-screen-xl mx-auto space-y-8">
                <TwitchButton />
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
        </Layout>
    );
}
