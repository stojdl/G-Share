import { PageProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";

export default function JoinForm() {
    const { team } = usePage<PageProps>().props;

    const { post, processing, errors } = useForm({ team_id: team.id });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("team.join"));
    };

    return (
        <form className="space-y-1" onSubmit={handleSubmit}>
            <button type="submit">Join team</button>
        </form>
    );
}
