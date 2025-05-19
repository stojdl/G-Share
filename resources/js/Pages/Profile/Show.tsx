import React, { useState } from "react";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import SharePost from "@/Components/SharePost";
import { useModal } from "@/Contexts/ModalContext";
import PostCard from "@/Components/Cards/PostCard";
import FriendshipForm from "@/Fragments/Forms/FriendshipForm";

const Show = () => {
    console.log(usePage<PageProps>().props);

    const { user } = usePage<PageProps>().props;

    const { openModal } = useModal();
    const [activeTab, setActiveTab] = useState<"posts" | "friends">("posts");

    return (
        <Layout>
            <main className="w-full max-w-screen-xl mx-auto space-y-6 px-4 py-6">
                <div className="relative flex items-center space-x-6 bg-bg-tile border border-border p-6 rounded shadow-md">
                    <div className="flex items-center space-x-6">
                        <div className="absolute top-0 right-0">
                            <Link href={route("profile.edit")}>
                                <button className="px-5 py-2 rounded-full transition">
                                    Upravit profil
                                </button>
                            </Link>
                            <div className="mt-4 space-x-3 top-0 right-0">
                                <button
                                    onClick={() => openModal("ChatModal")}
                                    className=" px-5 py-2 rounded-full transition"
                                >
                                    Zpráva
                                </button>
                            </div>
                        </div>
                        <img
                            src={user.avatar || "/images/default-avatar.png"}
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full object-cover border-2 border-gray-700 shadow-lg"
                        />
                        <h2 className="text-3xl font-bold flex items-center space-x-2">
                            <span>{user.username}</span>
                        </h2>

                        <p
                            className={`mt-1 ${
                                user.online ? "text-green-400" : "text-gray-400"
                            }`}
                        >
                            ● {user.online ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>
                <SharePost onClick={() => openModal("SharePostModal")} />
                <nav className="flex border-b border-gray-700 mb-6">
                    <button
                        onClick={() => setActiveTab("posts")}
                        className={`px-4 py-2 -mb-px font-medium text-sm transition ${
                            activeTab === "posts"
                                ? "border-b-2 border-blue-500 text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Příspěvky
                    </button>
                    <button
                        onClick={() => setActiveTab("friends")}
                        className={`px-4 py-2 -mb-px font-medium text-sm transition ${
                            activeTab === "friends"
                                ? "border-b-2 border-blue-500 text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Přátelé
                    </button>
                </nav>

                {activeTab === "posts" && (
                    <section className="space-y-6">
                        {user.posts &&
                            user.posts.map((post: any) => (
                                <PostCard post={post} key={post.id} />
                            ))}
                    </section>
                )}

                {activeTab === "friends" && (
                    <section>
                        {user.friends.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {user.friends.map((friend: any) => (
                                    <Link
                                        key={friend.id}
                                        href={route("user_profile", {
                                            user: friend.id,
                                        })}
                                    >
                                        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                                            <img
                                                src={friend.profile_photo_url}
                                                alt={friend.username}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                                            />
                                            <span className="font-medium text-white">
                                                {friend.username}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">
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
