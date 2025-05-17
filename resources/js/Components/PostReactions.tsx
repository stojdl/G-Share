import { Link, usePage } from "@inertiajs/react";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

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
                            className="text-text-light hover:underline"
                        >
                            {reaction}
                            {data.count > 1 ? ` (${data.count})` : ""}
                        </button>
                        {expandedReactionIndex === k && (
                            <div
                                className="absolute left-0 mt-2 p-2 bg-gray-700 border border-gray-600 rounded shadow-md z-10"
                                ref={reactionUsersRef}
                            >
                                {data.users.map((user: any) => (
                                    <Link
                                        key={user.id}
                                        href={route("user_profile", {
                                            user: user.id,
                                        })}
                                        className="block text-gray-500 hover:underline"
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
