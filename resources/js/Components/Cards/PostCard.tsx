import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import CommentCard from "./CommentCard";
import H3 from "../Headings/H3";
import CommentPostForm from "@/Fragments/Forms/CommentPostForm";
import { Link } from "@inertiajs/react";
import PostReactionForm from "@/Fragments/Forms/PostReactionForm";

interface Props {
    post: any;
}

const PostCard = (props: Props) => {
    const { post } = props;

    const [showComments, setShowComments] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const reactionUsersRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (
            reactionUsersRef.current &&
            !reactionUsersRef.current.contains(event.target as Node)
        ) {
            setShowUsers(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    const reactionCounts = useMemo(() => {
        return Object.entries(
            post.reactions.reduce((acc: any, reaction: any) => {
                const type = reaction.reaction_type;
                acc[type] = acc[type] || { count: 0, users: [] };
                acc[type].count++;
                acc[type].users.push(reaction.user);
                return acc;
            }, {})
        ).sort(([, a]: any, [, b]: any) => b.count - a.count);
    }, [post.reactions]);

    const commentCount = post.comments?.length || 0;
    const viewCount = post.views?.length || 0;
    const shareCount = post.shares?.length || 0;

    const toggleComments = useCallback(() => {
        setShowComments((prevShowComments) => !prevShowComments);
    }, []);

    const toggleUsers = useCallback(() => {
        setShowUsers((prevShowUsers) => !prevShowUsers);
    }, []);

    return (
        <article className="p-4 bg-gray-800 space-y-4 rounded border border-gray-800 shadow-md hover:shadow-lg transition-all">
            <div className="space-y-2 border-b border-gray-700 pb-2">
                <Link
                    href={route("user_profile", { user: post.user.id })}
                    className="w-max flex items-center space-x-2 font-bold text-gray-400 hover:underline hover:cursor-pointer hover:text-white"
                >
                    <span className="block border rounded-full w-8 h-8" />
                    <span>{post.user.username}</span>
                </Link>
                <H3>{post.title}</H3>
                <p className="text-gray-300">{post.body}</p>
                <div className="flex items-center justify-between">
                    {reactionCounts.length > 0 && (
                        <div className="flex items-center space-x-2 relative">
                            {reactionCounts.map(
                                ([reaction, data]: any, k: number) => (
                                    <div key={k}>
                                        <button
                                            onClick={toggleUsers}
                                            className="text-gray-400 hover:underline"
                                        >
                                            {reaction}
                                            {data.count > 1
                                                ? ` (${data.count})`
                                                : ""}
                                        </button>
                                        {showUsers && (
                                            <div
                                                className="absolute left-0 mt-2 p-2 bg-gray-700 border border-gray-600 rounded shadow-md z-10"
                                                ref={reactionUsersRef}
                                            >
                                                {data.users.map((user: any) => (
                                                    <Link
                                                        key={user.id}
                                                        href={route(
                                                            "user_profile",
                                                            { user: user.id }
                                                        )}
                                                        className="block text-gray-500 hover:underline"
                                                    >
                                                        {user.username.replace(
                                                            / /g,
                                                            "\u00A0"
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    )}
                    <div className="flex items-center space-x-2">
                        {viewCount > 0 && (
                            <p className="text-gray-400 mt-2">👁️ {viewCount}</p>
                        )}

                        {shareCount > 0 && (
                            <p className="text-gray-400 mt-2">
                                🔁 {shareCount}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <PostReactionForm />
                {commentCount > 0 ? (
                    <button
                        onClick={toggleComments}
                        className="font-semibold text-red-500 cursor-pointer hover:underline"
                    >
                        💬{" "}
                        {showComments
                            ? "Skrýt komentáře"
                            : "Zobrazit komentáře"}
                        {` (${commentCount})`}
                    </button>
                ) : (
                    <p>Zatím žádné komentáře.</p>
                )}
            </div>
            {showComments && (
                <div className="mt-2 space-y-2">
                    {post.comments?.map(
                        (comment: any) =>
                            comment.parent_comment_id === null && (
                                <CommentCard
                                    key={comment.id}
                                    comment={comment}
                                    maxRecursion={5}
                                />
                            )
                    )}
                </div>
            )}

            <CommentPostForm post_id={post.id} />
        </article>
    );
};

export default PostCard;
