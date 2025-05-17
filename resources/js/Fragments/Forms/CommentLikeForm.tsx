import { useForm, router, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface Props {
    comment: any;
}

const CommentLikeForm = (props: Props) => {
    const { comment } = props;
    const { auth } = usePage().props;
    console.log("comment: ", comment);
    const { data, setData, post, processing, errors, reset } = useForm({
        comment_id: comment.id,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("comment.like"), {
            onSuccess: () => {
                reset();
                router.reload({
                    only: ["commentlikes"],
                });
            },
            preserveScroll: true,
        });
    };

    return (
        <form onSubmit={submit}>
            <button type="submit" className="hover:scale-125">
                {comment.likes &&
                comment.likes.find(
                    (like: any) => like.user_id === auth.user.id
                ) ? (
                    <AiFillLike className="text-xl text-text-light" />
                ) : (
                    <AiOutlineLike className="text-xl text-text-light" />
                )}
            </button>
        </form>
    );
};

export default CommentLikeForm;
