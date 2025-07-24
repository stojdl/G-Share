import Back from "@/Components/Back";
import H3 from "@/Components/Headings/H3";
import H4 from "@/Components/Headings/H4";
import AcceptRequestForm from "@/Fragments/Forms/Team/AcceptRequestForm";
import DeleteForm from "@/Fragments/Forms/Team/DeleteForm";
import JoinForm from "@/Fragments/Forms/Team/JoinForm";
import LeaveForm from "@/Fragments/Forms/Team/LeaveForm";
import RequestForm from "@/Fragments/Forms/Team/RequestForm";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { usePage, Link } from "@inertiajs/react";
import moment from "moment";
import { BiWorld } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { GiSwordsEmblem } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";
import { LiaUserSecretSolid } from "react-icons/lia";
import { RiTeamFill } from "react-icons/ri";

export default function CreateTeam() {
    const { auth, team, locale } = usePage<PageProps>().props;

    console.log(team, auth);

    return (
        <Layout>
            <main className="relative w-full h-full space-y-2">
                <Back />
                <div className="w-full p-4 flex flex-col gap-4 bg-bg-tile border border-border rounded shadow md:flex-row">
                    <div>
                        <GiSwordsEmblem className="p-3 text-9xl text-text-light border border-text-light rounded-full cursor-not-allowed" />
                    </div>
                    <div className="w-full px-4 py-2 bg-bg-tile border border-border rounded">
                        <H4>{team.name}</H4>
                        <div className="text-placeholder mb-1">
                            {team.description}
                        </div>
                        <div>
                            {team.creator && (
                                <p className="flex items-center gap-1">
                                    <LiaUserSecretSolid className="w-6 h-6" />
                                    <Link
                                        href={route("profile.show", {
                                            user_id: team.creator.id,
                                        })}
                                    >
                                        <span className="text-lg">
                                            {team.creator.username}
                                        </span>
                                        ,
                                    </Link>

                                    {team.created_at && (
                                        <span>
                                            {moment(team.created_at)
                                                .locale(locale)
                                                .fromNow()
                                                .toLocaleString()}{" "}
                                        </span>
                                    )}
                                </p>
                            )}
                        </div>

                        <div className="mt-2 pt-1 border-t flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div>
                                    {team.region && (
                                        <p className="flex items-center gap-1">
                                            <BiWorld />
                                            <span className="uppercase">
                                                {team.region}
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <div>
                                    {team.language && (
                                        <p className="flex items-center gap-1">
                                            <IoLanguage />
                                            <span className="uppercase">
                                                {team.language}
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <div>
                                    {team.size && (
                                        <p className="flex items-center gap-1">
                                            <RiTeamFill />
                                            <span className="uppercase">
                                                {team.size}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                {auth.user.id === team.owner.id && (
                                    <DeleteForm />
                                )}

                                {team.members.find(
                                    (member: any) =>
                                        member.user.id === auth.user.id &&
                                        team.owner.id !== auth.user.id
                                ) && <LeaveForm />}

                                {!team.members.find(
                                    (member: any) =>
                                        member.user.id === auth.user.id
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
                </div>

                {auth.user.id === team.owner.id && (
                    <div className="w-full p-4 flex flex-col gap-4 bg-bg-tile border border-border rounded shadow">
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
                                                    className="p-2 flex justify-between items-center border border-border rounded"
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

                <div className="mt-4 bg-bg-tile p-4 flex flex-col gap-4 border border-border">
                    <div className="grid grid-cols-3">
                        <div className="group w-full grid place-items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 p-2 grid place-items-center border border-border rounded-full group-hover:border-border-hover transition cursor-not-allowed">
                                    {team.members.length > 3 ? (
                                        <div className="w-full h-full">
                                            <Link
                                                href={route("profile.show", {
                                                    user_id:
                                                        team.members[3].user.id,
                                                })}
                                            >
                                                <LiaUserSecretSolid className="w-full h-full text-text-light" />
                                            </Link>
                                        </div>
                                    ) : (
                                        <span className="text-3xl text-text-light">
                                            +
                                        </span>
                                    )}
                                </div>
                                <div>
                                    {team.members.length > 3 ? (
                                        <Link
                                            href={route("profile.show", {
                                                user_id:
                                                    team.members[3].user.id,
                                            })}
                                        >
                                            <p className="pt-1 flex items-center space-x-2">
                                                {team.members[3].user.id ===
                                                    team.owner.id && (
                                                    <FaCrown />
                                                )}
                                                <span>
                                                    {
                                                        team.members[3].user
                                                            .username
                                                    }
                                                </span>
                                            </p>
                                        </Link>
                                    ) : (
                                        <p className="pt-1 text-text-light cursor-not-allowed">
                                            Pozvat hráče
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid place-items-center">
                            <GiSwordsEmblem className="p-3 text-[172px] text-text-light border border-border rounded-full cursor-not-allowed" />
                        </div>
                        <div className="w-full grid place-items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 p-2 grid place-items-center border border-border rounded-full group-hover:border-border-hover transition cursor-not-allowed">
                                    {team.members.length > 4 && (
                                        <div className="w-full h-full">
                                            <Link
                                                href={route("profile.show", {
                                                    user_id:
                                                        team.members[4].user.id,
                                                })}
                                            >
                                                <LiaUserSecretSolid className="w-full h-full text-text-light" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {team.members.length > 4 ? (
                                        <Link
                                            href={route("profile.show", {
                                                user_id:
                                                    team.members[4].user.id,
                                            })}
                                        >
                                            <p className="pt-1 flex items-center gap-2">
                                                {team.members[4].user.id ===
                                                    team.owner.id && (
                                                    <FaCrown />
                                                )}
                                                <span>
                                                    {
                                                        team.members[4].user
                                                            .username
                                                    }
                                                </span>
                                            </p>
                                        </Link>
                                    ) : (
                                        <p className="pt-1 text-text-light cursor-not-allowed">
                                            Pozvat hráče
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6 pt-8 pb-16 grid place-items-end">
                            <div className="group flex flex-col items-center">
                                <div className="w-24 h-24 p-2 grid place-items-center border border-border rounded-full group-hover:border-border-hover transition cursor-not-allowed">
                                    {team.members.length > 1 && (
                                        <div className="w-full h-full">
                                            <Link
                                                href={route("profile.show", {
                                                    user_id:
                                                        team.members[1].user.id,
                                                })}
                                            >
                                                <LiaUserSecretSolid className="w-full h-full text-text-light" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {team.members.length > 1 ? (
                                        <Link
                                            href={route("profile.show", {
                                                user_id:
                                                    team.members[1].user.id,
                                            })}
                                        >
                                            <p className="pt-1 flex items-center gap-2">
                                                {team.members[1].user.id ===
                                                    team.owner.id && (
                                                    <FaCrown />
                                                )}
                                                <span>
                                                    {
                                                        team.members[1].user
                                                            .username
                                                    }
                                                </span>
                                            </p>
                                        </Link>
                                    ) : (
                                        <p className="pt-1 text-text-light cursor-not-allowed">
                                            Pozvat hráče
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid justify-center items-end ">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 p-2 grid place-items-center border border-border rounded-full group-hover:border-border-hover transition cursor-not-allowed">
                                    {team.members.length > 0 && (
                                        <div className="w-full h-full">
                                            <Link
                                                href={route("profile.show", {
                                                    user_id:
                                                        team.members[0].user.id,
                                                })}
                                            >
                                                <LiaUserSecretSolid className="w-full h-full text-text-light" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {team.members.length > 0 && (
                                        <Link
                                            href={route("profile.show", {
                                                user_id:
                                                    team.members[0].user.id,
                                            })}
                                        >
                                            <p className="pt-1 flex items-center gap-2">
                                                {team.members[0].user.id ===
                                                    team.owner.id && (
                                                    <FaCrown />
                                                )}
                                                <span>
                                                    {
                                                        team.members[0].user
                                                            .username
                                                    }
                                                </span>
                                            </p>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6 pt-8 pb-16 grid place-items-start ">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 p-2 grid place-items-center border border-border rounded-full group-hover:border-border-hover transition cursor-not-allowed">
                                    {team.members.length > 2 && (
                                        <div className="w-full h-full">
                                            <Link
                                                href={route("profile.show", {
                                                    user_id:
                                                        team.members[2].user.id,
                                                })}
                                            >
                                                <LiaUserSecretSolid className="w-full h-full text-text-light" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {team.members.length > 2 ? (
                                        <Link
                                            href={route("profile.show", {
                                                user_id:
                                                    team.members[2].user.id,
                                            })}
                                        >
                                            <p className="pt-1 flex items-center gap-2">
                                                {team.members[2].user.id ===
                                                    team.owner.id && (
                                                    <FaCrown />
                                                )}
                                                <span>
                                                    {
                                                        team.members[2].user
                                                            .username
                                                    }
                                                </span>
                                            </p>
                                        </Link>
                                    ) : (
                                        <p className="pt-1 text-text-light cursor-not-allowed">
                                            Pozvat hráče
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
