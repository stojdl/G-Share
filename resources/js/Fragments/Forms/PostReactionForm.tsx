import React, { useState, useRef, useEffect, useCallback } from "react";
import { router, useForm } from "@inertiajs/react";

const PostReactionForm: React.FC = () => {
    const [showReactions, setShowReactions] = useState(false);
    const { data, setData, post } = useForm({ reaction: "" });
    const formRef = useRef<HTMLFormElement>(null);
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    const reactions = [
        "like",
        "GG",
        "BG",
        "love",
        "haha",
        "wow",
        "sad",
        "angry",
    ];

    const handleReactionClick = useCallback(
        (reaction: string) => {
            setData("reaction", reaction);
        },
        [setData]
    );

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            post(route("post.reaction.store"), {
                ...data,
                preserveScroll: true,
                onSuccess: () => {
                    setShowReactions(false);
                    router.reload({ only: ["reactions"] });
                },
            });
        },
        [data, post]
    );

    const closeReactions = useCallback(() => {
        setShowReactions(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                closeReactions();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeReactions]);

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative"
            onMouseEnter={() => setShowReactions(true)}
        >
            {showReactions && (
                <div
                    className="absolute top-[-40px] left-0 flex mb-1 z-10 bg-white text-black rounded shadow-md space-x-2"
                    onMouseLeave={() => {
                        if (timeoutIdRef.current) {
                            clearTimeout(timeoutIdRef.current);
                        }
                        timeoutIdRef.current = setTimeout(closeReactions, 1000);
                    }}
                >
                    {reactions.map((reaction) => (
                        <span
                            key={reaction}
                            className="cursor-pointer text-xl"
                            onClick={() => handleReactionClick(reaction)}
                        >
                            {reaction}
                        </span>
                    ))}
                </div>
            )}
            <button type="submit">👍 Reagovat</button>
        </form>
    );
};

export default PostReactionForm;
