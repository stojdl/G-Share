import TextInput from "@/Components/Forms/Inputs/TextInput";
import { router, useForm } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { FormEventHandler } from "react";

interface Props {
    post_id: any;
    setShowComments: any;
}

const CommentPostForm = (props: Props) => {
    const { post_id, setShowComments } = props;

    const { t } = useLaravelReactI18n();

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
                className="text-primary font-bold border border-primary px-4 py-2 rounded"
            >
                {t("share-place.post.comment.create")}
            </button>
        </form>
    );
};

export default CommentPostForm;
