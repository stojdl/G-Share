import { PageProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";

interface Props {
    request_id: any;
}

export default function AcceptRequestForm(props: Props) {
    const { request_id } = props;

    const { post, processing, errors } = useForm({
        request_id: request_id,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("team.request.accept"));
    };

    return (
        <form className="space-y-1" onSubmit={handleSubmit}>
            <button type="submit">Accept request</button>
        </form>
    );
}
