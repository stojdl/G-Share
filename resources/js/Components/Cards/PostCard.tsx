import { useState } from "react";
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
                    {post.reactions.length > 0 && (
                        <div className="flex items-center space-x-2">
                            {Object.entries(
                                post.reactions.reduce(
                                    (acc: any, reaction: any) => {
                                        acc[reaction.reaction_type] =
                                            (acc[reaction.reaction_type] || 0) +
                                            1;
                                        return acc;
                                    },
                                    {}
                                )
                            )
                                .sort(([, a]: any, [, b]: any) => b - a)
                                .map(([reaction, count]: any, k: number) => (
                                    <span key={k} className="text-gray-400">
                                        {reaction}
                                        {count > 1 ? ` (${count})` : ""}
                                    </span>
                                ))}
                        </div>
                    )}
                    <div className="flex items-center space-x-2">
                        {post.views.length > 0 && (
                            <p className="text-gray-400 mt-2">
                                👁️ {post.views?.length || 0}
                            </p>
                        )}

                        {post.shares.length > 0 && (
                            <p className="text-gray-400 mt-2">
                                🔁 {post.shares?.length || 0}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <PostReactionForm />
                {post.comments?.length > 0 ? (
                    <button
                        onClick={() => setShowComments(!showComments)}
                        className="font-semibold text-red-500 cursor-pointer hover:underline"
                    >
                        💬{" "}
                        {showComments
                            ? "Skrýt komentáře"
                            : "Zobrazit komentáře"}
                        {post.comments?.length > 0
                            ? ` (${post.comments?.length})`
                            : ` (${post.comments?.length})`}
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
