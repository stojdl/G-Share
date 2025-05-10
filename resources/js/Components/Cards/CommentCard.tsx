import { useState } from "react";

interface Props {
    comment: any;
}

const CommentCard = (props: Props) => {
    const { comment } = props;

    const [showReplies, setShowReplies] = useState(false);

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
                <>
                    <p className="text-gray-400">
                        Odpovědi: {comment.children?.length}
                    </p>
                    <button
                        onClick={() => setShowReplies(!showReplies)}
                        className="mt-2 font-semibold text-red-500 cursor-pointer hover:underline"
                    >
                        💬{" "}
                        {showReplies ? "Skrýt odpovědi" : "Zobrazit odpovědi"}
                    </button>
                </>
            )}
            <div>
                {showReplies && (
                    <div className="mt-2 space-y-2">
                        {comment.children?.map((reply: any) => (
                            <CommentCard key={reply.id} comment={reply} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentCard;
