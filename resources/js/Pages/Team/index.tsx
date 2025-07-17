import H3 from "@/Components/Headings/H3";
import AcceptRequestForm from "@/Fragments/Forms/Team/AcceptRequestForm";
import DeleteForm from "@/Fragments/Forms/Team/DeleteForm";
import JoinForm from "@/Fragments/Forms/Team/JoinForm";
import LeaveForm from "@/Fragments/Forms/Team/LeaveForm";
import RequestForm from "@/Fragments/Forms/Team/RequestForm";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { usePage, Link } from "@inertiajs/react";
import moment from "moment";

export default function CreateTeam() {
    const { auth, team, locale } = usePage<PageProps>().props;

    console.log(team, auth);

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
                        className="bg-primary text-button-text hover:bg-primary-hover px-4 py-2 rounded font-semibold transition"
                    >
                        Vytvořit tým
                    </Link>
                    <Link
                        href={route("team.find")}
                        className="bg-secondary text-secondary-text hover:bg-secondary-hover px-4 py-2 rounded font-semibold transition"
                    >
                        Najít tým
                    </Link>
                </div>
                <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 rounded bg-[var(--color-button)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] transition"
                >
                    ← Zpět
                </button>
                <div className="w-full flex flex-col md:flex-row justify-center bg-bg-tile border border-border items-center gap-4 p-4 rounded shadow">
                    <div className="w-full bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded p-4">
                        <h3 className="font-bold text-lg text-[var(--color-text)] mb-2">
                            {team.name}
                        </h3>
                        <div className="text-[var(--color-placeholder)] mb-1">
                            popisek: {team.description}
                        </div>
                        <div className="text-[var(--color-text)]">
                            {team.region && <span>Region: {team.region}</span>}
                        </div>
                        <div className="text-[var(--color-text)]">
                            {team.language && (
                                <span>Lang: {team.language}</span>
                            )}
                        </div>
                        <div className="text-[var(--color-text)]">
                            {team.size && (
                                <span>velikost týmu: {team.size}</span>
                            )}
                        </div>
                        <div className="text-[var(--color-text)]">
                            {team.created_at && (
                                <span>
                                    založeno:{" "}
                                    {moment(team.created_at)
                                        .locale(locale)
                                        .toLocaleString()}{" "}
                                </span>
                            )}
                        </div>
                        <div className="text-[var(--color-text)]">
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
                        <div className="text-[var(--color-text)]">
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
                        <div className="text-[var(--color-text)]">
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
                        <div className="mt-4 pt-2 border-t text-right">
                            {auth.user.id === team.owner.id && <DeleteForm />}

                            {team.members.find(
                                (member: any) =>
                                    member.user.id === auth.user.id &&
                                    team.owner.id !== auth.user.id
                            ) && <LeaveForm />}

                            {!team.members.find(
                                (member: any) => member.user.id === auth.user.id
                            ) && (
                                <>
                                    {team.membership_type === "open" && (
                                        <JoinForm />
                                    )}
                                    {team.membership_type === "request" &&
                                        (!team.join_requests?.find(
                                            (join_request: any) =>
                                                join_request.user.id ===
                                                auth.user.id
                                        ) ? (
                                            <RequestForm />
                                        ) : (
                                            <div>request sent</div>
                                        ))}
                                    {team.membership_type === "invite" && (
                                        <div>
                                            Do tohoto týmu musíš pozvánku
                                            dostat.
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {auth.user.id === team.owner.id && (
                    <div className="w-full flex flex-col bg-bg-tile border border-border  gap-4 p-4 rounded shadow">
                        <p>Nastavení</p>

                        {team.membership_type === "request" &&
                            team.join_requests.filter(
                                (request: any) => request.status === "pending"
                            ).length > 0 && (
                                <>
                                    <span>Join requests:</span>
                                    <div className="w-full grid grid-cols-2 gap-4">
                                        {team.join_requests
                                            .filter(
                                                (request: any) =>
                                                    request.status === "pending"
                                            )
                                            .map((request: any) => (
                                                <div
                                                    key={request.id}
                                                    className="p-2 flex justify-between items-center border border-border rounded "
                                                >
                                                    <Link
                                                        href={route(
                                                            "profile.show",
                                                            {
                                                                user_id:
                                                                    request.user
                                                                        .id,
                                                            }
                                                        )}
                                                    >
                                                        {request.user.username}
                                                    </Link>
                                                    <div>
                                                        <AcceptRequestForm
                                                            request_id={
                                                                request.id
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </>
                            )}
                    </div>
                )}
            </main>
        </Layout>
    );
}
