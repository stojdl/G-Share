import TwitchButton from "@/Components/TwitchButton";
import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";

interface Props {
    users: any;
    posts: any;
}

export default function Commuities({ users, posts }: Props) {
    return (
        <Layout>
            <main className="w-full max-w-screen-xl ">
                <TwitchButton />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Hledat komunity..."
                        className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-400"
                    />
                </div>

                <h1 className="text-3xl font-bold mb-6 text-white">
                    🏘️ Komunity
                </h1>

                {/* Grid of Communities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["LoL", "Valo", "GTA", "Minecraft", "CS", "Fortnite"].map(
                        (name, i) => (
                            <div
                                key={i}
                                className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center hover:shadow-lg transition"
                            >
                                <span className="text-lg font-semibold">
                                    {name}
                                </span>
                                <button className="text-sm text-gray-400 hover:text-white transition">
                                    navštívit →
                                </button>
                            </div>
                        )
                    )}
                </div>
            </main>
        </Layout>
    );
}
