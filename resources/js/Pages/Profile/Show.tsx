import React, { useState } from "react";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import SharePost from "@/Components/SharePost";
import { useModal } from "@/Contexts/ModalContext";
import PostCard from "@/Components/Cards/PostCard";
import FriendshipForm from "@/Fragments/Forms/FriendshipForm";

const Show = () => {
    const { user } = usePage<PageProps>().props;
    const { openModal } = useModal();
    const [activeTab, setActiveTab] = useState<"posts" | "friends">("posts");

    return (
        <Layout>
            <main className="w-full max-w-screen-xl mx-auto space-y-6 px-6 py-6">
                {/* Header Section */}
                <div className="relative flex items-center bg-[var(--color-bg-tile)] border border-[var(--color-border)] p-6 rounded-md shadow-md">
                    <div className="flex items-center gap-6">
                        <img
                            src={user.avatar || "/images/default-avatar.png"}
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full object-cover border-2 border-[var(--color-border)] shadow-md"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold text-[var(--color-text)]">
                                {user.username || "Uživatel"}
                            </h2>
                            <p
                                className={`mt-1 ${
                                    user.online
                                        ? "text-[var(--color-primary)]"
                                        : "text-[var(--color-text-light)]"
                                }`}
                            >
                                ● {user.online ? "Online" : "Offline"}
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 space-y-4">
                        <Link href={route("profile.edit")}>
                            <button className="px-5 py-2 rounded-md bg-[var(--color-bg-nav)] text-[var(--color-text)] transition hover:bg-[var(--color-bg-tile-hover)]">
                                Upravit profil
                            </button>
                        </Link>
                        <button
                            onClick={() => openModal("ChatModal")}
                            className="px-5 py-2 rounded-md bg-[var(--color-bg-nav)] text-[var(--color-text)] transition hover:bg-[var(--color-bg-tile-hover)]"
                        >
                            Zpráva
                        </button>
                    </div>
                </div>

                {/* Share Post */}
                <SharePost onClick={() => openModal("SharePostModal")} />

                {/* Tabs Section */}
                <nav className="flex border-b border-[var(--color-border)] mb-6">
                    <button
                        onClick={() => setActiveTab("posts")}
                        className={`px-4 py-2 -mb-px font-medium text-sm transition ${
                            activeTab === "posts"
                                ? "border-b-2 border-[var(--color-primary)]"
                                : "text-[var(--color-text-light)] hover:text-[var(--color-text)]"
                        }`}
                    >
                        Příspěvky
                    </button>
                    <button
                        onClick={() => setActiveTab("friends")}
                        className={`px-4 py-2 -mb-px font-medium text-sm transition ${
                            activeTab === "friends"
                                ? "border-b-2 border-[var(--color-primary)]"
                                : "text-[var(--color-text-light)] hover:text-[var(--color-text)]"
                        }`}
                    >
                        Přátelé
                    </button>
                </nav>

                {/* Posts Tab */}
                {activeTab === "posts" && (
                    <section className="space-y-6">
                        {user.posts &&
                            user.posts.map((post: any) => (
                                <PostCard post={post} key={post.id} />
                            ))}
                    </section>
                )}

                {/* Friends Tab */}
                {activeTab === "friends" && (
                    <section>
                        {user.friends.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-[var(--color-border)] shadow-md hover:shadow-lg transition-all">
                                {user.friends.map((friend: any) => (
                                    <Link
                                        key={friend.id}
                                        href={route("user_profile", {
                                            user: friend.id,
                                        })}
                                        className="flex items-center gap-4 p-4 bg-[var(--color-bg-tile)] rounded-md hover:bg-[var(--color-bg-tile-hover)] transition"
                                    >
                                        <img
                                            src={
                                                friend.profile_photo_url ||
                                                "/images/default-avatar.png"
                                            }
                                            alt={friend.username}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-border)]"
                                        />
                                        <span className="font-medium text-[var(--color-text)]">
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
                    </section>
                )}
            </main>
        </Layout>
    );
};

export default Show;
