import TextInput from "@/Components/Forms/Inputs/TextInput";
import { PageProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface Props {
    post_id: any;
    parent_comment_id: any;
    setShowReplies: any;
}

const CommentPostForm = (props: Props) => {
    const { post_id, parent_comment_id, setShowReplies } = props;

    const { shareplace } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        post_id: post_id,
        parent_comment_id: parent_comment_id,
        body: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("comment.store"), {
            onSuccess: () => {
                reset("body");
                setShowReplies(true);
            },
            preserveScroll: true,
        });
    };

    return (
        <form onSubmit={submit} className="flex items-center space-x-4">
            <TextInput
                name="body"
                value={data.body}
                onChange={(e) => setData("body", e.target.value)}
                placeholder={`${shareplace.post.comment.reply.placeholder}`}
            />
            <button
                type="submit"
                disabled={processing}
                className="px-4 py-2 rounded border border-primary text-primary"
            >
                {shareplace.post.comment.reply.create}
            </button>
        </form>
    );
};

export default CommentPostForm;
