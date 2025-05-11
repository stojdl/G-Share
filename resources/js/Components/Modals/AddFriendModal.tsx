import { useModal } from "@/Contexts/ModalContext";

interface Props {
    users: any;
}

const AddFriendModal = (props: Props) => {
    const modal = useModal();
    const { users } = props;
    console.log("users:", users);

    return (
        <div className="w-screen h-screen fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
            <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                <button
                    onClick={() => modal.closeModal()}
                    className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                    aria-label="Zavřít"
                >
                    ✕
                </button>
                <h2 className="text-3xl font-bold text-white mb-6">
                    Přidat přítele
                </h2>

                <input
                    type="text"
                    placeholder="🔍 Hledat hráče"
                    className="w-full mb-6 px-5 py-3 bg-gray-800 border border-gray-700 rounded placeholder-gray-400 text-white"
                />
                <p className="text-sm text-gray-400 mb-3 border-b border-gray-700 pb-1">
                    Nedávné interakce
                </p>
                <div className="flex flex-col gap-4">
                    {Array.isArray(users) && users.length > 0 ? (
                        users.map((user: any) => (
                            <div
                                key={user.id}
                                className="bg-gray-800 border border-gray-700 rounded flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4"
                            >
                                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                    <div className="w-14 h-14 bg-gray-600 rounded-full" />
                                    <div className="text-sm">
                                        <p className="font-bold text-xl">
                                            {user.username} #{user.hashtag}{" "}
                                            <br />
                                        </p>
                                        <p className="text italic">
                                            {user.email}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {user.online
                                                ? "● online"
                                                : "● offline"}
                                        </p>
                                    </div>
                                </div>

                                <button className="text-red-500 font-semibold hover:underline">
                                    Přidat
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            Žádní uživatelé nebyli nalezeni.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddFriendModal;
