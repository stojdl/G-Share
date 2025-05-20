import Layout from "@/Layouts/Layout";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Communities() {
    return (
        <Layout>
            <main className="w-full max-w-screen-xl px-6 py-6 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
                <h1 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
                    <FaPeopleGroup /> Komunity
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["LoL", "Valo", "GTA", "Minecraft", "CS", "Fortnite"].map(
                        (name, i) => (
                            <div
                                key={i}
                                className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-lg p-6 flex justify-between items-center hover:bg-[var(--color-bg-tile-hover)] transition"
                            >
                                <span className="text-lg font-semibold text-[var(--color-text)]">
                                    {name}
                                </span>
                                <button className="text-sm text-[var(--color-placeholder)] hover:text-[var(--color-text)] transition">
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
