import { useModal } from "@/Contexts/ModalContext";
import { useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

const SharePostForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        body: "",
    });

    const { closeModal } = useModal();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("post.store"), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <form onSubmit={submit}>
            <input
                name="title"
                type="text"
                placeholder="📌 Titulek příspěvku"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                className="w-full mb-4 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white"
            />

            {/* Kategorie / tagy */}
            <input
                type="text"
                placeholder="🏷️ Kategorie (např. akce, bug, humor...)"
                className="w-full mb-4 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white cursor-not-allowed"
                disabled
            />

            {/* Obsah */}
            <textarea
                name="body"
                placeholder="✍️ Obsah příspěvku"
                value={data.body}
                onChange={(e) => setData("body", e.target.value)}
                className="w-full mb-4 px-5 py-4 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white resize-none"
                rows={6}
            ></textarea>

            {/* Odkazy, video, obrázky */}
            <input
                type="file"
                placeholder="📎 Přilož odkazy (videa, obrázky, twitch klipy...)"
                className="w-full mb-6 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white cursor-not-allowed"
                disabled
            />

            {/* Odeslat */}
            <div className="text-right">
                <button
                    type="submit"
                    className="px-6 py-2 rounded bg-red-600 hover:bg-red-700 transition font-semibold"
                >
                    Vytvořit příspěvek
                </button>
            </div>
        </form>
    );
};

export default SharePostForm;
