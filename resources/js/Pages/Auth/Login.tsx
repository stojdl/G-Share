import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import TextField from "@/Components/Forms/Inputs/TextField";
import { PageProps } from "@/types";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { login } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Přihlášení" />
            <section className="w-full max-w-md mx-auto   rounded-xl p-6 shadow space-y-6 text-[var(--color-text)]">
                <div className="text-center text-3xl font-bold text-[var(--color-accent)] mb-4">
                    {login.title}
                </div>
                {status && (
                    <div className="mb-4 text-sm font-medium text-center">
                        {status}
                    </div>
                )}
                <form onSubmit={submit} className="space-y-6">
                    <TextField
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-placeholder)] focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)]"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                        label={login.email}
                        error={errors.email}
                    />
                    <TextField
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="bg-[var(--color-bg-input-text)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-placeholder)] focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)]"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        label={login.password}
                        error={errors.password}
                    />
                    <label className="w-max flex items-center text-sm">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="bg-[var(--color-bg-input-text)] border-[var(--color-border)] focus:ring-[var(--color-accent)]"
                        />
                        <span className="ml-2 text-[var(--color-text)]">
                            {login.remember}
                        </span>
                    </label>
                    <div className="flex items-center justify-between mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm underline text-[var(--color-placeholder)] hover:text-[var(--color-accent)] transition"
                            >
                                {login.forgotPassword}
                            </Link>
                        )}

                        <PrimaryButton disabled={processing}>
                            {login.button}
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </GuestLayout>
    );
}
