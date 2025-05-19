import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/Forms/Inputs/InputError";
import InputLabel from "@/Components/Forms/Inputs/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/Forms/Inputs/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import TextField from "@/Components/Forms/Inputs/TextField";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
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
            <section className="w-full max-w-md">
                <div className="text-center text-3xl font-bold text-[#49ab93] mb-8">
                    Přihlásit se
                </div>
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-500 text-center">
                        {status}
                    </div>
                )}
                <form onSubmit={submit} className="space-y-6">
                    {/* Email */}

                    <TextField
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-2 focus:ring-[#49ab93] focus:border-[#49ab93]"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                        label="E-mail"
                        error={errors.email}
                    />

                    {/* Heslo */}
                    <TextField
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full focus:ring-[#49ab93] focus:border-[#49ab93]"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        label="Heslo"
                        error={errors.password}
                    />
                    {/* Zapamatovat */}
                    <label className="w-max flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="bg-[#141414] border-gray-300  focus:ring-[#49ab93]"
                        />
                        <span className="ml-2 text-sm text-gray-300">
                            Zapamatovat si mě
                        </span>
                    </label>

                    {/* Odkaz + tlačítko */}
                    <div className="flex items-center justify-between mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-gray-400 underline hover:text-[#49ab93] transition"
                            >
                                Zapomněl jsi heslo?
                            </Link>
                        )}

                        <PrimaryButton disabled={processing}>
                            Přihlásit se
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </GuestLayout>
    );
}
