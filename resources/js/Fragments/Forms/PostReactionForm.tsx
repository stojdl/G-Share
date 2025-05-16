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
                timeoutIdRef.current = setTimeout(closeReactions, 2000);
            }
        };

        const handleMouseEnter = () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };

        const handleMouseLeave = () => {
            timeoutIdRef.current = setTimeout(closeReactions, 2000);
        };

        if (showReactions) {
            document.addEventListener("mousedown", handleClickOutside);
            formRef.current?.addEventListener("mouseenter", handleMouseEnter);
            formRef.current?.addEventListener("mouseleave", handleMouseLeave);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            formRef.current?.removeEventListener(
                "mouseenter",
                handleMouseEnter
            );
            formRef.current?.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            formRef.current?.removeEventListener(
                "mouseenter",
                handleMouseEnter
            );
            formRef.current?.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, [showReactions, closeReactions]);

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative"
            onMouseEnter={() => setShowReactions(true)}
        >
            {showReactions && (
                <div
                    className="absolute top-[-40px] left-0 flex mb-1 px-4 py-2 z-10 bg-white text-black rounded shadow-md space-x-2"
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
            <button type="submit" className="text-red-500 font-bold">
                👍 Reagovat
            </button>
        </form>
    );
};

export default PostReactionForm;
