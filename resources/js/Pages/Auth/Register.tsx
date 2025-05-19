import InputError from "@/Components/Forms/Inputs/InputError";
import InputLabel from "@/Components/Forms/Inputs/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/Forms/Inputs/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <section className="w-full max-w-md">
                <Head title="Registrace" />

                {/* Nadpis */}
                <h2 className="text-3xl font-bold text-[#49ab93] mb-8 text-center">
                    Registrace do G-Share
                </h2>

                {/* Formulář */}
                <form onSubmit={submit} className="space-y-6">
                    {/* Uživatelské jméno */}
                    <div>
                        <InputLabel htmlFor="name" value="Uživatelské jméno" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-2 focus:ring-[#49ab93] focus:border-[#49ab93]"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* Email */}
                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-2 focus:ring-[#49ab93] focus:border-[#49ab93]"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* Heslo */}
                    <div>
                        <InputLabel htmlFor="password" value="Heslo" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-2 focus:ring-[#49ab93] focus:border-[#49ab93]"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Potvrzení hesla */}
                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Potvrzení hesla"
                        />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-2 focus:ring-[#49ab93] focus:border-[#49ab93]"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    {/* Odkaz + tlačítko */}
                    <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
                        <Link
                            href={route("login")}
                            className="text-sm text-gray-400 underline hover:text-[#49ab93] transition"
                        >
                            Už máš účet? Přihlas se
                        </Link>

                        <PrimaryButton disabled={processing}>
                            Registrovat
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </GuestLayout>
    );
}
