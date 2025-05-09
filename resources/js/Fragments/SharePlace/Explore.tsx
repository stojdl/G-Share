import { useModal } from "@/Contexts/ModalContext";
import TwitchButton from "@/Components/TwitchButton";
import H1 from "@/Components/Headings/H1";
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

const Explore = () => {
    const { posts } = usePage<PageProps>().props;

    const { openModal } = useModal();
    const [showComments, setShowComments] = useState(false);

    console.log("posts: ", posts);

    return (
        <main className="flex-1 lg:ml-72 lg:mr-72 lg:mt-0 p-6 pt-3 pb-28 w-full max-w-screen-xl mx-auto space-y-8">
            <TwitchButton />
            <H1>🌍 Objevuj herní svět</H1>

            <input
                type="text"
                placeholder="🔍 Hledat hráče nebo tým..."
                className="w-full md:w-1/2 bg-gray-900 border border-gray-800 rounded px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            <textarea
                placeholder="📝 Napiš, co chceš sdílet..."
                className="w-full bg-gray-900 border border-gray-800 rounded p-5 text-white placeholder-gray-500 resize-none shadow cursor-pointer hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
                readOnly
                onClick={() => openModal("PostModal")}
            ></textarea>

            <div className="flex flex-col gap-6">
                {posts &&
                    posts.map((post: any, i: number) => (
                        <div
                            key={post.id}
                            className="border border-gray-800 p-4 my-4 bg-gray-800 rounded shadow-md hover:shadow-lg transition-all"
                        >
                            <p className="text-gray-400">
                                User: {post.user.username}
                            </p>
                            <p className="font-bold text-white mb-2">
                                {i + 1}. {post.title}
                            </p>
                            <p className="text-gray-300">{post.body}</p>
                            <p className="text-gray-400 mt-2">
                                👁️ Počet zobrazení: {post.views?.length || 0}
                            </p>

                            <p className="text-gray-400">
                                ❤️ Reakce:{" "}
                                {post.reactions?.map(
                                    (reaction: any, k: number) => (
                                        <span key={k} className="text-red-500">
                                            {reaction.reaction_type}
                                        </span>
                                    )
                                )}
                            </p>

                            <p className="text-gray-400 mt-2">
                                🔁 Počet sdílení: {post.shares?.length || 0}
                            </p>

                            <button
                                onClick={() => setShowComments(!showComments)}
                                className="mt-4 font-semibold text-red-500 cursor-pointer hover:underline"
                            >
                                💬 Komentáře
                            </button>

                            {showComments && (
                                <div className="mt-2">
                                    {post.comments?.map(
                                        (comment: any, k: number) => (
                                            <div
                                                key={comment.id}
                                                className="border border-gray-700 p-4 my-2 bg-gray-700 rounded shadow-sm hover:shadow-md transition-all"
                                            >
                                                <p className="text-gray-400">
                                                    ID: {comment.id}
                                                </p>
                                                <p className="font-bold text-white mb-2">
                                                    {k + 1}. {comment.body}
                                                </p>
                                                <p className="text-gray-400">
                                                    By: {comment.user.username}
                                                </p>
                                                <p className="text-gray-400">
                                                    Likes:{" "}
                                                    {comment.likes?.length || 0}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </main>
    );
};

export default Explore;
