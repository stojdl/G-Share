import SubcommentPostForm from "@/Fragments/Forms/SubcommentPostForm";
import { useState } from "react";

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
            className="p-4 bg-gray-700 rounded border border-gray-700 shadow-sm hover:shadow-md transition-all"
        >
            <p className="text-gray-400">{comment.user.username}</p>
            <p className="font-bold text-white">{comment.body}</p>
            {comment.likes?.length > 0 && (
                <p className="text-gray-400">
                    Líbí se: {comment.likes?.length || 0}
                </p>
            )}
            {comment.children?.length > 0 && (
                <button
                    onClick={() => {
                        setShowReplies(!showReplies);
                        setIteration(iteration + 1);
                    }}
                    className="mt-2 font-semibold text-red-500 cursor-pointer hover:underline"
                >
                    💬 {showReplies ? "Skrýt odpovědi" : "Zobrazit odpovědi"}
                    {comment.children?.length > 0
                        ? ` (${comment.children?.length})`
                        : ` (${comment.children?.length})`}
                </button>
            )}

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
