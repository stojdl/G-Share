import { useModal } from "@/Contexts/ModalContext";

const PostModal = () => {
    const modal = useModal();
    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
            <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                {/* Zavřít */}
                <button
                    onClick={() => modal.closeModal()}
                    className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                    aria-label="Zavřít"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-red-400 mb-6">
                    Sdílej příspěvek
                </h2>

                {/* Titulek */}
                <input
                    type="text"
                    placeholder="📌 Nadpis příspěvku"
                    className="w-full mb-4 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white"
                />

                {/* Kategorie / tagy */}
                <input
                    type="text"
                    placeholder="🏷️ Kategorie (např. akce, bug, humor...)"
                    className="w-full mb-4 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white"
                />

                {/* Obsah */}
                <textarea
                    placeholder="✍️ Obsah příspěvku"
                    className="w-full mb-4 px-5 py-4 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white resize-none"
                    rows={6}
                ></textarea>

                {/* Odkazy, video, obrázky */}
                <input
                    type="text"
                    placeholder="📎 Přilož odkazy (videa, obrázky, twitch klipy...)"
                    className="w-full mb-6 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white"
                />

                {/* Odeslat */}
                <div className="text-right">
                    <button
                        onClick={() => {
                            // submit logic here
                            //setPostModalOpen(false);
                        }}
                        className="px-6 py-2 rounded bg-red-600 hover:bg-red-700 transition font-semibold"
                    >
                        Pošli příspěvek
                    </button>
                </div>
            </div>
        </div>
    );
};
export default PostModal;
