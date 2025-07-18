import { PageProps } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";

export default function LeaveForm() {
    const { team } = usePage<PageProps>().props;

    const { post, processing, errors } = useForm({ team_id: team.id });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("team.leave"));
    };

    return (
        <form className="space-y-1" onSubmit={handleSubmit}>
            <button type="submit">Leave team</button>
        </form>
    );
}
