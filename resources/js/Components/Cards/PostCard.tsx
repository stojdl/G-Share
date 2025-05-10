import { useState } from "react";
import CommentCard from "./CommentCard";
import H3 from "../Headings/H3";
import CommentPostForm from "@/Fragments/Forms/CommentPostForm";

interface Props {
    post: any;
}

const PostCard = (props: Props) => {
    const { post } = props;

    const [showComments, setShowComments] = useState(false);

    return (
        <article className="p-4 bg-gray-800 space-y-4 rounded border border-gray-800 shadow-md hover:shadow-lg transition-all">
            <div className="space-y-2 border-b border-gray-700 pb-2">
                <p className="w-max flex items-center space-x-2 font-bold text-gray-400 hover:underline hover:cursor-pointer hover:text-white">
                    <span className="block border rounded-full w-8 h-8" />
                    <span>{post.user.username}</span>
                </p>
                <H3>{post.title}</H3>
                <p className="text-gray-300">{post.body}</p>
                <div className="flex items-center justify-between">
                    {post.reactions.length > 0 && (
                        <p className="text-gray-400">
                            {post.reactions?.map((reaction: any, k: number) => (
                                <span key={k} className="text-red-500">
                                    {reaction.reaction_type}
                                    {k < post.reactions.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </p>
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

            {post.comments?.length > 0 ? (
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="mt-4 font-semibold text-red-500 cursor-pointer hover:underline"
                >
                    💬 {showComments ? "Skrýt komentáře" : "Zobrazit komentáře"}
                </button>
            ) : (
                <p>Zatím žádné komentáře.</p>
            )}

            {showComments && (
                <div className="mt-2 space-y-2">
                    {post.comments?.map(
                        (comment: any) =>
                            comment.parent_comment_id === null && (
                                <CommentCard
                                    key={comment.id}
                                    comment={comment}
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
