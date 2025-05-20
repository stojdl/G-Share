import TwitchButton from "@/Components/TwitchButton";
import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";
import { MdOutlineGroups } from "react-icons/md";

export default function Groups() {
    return (
        <Layout>
            <main className="w-full max-w-screen-xl space-y-2">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    <MdOutlineGroups /> Groups
                </h1>

                <div className="text-gray-400">
                    Zde budou seznamy a informace o skupinách...
                </div>
            </main>
        </Layout>
    );
}
