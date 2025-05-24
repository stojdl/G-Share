import { Link, usePage } from "@inertiajs/react";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { AiFillLike } from "react-icons/ai";
import { FaLaughSquint, FaSurprise, FaSadCry, FaAngry } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

interface Props {
    post: any;
}

const PostReactions: React.FC<Props> = (props) => {
    const { post } = props;
    const [expandedReactionIndex, setExpandedReactionIndex] = useState<
        number | null
    >(null);
    const reactionUsersRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                reactionUsersRef.current &&
                !reactionUsersRef.current.contains(event.target as Node)
            ) {
                setExpandedReactionIndex(null);
            }
        },
        [reactionUsersRef, setExpandedReactionIndex]
    );

    const reactionCounts = useMemo(() => {
        return Object.entries(
            post.reactions.reduce((acc: any, reaction: any) => {
                const type = reaction.reaction_type;
                acc[type] = acc[type] || { count: 0, users: [] };
                acc[type].count = (acc[type].count || 0) + 1;
                acc[type].users.push(reaction.user);
                return acc;
            }, {})
        );
    }, [post.reactions]);

    const toggleUsers = useCallback(
        (index: number) => {
            setExpandedReactionIndex((prevIndex: number | null) =>
                prevIndex === index ? null : index
            );
        },
        [setExpandedReactionIndex]
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className="flex items-center space-x-2">
            {reactionCounts.map(
                ([reaction, data]: [string, any], k: number) => (
                    <div key={k} className="relative">
                        <button
                            onClick={() => toggleUsers(k)}
                            className="flex items-center text-lg text-text-light hover:underline"
                        >
                            {(() => {
                                switch (reaction) {
                                    case "like":
                                        return <AiFillLike />;
                                    case "GG":
                                        return (
                                            <span className="text-lg font-bold">
                                                GG
                                            </span>
                                        );
                                    case "BG":
                                        return (
                                            <span className="text-lg font-bold">
                                                BG
                                            </span>
                                        );
                                    case "love":
                                        return <FaHeart />;
                                    case "haha":
                                        return <FaLaughSquint />;
                                    case "wow":
                                        return <FaSurprise />;
                                    case "sad":
                                        return <FaSadCry />;
                                    case "angry":
                                        return <FaAngry />;
                                    default:
                                        return reaction;
                                }
                            })()}
                            <span className="text-sm">
                                {data.count > 1 ? ` (${data.count})` : ""}
                            </span>
                        </button>
                        {expandedReactionIndex === k && (
                            <div
                                className="absolute left-0 mt-2 p-2 bg-bg-tile border border-border rounded shadow-md z-10"
                                ref={reactionUsersRef}
                            >
                                {data.users.map((user: any) => (
                                    <Link
                                        key={user.id}
                                        href={route("profile.show", {
                                            user_id: user.id,
                                        })}
                                        className="block text-text-light hover:underline"
                                    >
                                        {user.username.replace(/ /g, "\u00A0")}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default PostReactions;
