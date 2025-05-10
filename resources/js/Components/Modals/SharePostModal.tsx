import { useModal } from "@/Contexts/ModalContext";
import SharePostForm from "@/Fragments/Forms/SharePostForm";

const SharePostModal = () => {
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

                <SharePostForm />
            </div>
        </div>
    );
};
export default SharePostModal;
