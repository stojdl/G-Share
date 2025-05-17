import { useModal } from "@/Contexts/ModalContext";
import LeftSideBar from "@/Fragments/LeftSideBar";
import RightSideBar from "@/Fragments/RightSideBar";
import { ReactNode } from "react";

const ChatModal = () => {
    const modal = useModal();
    return (
        <div className="fixed inset-0 z-50 bg-bg/25 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
            <div className="bg-bg rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col relative">
                <button
                    onClick={() => modal.closeModal()}
                    className="absolute top-5 right-6 hover:text-red-500 text-2xl font-bold"
                    aria-label="Zavřít"
                >
                    ✕
                </button>

                <div className="p-6 sm:p-8 border-b border-border">
                    <h2 className="text-2xl font-bold text-primary">
                        💬 Chat místnost
                    </h2>
                    <p className="text-sm">Diskutuj s hráči v reálném čase</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 bg-tile hover:bg-bg-tile-hover"
                        >
                            <div className="w-10 h-10 border border-text rounded-full" />
                            <div>
                                <p className="text-sm font-semibold">
                                    Hráč #{i + 1}
                                </p>
                                <p className="text-sm text-text-light">
                                    Tohle je zpráva do chatu. 🎯
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border p-4">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            //handle send
                        }}
                        className="flex items-center gap-3"
                    >
                        <input
                            type="text"
                            placeholder="Napiš zprávu..."
                            className="flex-1 px-4 py-2 bg-bg-input-text hover:bg-bg-input-text-hover rounded border border-border placeholder-placeholder"
                        />
                        <button
                            type="submit"
                            className=" px-4 py-2 border border-primary text-primary rounded font-semibold transition"
                        >
                            Odeslat
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ChatModal;
