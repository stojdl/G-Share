import TwitchButton from "@/Components/TwitchButton";
import Layout from "@/Layouts/Layout";
import { MdSportsEsports } from "react-icons/md";

export default function Esports() {
    return (
        <Layout>
            <main className="w-full max-w-screen-xl space-y-2">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    <MdSportsEsports />
                    E-SPORTS NOVINKY
                </h1>

                {/* Sem můžeš později přidat grid novinek nebo novinky z API */}
                <div className="text-gray-400">Zatím žádné příspěvky...</div>
            </main>
        </Layout>
    );
}
