import LeftSideBar from "@/Fragments/LeftSideBar";
import RightSideBar from "@/Fragments/RightSideBar";
import { ReactNode } from "react";

interface Props {
    setChatModalOpen: any;
}

const ChatModal = (props: Props) => {
    const { setChatModalOpen } = props;

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
            <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col text-white relative">
                <button
                    onClick={() => setChatModalOpen(false)}
                    className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                    aria-label="Zavřít"
                >
                    ✕
                </button>

                <div className="p-6 sm:p-8 border-b border-gray-800">
                    <h2 className="text-2xl font-bold">💬 Chat místnost</h2>
                    <p className="text-sm text-gray-400">
                        Diskutuj s hráči v reálném čase
                    </p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-800">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gray-600 rounded-full" />
                            <div>
                                <p className="text-sm font-semibold">
                                    Hráč #{i + 1}
                                </p>
                                <p className="text-sm text-gray-300">
                                    Tohle je zpráva do chatu. 🎯
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 p-4 bg-gray-900">
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
                            className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-xl border border-gray-600 placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl font-semibold transition"
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
