import H2 from "@/Components/Headings/H2";
import LoLForm from "@/Fragments/Forms/FindTeam/LoLForm";
import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function FindTeam() {
    const { teams } = usePage<PageProps>().props;
    console.log("teams: ", teams);

    const games = [
        { value: "", label: "Vyber hru" },
        { value: "LoL", label: "League of Legends" },
        { value: "Valo", label: "Valorant" },
        { value: "GTA", label: "GTA V" },
    ];

    const [selectedGame, setSelectedGame] = useState("");

    return (
        <Layout>
            <main className="relative w-full rounded h-full space-y-2">
                <div className="absolute -top-14 right-0.5 flex space-x-2 w-full md:w-auto">
                    <Link
                        href={route("team.create")}
                        className="bg-secondary text-button-text hover:bg-secondary-hover px-4 py-2 rounded font-semibold text-sm transition"
                    >
                        Vytvořit tým
                    </Link>
                    <Link
                        href={route("team.find")}
                        className="bg-primary text-primary-text hover:bg-primary-hover px-4 py-2 rounded font-semibold text-sm transition"
                    >
                        Najít tým
                    </Link>
                </div>
                <H2>Find Team</H2>
                <div className="flex flex-col md:flex-row justify-center bg-bg-tile border border-border items-center gap-4 p-4 rounded shadow">
                    <select
                        className="bg-bg-input-text text-text border border-border px-4 py-2 pr-10 w-full md:w-auto rounded shadow"
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                    >
                        {games.map((game) => (
                            <option key={game.value} value={game.value}>
                                {game.label}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedGame === "LoL" && <LoLForm />}

                <p>Vypis týmů:</p>
                <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teams ? (
                        teams.map((team: any, idx: number) => (
                            <Link href={route("team", team.slug)}>
                                <div
                                    key={team.id ?? idx}
                                    className="bg-[var(--color-bg-tile)] border-[var(--color-border)] rounded p-4"
                                >
                                    <h3 className="font-bold text-lg text-[var(--color-text)] mb-2">
                                        {team.name}
                                    </h3>
                                    <div className="text-sm text-[var(--color-placeholder)] mb-1">
                                        {team.description}
                                    </div>
                                    <div className="text-xs text-[var(--color-text)]">
                                        {team.region && (
                                            <span>Region: {team.region}</span>
                                        )}
                                        {team.game && (
                                            <span className="ml-2">
                                                Hra: {team.game}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-[var(--color-placeholder)]">
                            Žádné týmy nebyly nalezeny.
                        </div>
                    )}
                </div>

                <div className="w-full border-b pb-40"></div>
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
