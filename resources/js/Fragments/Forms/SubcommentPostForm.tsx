import TextInput from "@/Components/Forms/Inputs/TextInput";
import { useForm } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { FormEventHandler } from "react";

interface Props {
    post_id: any;
    parent_comment_id: any;
    setShowReplies: any;
}

const CommentPostForm = (props: Props) => {
    const { t } = useLaravelReactI18n();

    const { post_id, parent_comment_id, setShowReplies } = props;

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
                placeholder="Napiš odpověď..."
            />
            <button
                type="submit"
                disabled={processing}
                className="px-4 py-2 rounded border border-primary text-primary"
            >
                {t("share-place.post.comment.reply.create")}
            </button>
        </form>
    );
};

export default CommentPostForm;
