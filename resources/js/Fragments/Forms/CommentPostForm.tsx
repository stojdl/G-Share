import TextInput from "@/Components/Forms/Inputs/TextInput";
import { router, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface Props {
    post_id: any;
    setShowComments: any;
}

const CommentPostForm = (props: Props) => {
    const { post_id, setShowComments } = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        post_id: post_id,
        body: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("comment.store"), {
            onSuccess: () => {
                reset("body");
                router.reload({ only: ["comments"] });
                setShowComments(true);
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
                placeholder="Napiš komentář..."
            />
            <button
                type="submit"
                disabled={processing}
                className="text-red-500 font-bold border border-gray-500 px-4 py-2 rounded"
            >
                Okomentovat
            </button>
        </form>
    );
};

export default CommentPostForm;
