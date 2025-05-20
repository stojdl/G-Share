import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";

interface Props {
    users: any;
    posts: any;
}

export default function FindTeam({ users, posts }: Props) {
    return (
        <Layout>
            <main className="w-full rounded h-full space-y-2">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="bg-[var(--color-bg-input-text)] text-[var(--color-text)] border border-[var(--color-border)] rounded px-4 py-2 pr-10 text-sm w-full md:w-auto shadow">
                            Vytvořit tým
                        </button>
                        <button className="bg-[var(--color-bg-input-text)] text-[var(--color-text)] border border-[var(--color-border)] rounded px-4 py-2 pr-10 text-sm w-full md:w-auto shadow">
                            Najít tým
                        </button>
                    </div>
                    <select className="bg-[var(--color-bg-input-text)] text-[var(--color-text)] border border-[var(--color-border)] rounded px-4 py-2 pr-10 text-sm w-full md:w-auto shadow">
                        <option>Vyber hru</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {["Role", "Region", "Herní mód", "Rank", "Jazyk"].map(
                        (item, i) => (
                            <button
                                key={i}
                                className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded px-4 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-bg)] transition"
                            >
                                {item}
                            </button>
                        )
                    )}
                    <button className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded col-span-2 sm:col-span-1 px-4 py-2 text-sm font-semibold transition">
                        Najít spoluhráče
                    </button>
                </div>
                <div className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-xl p-6">
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
                                className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded px-3 py-1 text-[var(--color-text)]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-[var(--color-text)] mb-2">
                            Pozvat přátele
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded px-4 py-3 text-[var(--color-placeholder)]"
                            >
                                Přítel #{i + 1}
                            </div>
                        ))}
                    </div>
                    <div className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-[var(--color-text)] mb-2">
                            Hráči podle filtrů / náhodní hráči
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded px-4 py-3 text-[var(--color-placeholder)]"
                            >
                                Hráč #{i + 1}
                            </div>
                        ))}
                    </div>
                    <div className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-[var(--color-text)] mb-2">
                            Pozvat přátele
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded px-4 py-3 text-[var(--color-placeholder)]"
                            >
                                Přítel #{i + 1}
                            </div>
                        ))}
                    </div>
                    <div className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-xl p-4 space-y-2">
                        <h2 className="font-bold text-[var(--color-text)] mb-2">
                            Hráči podle filtrů / náhodní hráči
                        </h2>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded px-4 py-3 text-[var(--color-placeholder)]"
                            >
                                Hráč #{i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}
