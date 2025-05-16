import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import CommentCard from "./CommentCard";
import H3 from "../Headings/H3";
import CommentPostForm from "@/Fragments/Forms/CommentPostForm";
import { Link } from "@inertiajs/react";
import PostReactionForm from "@/Fragments/Forms/PostReactionForm";
import PostReactions from "../PostReactions";

interface Props {
    post: any;
}

const PostCard = (props: Props) => {
    const { post } = props;

    const [showComments, setShowComments] = useState(false);

    const commentCount = post.comments?.length || 0;
    const viewCount = post.views?.length || 0;
    const shareCount = post.shares?.length || 0;

    const toggleComments = useCallback(() => {
        setShowComments((prevShowComments) => !prevShowComments);
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
                    <PostReactions post={post} />
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
            <div className="mt-4 flex flex-col justify-between space-y-2 sm:flex-row sm:items-center">
                <PostReactionForm post={post} />
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
                <p className="cursor-not-allowed text-red-500 font-bold">
                    📤 Sdílet
                </p>
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
