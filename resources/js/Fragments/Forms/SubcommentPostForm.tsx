import TextInput from "@/Components/Forms/Inputs/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface Props {
    post_id: any;
    parent_comment_id: any;
}

const CommentPostForm = (props: Props) => {
    const { post_id, parent_comment_id } = props;

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
                placeholder="Napiš odpověď..."
            />
            <button type="submit" disabled={processing}>
                Odpovědět
            </button>
        </form>
    );
};

export default CommentPostForm;
