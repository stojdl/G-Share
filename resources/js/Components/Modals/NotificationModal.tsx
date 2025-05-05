import { useModal } from "@/Contexts/ModalContext";

const NotificationModal = () => {
    const modal = useModal();
    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
            <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                <button
                    onClick={() => modal.closeModal()}
                    className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                    aria-label="Zavřít"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-bold text-white mb-6">
                    Notifikace
                </h2>

                <div className="pb-21 flex flex-col gap-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 bg-gray-800 border border-gray-700 rounded p-3"
                        >
                            <div className="w-10 h-10 bg-gray-600 rounded-md shrink-0" />
                            <div className="flex flex-col text-sm">
                                <p className="font-semibold text-white text-sm">
                                    Notifikace #{i}
                                </p>
                                <p className="text-xs text-gray-300 leading-snug">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam quis diam. Etiam
                                    ligula pede, sagittis quis, interdum
                                    ultricies.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default NotificationModal;
