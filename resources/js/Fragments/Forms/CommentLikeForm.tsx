import { useForm, router } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface Props {
    comment: any;
}

const CommentLikeForm = (props: Props) => {
    const { comment } = props;
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
                👍
            </button>
        </form>
    );
};

export default CommentLikeForm;
