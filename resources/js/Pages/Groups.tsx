import TwitchButton from "@/Components/TwitchButton";
import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";

export default function Groups() {
    return (
        <Layout>
            <main className="flex-1 lg:ml-72 lg:mr-72 lg:mt-0 p-6 pt-3 pb-28 w-full max-w-screen-xl mx-auto space-y-8">
                <TwitchButton />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Hledat..."
                        className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400"
                    />
                </div>

                <h1 className="text-3xl font-bold mb-6 text-white">
                    📁 Groups
                </h1>

                <div className="text-gray-400">
                    Zde budou seznamy a informace o skupinách...
                </div>
            </main>
        </Layout>
    );
}
