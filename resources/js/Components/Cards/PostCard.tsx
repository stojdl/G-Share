import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import CommentCard from "./CommentCard";
import H3 from "../Headings/H3";
import CommentPostForm from "@/Fragments/Forms/CommentPostForm";
import { Link, usePage } from "@inertiajs/react";
import PostReactionForm from "@/Fragments/Forms/PostReactionForm";
import PostReactions from "../PostReactions";
import { FaComments, FaRegComments } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { TbEyeExclamation } from "react-icons/tb";
import { PageProps } from "@/types";
import { LiaUserSecretSolid } from "react-icons/lia";
import moment from "moment/min/moment-with-locales";

interface Props {
    post: any;
}

const PostCard = (props: Props) => {
    const { post } = props;

    const { shareplace, locale } = usePage<PageProps>().props;

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
                <div className="flex items-center space-x-2 ">
                    <Link
                        href={route("profile.show", { user_id: post.user.id })}
                        className="w-max text-text-light font-bold hover:underline hover:cursor-pointer"
                    >
                        <LiaUserSecretSolid className="text-4xl border border-text-light rounded-full" />
                    </Link>
                    <div className="flex flex-col">
                        <Link
                            href={route("profile.show", {
                                user_id: post.user.id,
                            })}
                            className="w-max text-text-light font-bold hover:underline hover:cursor-pointer hover:text-text"
                        >
                            {post.user.username}
                        </Link>
                        <span className="text-text-light text-sm">
                            {moment(post.created_at).locale(locale).fromNow()}
                        </span>
                    </div>
                </div>
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
                                        <span>
                                            {shareplace.post.comment.hide}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <FaRegComments className="text-lg" />
                                        <span>
                                            {shareplace.post.comment.show}
                                        </span>
                                    </>
                                )}
                                {` (${commentCount})`}
                            </p>
                        </button>
                    ) : (
                        <p className="text-text-light">
                            {shareplace.post.comment.empty}
                        </p>
                    )}
                </div>
                <div className="w-full flex justify-end">
                    <p className="flex items-center space-x-2 cursor-not-allowed font-bold text-primary">
                        <FaRegShareSquare />
                        <span> {shareplace.post.share}</span>
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
function usePageProps(): { t: any } {
    throw new Error("Function not implemented.");
}
