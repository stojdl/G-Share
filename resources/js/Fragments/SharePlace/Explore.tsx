import { useModal } from "@/Contexts/ModalContext";
import TwitchButton from "@/Components/TwitchButton";
import H1 from "@/Components/Headings/H1";

const Explore = () => {
    const { openModal, isOpen, closeModal } = useModal();

    return (
        <>
            <main className="flex-1 lg:ml-72 lg:mr-72 lg:mt-0 p-6 pt-3 pb-28 w-full max-w-screen-xl mx-auto space-y-8">
                <TwitchButton />

                <H1>🌍 Objevuj herní svět</H1>

                <input
                    type="text"
                    placeholder="🔍 Hledat hráče nebo tým..."
                    className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3 text-white placeholder-gray-400 shadow"
                />

                <textarea
                    placeholder="📝 Napiš, co chceš sdílet..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl p-5 text-white placeholder-gray-400 resize-none shadow cursor-pointer hover:bg-gray-700 transition"
                    rows={4}
                    readOnly
                    onClick={() => openModal("PostModal")}
                ></textarea>

                <div className="flex flex-col gap-6">
                    {[1, 2, 3, 4].map((num) => (
                        <div
                            key={num}
                            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-red-500/20 transition-all group"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-400">
                                    Uživatel #{num}
                                </span>
                                <span className="text-xs text-red-500">
                                    🕒 před 2 min
                                </span>
                            </div>
                            <p className="text-gray-200 text-base">
                                Tohle je ukázkový herní moment, který můžeš
                                sdílet s komunitou. 🎮
                            </p>
                            <div className="flex gap-6 mt-4 text-sm text-gray-400">
                                <button className="hover:text-red-400 transition">
                                    ❤️ Like
                                </button>
                                <button className="hover:text-red-400 transition">
                                    💬 Komentář
                                </button>
                                <button className="hover:text-red-400 transition">
                                    🔁 Sdílet
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Explore;
