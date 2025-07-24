import H2 from "@/Components/Headings/H2";
import LoLForm from "@/Fragments/Forms/CreateTeam/LoLForm";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function CreateTeam() {
    const { teams, games } = usePage<PageProps>().props;

    console.log("games", games);

    const [selectedGame, setSelectedGame] = useState("");

    return (
        <Layout>
            <main className="relative w-full rounded h-full space-y-2">
                <div className="absolute -top-14 right-0.5 flex space-x-2 w-full md:w-auto">
                    <Link
                        href={route("team.create")}
                        className="bg-primary text-button-text hover:bg-primary-hover px-4 py-2 rounded font-semibold text-sm transition"
                    >
                        Vytvořit tým
                    </Link>
                    <Link
                        href={route("team.find")}
                        className="bg-secondary text-secondary-text hover:bg-secondary-hover px-4 py-2 rounded font-semibold text-sm transition"
                    >
                        Najít tým
                    </Link>
                </div>
                <H2>Create Team</H2>
                <div className="flex flex-col md:flex-row justify-center bg-bg-tile border border-border items-center gap-4 p-4 rounded shadow">
                    <select
                        className="bg-bg-input-text text-text border border-border px-4 py-2 pr-10 w-full md:w-auto rounded shadow"
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                    >
                        <option value={""}>{"Vyber hru"}</option>
                        {games.map((game: any) => (
                            <option key={game.id} value={game.slug}>
                                {game.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedGame === "league-of-legends" && <LoLForm />}
                {selectedGame === "Valo" && (
                    <div>
                        {/* Import and render your Valorant form here */}
                        {/* Example: <ValorantForm /> */}
                        <div>Valorant form goes here</div>
                    </div>
                )}
                {selectedGame === "GTA" && (
                    <div>
                        {/* Import and render your GTA V form here */}
                        {/* Example: <GTAForm /> */}
                        <div>GTA V form goes here</div>
                    </div>
                )}

                <p className="mt-4">Tvé týmy:</p>
                <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teams ? (
                        teams.map((team: any, idx: number) => (
                            <Link href={route("team", team.slug)}>
                                <div
                                    key={team.id ?? idx}
                                    className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded p-4"
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

                {/* {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-bg-tile border border-border text-text rounded min-h-[160px] flex items-center justify-center text-sm px-4 shadow"
                    >
                        Výpis týmů bude zde #{i + 1}
                    </div>
                ))} */}
            </main>
        </Layout>
    );
}
