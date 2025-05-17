import CommentLikeForm from "@/Fragments/Forms/CommentLikeForm";
import SubcommentPostForm from "@/Fragments/Forms/SubcommentPostForm";
import { useState } from "react";
import { FaComments, FaRegComments } from "react-icons/fa6";

interface Props {
    comment: any;
    maxRecursion: number;
}

const CommentCard = (props: Props) => {
    const { comment, maxRecursion } = props;

    const [showReplies, setShowReplies] = useState(false);
    const [iteration, setIteration] = useState(0);

    return (
        <div
            key={comment.id}
            className="p-4 bg-bg-comment-card rounded border border-border shadow-sm shadow-shadow hover:shadow-md hover:shadow-shadow transition-all"
        >
            <p className="text-text-light">{comment.user.username}</p>
            <p className="">{comment.body}</p>
            <div className="flex items-center justify-between">
                <p className="mt-1 flex items-center space-x-1 text-text-light">
                    <CommentLikeForm comment={comment} />
                    {comment.likes?.length > 0 && (
                        <span className="-mt-1.5">
                            ({comment.likes.length})
                        </span>
                    )}
                </p>
                {comment.children?.length > 0 && (
                    <button
                        onClick={() => {
                            setShowReplies(!showReplies);
                            setIteration(iteration + 1);
                        }}
                        className="mt-2 font-semibold text-primary cursor-pointer"
                    >
                        <p className="flex items-center space-x-2">
                            {showReplies ? (
                                <>
                                    <FaComments className="text-lg" />
                                    <span>Skrýt odpovědi</span>
                                </>
                            ) : (
                                <>
                                    <FaRegComments className="text-lg" />
                                    <span>Zobrazit odpovědi</span>
                                </>
                            )}
                            {comment.children?.length > 0 ? (
                                <span> ({comment.children?.length})</span>
                            ) : (
                                <span> ({comment.children?.length})</span>
                            )}
                        </p>
                    </button>
                )}
            </div>

            {showReplies && (
                <div className="mt-2 space-y-2">
                    {comment.children?.map((reply: any) => (
                        <CommentCard
                            key={reply.id}
                            comment={reply}
                            maxRecursion={maxRecursion - iteration}
                        />
                    ))}
                </div>
            )}
            {iteration < maxRecursion && (
                <div className="mt-2">
                    <SubcommentPostForm
                        post_id={comment.post_id}
                        parent_comment_id={comment.id}
                    />
                </div>
            )}
        </div>
    );
};

export default CommentCard;
