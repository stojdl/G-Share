import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import CommentCard from "./CommentCard";
import H3 from "../Headings/H3";
import CommentPostForm from "@/Fragments/Forms/CommentPostForm";
import { Link } from "@inertiajs/react";
import PostReactionForm from "@/Fragments/Forms/PostReactionForm";
import PostReactions from "../PostReactions";
import { FaComments, FaRegComments } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { TbEyeExclamation } from "react-icons/tb";

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
        <article className="p-4 bg-bg-post-card space-y-4 rounded border border-border shadow-sm shadow-shadow hover:shadow-shadow hover:shadow-md transition-all">
            <div className="space-y-2 border-b border-border pb-2">
                <Link
                    href={route("user_profile", { user: post.user.id })}
                    className="w-max flex items-center space-x-2 font-bold hover:underline hover:cursor-pointer"
                >
                    <span className="block border border-text-light rounded-full w-8 h-8" />
                    <span className="text-text-light hover:text-text transition">
                        {post.user.username}
                    </span>
                </Link>
                <H3>{post.title}</H3>
                <p className="">{post.body}</p>
                <div className="flex items-center justify-between">
                    <PostReactions post={post} />
                    <div className="flex items-center space-x-4 text-text-light">
                        {viewCount > 0 && (
                            <p className="mt-2 flex items-center space-x-0.5">
                                <TbEyeExclamation className="text-xl" />
                                <span>{viewCount}</span>
                            </p>
                        )}

                        {shareCount > 0 && (
                            <p className="mt-2 flex items-center space-x-0.5">
                                <FaRegShareSquare /> <span>{shareCount}</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col justify-between space-y-2 sm:flex-row sm:items-center">
                <div className="w-full">
                    <PostReactionForm post={post} />
                </div>
                <div className="w-full flex justify-center">
                    {commentCount > 0 ? (
                        <button
                            onClick={toggleComments}
                            className="flex items-center space-x-2 font-semibold cursor-pointer text-primary"
                        >
                            <p className="flex items-center space-x-2">
                                {showComments ? (
                                    <>
                                        <FaComments className="text-lg" />
                                        <span>Skrýt komentáře</span>
                                    </>
                                ) : (
                                    <>
                                        <FaRegComments className="text-lg" />
                                        <span>Zobrazit komentáře</span>
                                    </>
                                )}
                                {` (${commentCount})`}
                            </p>
                        </button>
                    ) : (
                        <p className="text-text-light">
                            Zatím žádné komentáře.
                        </p>
                    )}
                </div>
                <div className="w-full flex justify-end">
                    <p className="flex items-center space-x-2 cursor-not-allowed font-bold text-primary">
                        <FaRegShareSquare /> <span>Sdílet</span>
                    </p>
                </div>
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

            <CommentPostForm
                post_id={post.id}
                setShowComments={setShowComments}
            />
        </article>
    );
};

export default PostCard;
