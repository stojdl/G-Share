import FriendshipForm from "@/Fragments/Forms/FriendshipForm";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";

const Show = () => {
    const { user } = usePage<PageProps>().props;

    return (
        <Layout>
            <main className="w-full max-w-screen-xl mx-auto space-y-6 px-6 py-6">
                {/* Header Section */}
                <div className="flex items-center justify-between bg-[var(--color-bg-tile)] p-4 rounded-md shadow-lg">
                    <h1 className="text-3xl font-bold text-[var(--color-text)]">
                        Profil uživatele
                    </h1>
                    <button
                        onClick={() => window.history.back()}
                        className="px-4 py-2 bg-[var(--color-bg-nav)] text-[var(--color-text)] rounded-md hover:bg-[var(--color-bg-tile-hover)] transition"
                    >
                        Zpět
                    </button>
                </div>

                {/* User Info */}
                <div className="bg-[var(--color-bg-tile)] rounded-md p-6 shadow-md flex items-center gap-6">
                    <img
                        src={user.avatar || "/images/default-avatar.png"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full object-cover border-2 border-[var(--color-border)] shadow-md"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                            {user.username || "Uživatel"}
                        </h2>
                        <p
                            className={`text-sm mt-1 ${
                                user.online
                                    ? "text-[var(--color-primary)]"
                                    : "text-[var(--color-text-light)]"
                            }`}
                        >
                            ● {user.online ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>

                {/* Friends Section */}
                <div className="bg-[var(--color-bg-tile)] rounded-md p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                        Přátelé
                    </h2>
                    {user.friends && user.friends.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {user.friends.map((friend: any) => (
                                <Link
                                    key={friend.id}
                                    href={route("user_profile", {
                                        user: friend.id,
                                    })}
                                    className="flex items-center bg-[var(--color-bg-post-card)] rounded-md p-4 gap-4 hover:bg-[var(--color-bg-tile-hover)] transition"
                                >
                                    <img
                                        src={
                                            friend.profile_photo_url ||
                                            "/images/default-avatar.png"
                                        }
                                        alt={friend.username}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-[var(--color-border)]"
                                    />
                                    <span className="text-lg font-medium text-[var(--color-text)]">
                                        {friend.username}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-[var(--color-text-light)]">
                            Zatím žádní přátelé.
                        </p>
                    )}
                </div>

                {/* Friendship Form */}
                <div className="bg-[var(--color-bg-tile)] rounded-md p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                        Přidat přátelství
                    </h2>
                    <FriendshipForm />
                </div>
            </main>
        </Layout>
    );
};

export default Show;
