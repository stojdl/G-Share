import { PageProps } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";

export default function DeleteForm() {
    const { team } = usePage<PageProps>().props;

    const { post, processing, errors } = useForm({ team_id: team.id });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("team.delete"));
    };

    return (
        <form className="space-y-1" onSubmit={handleSubmit}>
            <button type="submit">Delete team</button>
        </form>
    );
}
