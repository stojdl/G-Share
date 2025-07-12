import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { usePage, Link } from "@inertiajs/react";
import moment from "moment";

export default function CreateTeam() {
    const { team, locale } = usePage<PageProps>().props;

    console.log(team);

    const games = [
        { value: "", label: "Vyber hru" },
        { value: "LoL", label: "League of Legends" },
        { value: "Valo", label: "Valorant" },
        { value: "GTA", label: "GTA V" },
    ];

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
                <button
                    onClick={() => window.history.back()}
                    className="text-sm px-4 py-2 rounded bg-[var(--color-button)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] transition"
                >
                    ← Zpět
                </button>
                <div className="w-full flex flex-col md:flex-row justify-center bg-bg-tile border border-border items-center gap-4 p-4 rounded shadow">
                    <div className="w-full bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-xl p-4">
                        <h3 className="font-bold text-lg text-[var(--color-text)] mb-2">
                            {team.name}
                        </h3>
                        <div className="text-sm text-[var(--color-placeholder)] mb-1">
                            popisek: {team.description}
                        </div>
                        <div className="text-xs text-[var(--color-text)]">
                            {team.region && <span>Region: {team.region}</span>}
                        </div>
                        <div className="text-xs text-[var(--color-text)]">
                            {team.language && (
                                <span>Lang: {team.language}</span>
                            )}
                        </div>
                        <div className="text-xs text-[var(--color-text)]">
                            {team.size && (
                                <span>velikost týmu: {team.size}</span>
                            )}
                        </div>
                        <div className="text-xs text-[var(--color-text)]">
                            {team.created_at && (
                                <span>
                                    založeno:{" "}
                                    {moment(team.created_at)
                                        .locale(locale)
                                        .toLocaleString()}{" "}
                                </span>
                            )}
                        </div>
                        <div className="text-xs text-[var(--color-text)]">
                            {team.creator && (
                                <Link
                                    href={route("profile.show", {
                                        user_id: team.creator.id,
                                    })}
                                >
                                    <span>
                                        založil: {team.creator.username}
                                    </span>
                                </Link>
                            )}
                        </div>
                        <div className="text-xs text-[var(--color-text)]">
                            {team.owner && (
                                <Link
                                    href={route("profile.show", {
                                        user_id: team.owner.id,
                                    })}
                                >
                                    <span>vlastník: {team.owner.username}</span>
                                </Link>
                            )}
                        </div>
                        <div className="text-xs text-[var(--color-text)]">
                            {team.members && (
                                <div>
                                    členové tymu:
                                    {team.members.map((member: any) => (
                                        <Link
                                            href={route("profile.show", {
                                                user_id: member.id,
                                            })}
                                        >
                                            <span> {member.user.username}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
