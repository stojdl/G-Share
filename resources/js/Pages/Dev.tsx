import React, { useState } from "react";

interface Props {
    users: any;
    posts: any;
}

export default function Dev(props: Props) {
    const { users, posts } = props;
    const [isOpen, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [expandedPostIds, setExpandedPostIds] = useState<number[]>([]);
    const [isMainViewOpen, setMainViewOpen] = useState(false);
    console.log("users:", users);
    console.log("posts:", posts);

    return (
        <div className="min-h-screen bg-black text-white">
            <h1 className="mb-10 p-4 text-center text-white">
                Development Testing Page <br />
                This page for development and testing purposes.
            </h1>

            {isOpen && selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
                    <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded shadow-lg flex flex-col overflow-hidden text-black">
                        {/* HLAVIČKA */}
                        <div className="sticky top-0 z-10 bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
                            {/* Avatar + Jméno */}
                            <div className="flex items-center gap-4 text-white">
                                <img
                                    src={
                                        selectedUser.avatar?.trim()
                                            ? selectedUser.avatar
                                            : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9865bd5-9256-461e-9cad-595da83f5964/d884qiy-a305329c-9f47-4b75-a7c0-ba603075ebc2.png/v1/fit/w_400,h_400,q_70,strp/request__zed_avatar_by_soulivium_d884qiy-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvZDg4NHFpeS1hMzA1MzI5Yy05ZjQ3LTRiNzUtYTdjMC1iYTYwMzA3NWViYzIucG5nIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvc291bGl2aXVtLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ovwlBbubWp7eWHdb39FUNBKxcXhzUZiigf5aKFmMupk"
                                    }
                                    alt="avatar"
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <h2 className="text-lg font-bold">
                                    Příspěvky uživatele: {selectedUser.username}
                                </h2>
                            </div>

                            {/* Zavřít */}
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setSelectedUser(null);
                                }}
                                className="font-bold text-white hover:text-red-600"
                            >
                                Zavřít
                            </button>
                        </div>

                        {/* OBSAH SCROLL */}
                        <div
                            className="relative overflow-y-auto px-6 py-6 bg-black"
                            id="posts-scroll-area"
                        >
                            {selectedUser.posts &&
                            selectedUser.posts.length > 0 ? (
                                selectedUser.posts.map(
                                    (post: any, index: number) => {
                                        const isExpanded =
                                            expandedPostIds.includes(index);
                                        const preview = post.body
                                            .split("\n")[0]
                                            .slice(0, 150);
                                        const isLong =
                                            post.body.length > preview.length;

                                        return (
                                            <div
                                                key={post.id || index}
                                                className="mb-4 rounded border bg-gray-300 p-4 text-black"
                                            >
                                                <p className="mb-1 font-bold">
                                                    {index + 1}. {post.title}
                                                </p>
                                                <p className="mb-2">
                                                    {isExpanded
                                                        ? post.body
                                                        : preview}
                                                    {!isExpanded && isLong && (
                                                        <span
                                                            onClick={() =>
                                                                setExpandedPostIds(
                                                                    [
                                                                        ...expandedPostIds,
                                                                        index,
                                                                    ]
                                                                )
                                                            }
                                                            className="ml-1 cursor-pointer text-red-600 hover:underline"
                                                        >
                                                            ...zobrazit více
                                                        </span>
                                                    )}
                                                </p>
                                                {isExpanded && (
                                                    <button
                                                        onClick={() =>
                                                            setExpandedPostIds(
                                                                expandedPostIds.filter(
                                                                    (i) =>
                                                                        i !==
                                                                        index
                                                                )
                                                            )
                                                        }
                                                        className="text-sm text-red-600 hover:underline"
                                                    >
                                                        Skrýt
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    }
                                )
                            ) : (
                                <p className="italic text-gray-500">
                                    Uživatel zatím nemá žádné příspěvky.
                                </p>
                            )}
                        </div>

                        {/* TLAČÍTKO - mimo scroll div */}
                        <button
                            onClick={() => {
                                const container =
                                    document.getElementById(
                                        "posts-scroll-area"
                                    );
                                if (container)
                                    container.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                            }}
                            className="absolute bottom-4 right-4 z-20 bg-red-600 text-black px-4 py-2 rounded shadow hover:bg-red-700 transition"
                        >
                            ↑ Nahoru
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setMainViewOpen(true)}
                className="mb-6 ml-6 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            >
                Otevřít hlavní stránku
            </button>

            {/* GRID uživatelů */}
            <div className="grid grid-cols-1 justify-items-center gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {users.data.map((user: any, i: number) => (
                    <div
                        key={user.id}
                        className="w-64 p-6 flex flex-col items-center text-center rounded bg-gray-300 text-black"
                    >
                        <img
                            src={
                                user.avatar && user.avatar.trim() !== ""
                                    ? user.avatar
                                    : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9865bd5-9256-461e-9cad-595da83f5964/d884qiy-a305329c-9f47-4b75-a7c0-ba603075ebc2.png/v1/fit/w_400,h_400,q_70,strp/request__zed_avatar_by_soulivium_d884qiy-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvZDg4NHFpeS1hMzA1MzI5Yy05ZjQ3LTRiNzUtYTdjMC1iYTYwMzA3NWViYzIucG5nIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvc291bGl2aXVtLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ovwlBbubWp7eWHdb39FUNBKxcXhzUZiigf5aKFmMupk"
                            }
                            alt="avatar"
                            className="w-32 mb-6 h-32 object-cover rounded bg-red-500 text-white"
                        />
                        <p className="mb-1 font-bold">{user.username}</p>
                        <p className="mb-1 font-bold">#{user.hashtag}</p>
                        <p className="mb-1">
                            <span className="font-bold">premium:</span>{" "}
                            <span
                                className={
                                    user.premium
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {user.premium ? "ano" : "ne"}
                            </span>
                        </p>
                        <p className="mb-1">
                            <span className="font-bold">email:</span>{" "}
                            {user.email}
                        </p>
                        <p className="mb-4 italic">Béďa je debílek</p>
                        <button
                            onClick={() => {
                                setSelectedUser(user);
                                setOpen(true);
                            }}
                            className="px-4 py-2 rounded bg-red-700 text-white transition hover:bg-red-800"
                        >
                            Zobrazit příspěvky
                        </button>
                    </div>
                ))}
            </div>

            {isMainViewOpen && (
                <div className="fixed inset-0 z-50 flex bg-black text-white">
                    {/* LEFT SIDEBAR */}
                    <aside className="w-64 bg-gray-900 p-4 flex flex-col gap-4 text-sm">
                        <div className="text-lg font-bold">SHARE PLACE</div>

                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-white rounded" />
                            <div>
                                <p className="font-bold text-xs">
                                    nickname #2435
                                </p>
                                <p className="text-[10px] text-gray-400">
                                    ● status
                                </p>
                            </div>
                        </div>

                        <button className="bg-blue-700 rounded p-2 text-xs">
                            + add friend
                        </button>

                        <div className="flex justify-between text-xs">
                            <button className="bg-gray-800 px-2 py-1 rounded">
                                chat
                            </button>
                            <button className="bg-gray-800 px-2 py-1 rounded">
                                find team
                            </button>
                            <button className="bg-gray-800 px-2 py-1 rounded">
                                create team
                            </button>
                        </div>

                        <div className="bg-gray-700 p-2 rounded text-center">
                            friends online
                        </div>
                        <div className="bg-gray-700 p-2 rounded text-center">
                            rooms
                        </div>
                        <div className="bg-gray-700 p-2 rounded text-center">
                            tournaments
                        </div>
                        <div className="bg-gray-700 p-2 rounded text-center">
                            challenges
                        </div>

                        <div className="text-xs mt-auto text-center">
                            Buy premium for 0,99
                        </div>
                    </aside>

                    {/* MIDDLE */}
                    <main className="flex-1 bg-black overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-6">
                            <input
                                type="text"
                                placeholder="search"
                                className="bg-gray-800 p-2 rounded w-64 text-sm text-white placeholder-gray-400"
                            />
                            <span className="text-xs text-gray-400">
                                ● LIVE ON TWITCH
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold mb-4">
                            EXPLORE SHARE PLACE
                        </h1>

                        <input
                            type="text"
                            placeholder="share post"
                            className="bg-gray-800 p-2 rounded w-full mb-6 text-white placeholder-gray-400"
                        />

                        <div className="space-y-4" id="all-posts-scroll">
                            {posts && posts.length > 0 ? (
                                posts.map((post: any, index: number) => {
                                    const author = users.data.find(
                                        (u: any) => u.id === post.userId
                                    );
                                    return (
                                        <div
                                            key={post.id || index}
                                            className="bg-gray-800 p-4 rounded"
                                        >
                                            <div className="text-sm text-gray-400 mb-1">
                                                {author
                                                    ? `@${author.username}`
                                                    : "Neznámý uživatel"}
                                            </div>
                                            <p className="font-bold text-white mb-1">
                                                {post.title}
                                            </p>
                                            <p className="text-gray-300 text-sm">
                                                {post.body}
                                            </p>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-sm text-gray-400">
                                    Žádné příspěvky k zobrazení.
                                </p>
                            )}
                        </div>
                    </main>

                    {/* RIGHT PANEL */}
                    <aside className="w-60 bg-gray-900 p-4 flex flex-col text-sm gap-2">
                        <div className="bg-gray-700 p-2 rounded">dropdown</div>
                        <div className="bg-gray-800 p-2 rounded">darkmode</div>
                        <div className="bg-gray-800 p-2 rounded">languages</div>
                        <div className="bg-gray-800 p-2 rounded">support</div>
                        <div className="bg-gray-800 p-2 rounded">premium</div>
                        <div className="bg-gray-800 p-2 rounded">
                            profile settings
                        </div>
                        <div className="bg-gray-800 p-2 rounded">logout</div>
                        <div className="mt-auto bg-gray-800 p-4 rounded text-center">
                            ads
                        </div>
                    </aside>

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={() => setMainViewOpen(false)}
                        className="absolute top-4 right-4 text-white font-bold hover:text-red-500"
                    >
                        Zavřít
                    </button>
                </div>
            )}
        </div>
    );
}
