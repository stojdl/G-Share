import { Link } from "@inertiajs/react";
import React from "react";

type Team = {
    name: string;
    description?: string;
    members: any;
    logoUrl?: string;
    slug: string;
};

type TeamCardProps = {
    team: Team;
};

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    console.log(team);

    return (
        <Link href={route("team", team.slug)} className="block">
            <div className="border border-border rounded-lg p-5 shadow-md bg-bg-tile hover:bg-bg-tile-hover">
                {team.logoUrl && (
                    <img
                        src={team.logoUrl}
                        alt={`${team.name} logo`}
                        className="w-15 h-15 rounded-full mb-4 object-cover"
                    />
                )}
                <h2 className="m-0 mb-2 text-2xl font-semibold">{team.name}</h2>
                {team.description && (
                    <p className="text-gray-600 mb-3">{team.description}</p>
                )}
                <div className="flex items-center gap-2 text-text-light">
                    <strong>Members:</strong>

                    {team.members.map((member: any, idx: number) => (
                        <span key={idx}>{member.user.username}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default TeamCard;
