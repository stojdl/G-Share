import FriendshipForm from "@/Fragments/Forms/FriendshipForm";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";

const Show = () => {
    const { user } = usePage<PageProps>().props;

    return (
        <Layout>
            <div className="w-full max-w-screen-xl mx-auto space-y-6 px-4 py-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Profil uživatele
                    </h1>
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all"
                    >
                        Zpět
                    </button>
                </div>

                {/* User Info */}
                <div className="bg-gray-900 rounded-xl p-8 shadow-lg mb-8">
                    <div className="flex items-center space-x-6">
                        <img
                            src={user.avatar || "/images/default-avatar.png"}
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full object-cover border-2 border-gray-700 shadow-lg"
                        />
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-white">
                                {user.username || "Uživatel"}
                            </h2>
                            <p className="text-lg text-green-400">
                                {user.online ? "● Online" : "● Offline"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Friends Section */}
                <div className="bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Přátelé
                    </h2>
                    {user.friends && user.friends.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {user.friends.map((friend: any) => (
                                <Link
                                    key={friend.id}
                                    href={route("user_profile", {
                                        user: friend.id,
                                    })}
                                >
                                    <div className="flex items-center bg-gray-700 rounded-lg p-4 space-x-4 hover:bg-gray-600 transition-all">
                                        <img
                                            src={
                                                friend.profile_photo_url ||
                                                "/images/default-avatar.png"
                                            }
                                            alt={friend.username}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                                        />
                                        <span className="text-lg font-medium text-white">
                                            {friend.username}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400">Zatím žádní přátelé.</p>
                    )}
                </div>

                {/* Friendship Form */}
                <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Přidat přátelství
                    </h2>
                    <FriendshipForm />
                </div>
            </div>
        </Layout>
    );
};

export default Show;
