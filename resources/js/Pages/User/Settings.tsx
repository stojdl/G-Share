import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import UpdateProfileInformationForm from "../Profile/Partials/UpdateProfileInformationForm";

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold text-[var(--color-text)]">
                    Uživatelské nastavení
                </h2>
            }
        >
            <Head title="Profil" />
            <div className="px-6 py-4">
                <button
                    onClick={() => window.history.back()}
                    className="text-sm px-4 py-2 rounded bg-[var(--color-button)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] transition"
                >
                    ← Zpět
                </button>
            </div>
            <div className="py-6 px-4 md:px-6">
                <div className="mx-auto max-w-5xl space-y-6">
                    <div className="bg-[var(--color-bg-tile)] text-[var(--color-text)] border border-[var(--color-border)] p-6 rounded-xl shadow">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-2xl"
                        />
                    </div>
                    <div className="bg-[var(--color-bg-tile)] text-[var(--color-text)] border border-[var(--color-border)] p-6 rounded-xl shadow"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
