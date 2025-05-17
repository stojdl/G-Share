import { useModal } from "@/Contexts/ModalContext";

const NotificationModal = () => {
    const modal = useModal();
    return (
        <div className="fixed inset-0 z-50 bg-bg/25 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
            <div className="bg-bg rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
                <button
                    onClick={() => modal.closeModal()}
                    className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                    aria-label="Zavřít"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-bold mb-6 text-primary">
                    Notifikace
                </h2>

                <div className="pb-21 flex flex-col gap-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 bg-tile hover:bg-bg-tile-hover border border-border rounded p-3"
                        >
                            <div className="w-10 h-10 rounded-full border border-text shrink-0" />
                            <div className="flex flex-col text-sm">
                                <p className="font-semibold text-sm">
                                    Notifikace #{i}
                                </p>
                                <p className="text-xs text-text-light leading-snug">
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
