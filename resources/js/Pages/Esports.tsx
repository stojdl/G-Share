import TwitchButton from "@/Components/TwitchButton";
import Layout from "@/Layouts/Layout";

export default function Esports() {
    return (
        <Layout>
            <main className="w-full max-w-screen-xl space-y-2">
                <TwitchButton />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Hledat hráče nebo tým..."
                        className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400"
                    />
                </div>

                <h1 className="text-3xl font-bold mb-6 text-white">
                    📰 E-SPORTS NOVINKY
                </h1>

                {/* Sem můžeš později přidat grid novinek nebo novinky z API */}
                <div className="text-gray-400">Zatím žádné příspěvky...</div>
            </main>
        </Layout>
    );
}
