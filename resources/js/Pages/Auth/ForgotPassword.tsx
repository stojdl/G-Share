import InputError from "@/Components/Forms/Inputs/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/Forms/Inputs/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Obnovení hesla" />

            <h2 className="text-2xl font-bold text-red-500 mb-6 text-center">
                Zapomenuté heslo
            </h2>

            <div className="mb-6 text-sm text-gray-400 text-center leading-relaxed">
                Zadej svůj e-mail a my ti pošleme odkaz pro obnovení hesla.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-500 text-center">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm text-white mb-1"
                    >
                        E-mail
                    </label>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>
                        Odeslat odkaz
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
