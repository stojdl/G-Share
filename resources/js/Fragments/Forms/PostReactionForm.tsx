import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
} from "react";
import { router, useForm, usePage } from "@inertiajs/react";

interface Props {
    post: any;
}

const PostReactionForm: React.FC<Props> = (props) => {
    const [showReactions, setShowReactions] = useState(false);
    const { data, setData, post } = useForm({
        reaction: "",
        post_id: props.post.id,
    });
    const containerRef = useRef<HTMLDivElement>(null);
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

    const { auth } = usePage().props;

    const hasReacted = useMemo(() => {
        return props.post.reactions.some(
            (reaction: any) => reaction.user_id === auth.user.id
        );
    }, [props.post.reactions, auth.user.id]);

    const handleReactionClick = useCallback(
        (reaction: string) => {
            setData("reaction", reaction);
            console.log("data: ", data);
            console.log("reaction: ", reaction);
        },
        [setData, data]
    );

    const createReaction = useCallback(
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

    const deleteReaction = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            post(route("post.reaction.remove", { post_id: props.post.id }), {
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
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
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
            containerRef.current?.addEventListener(
                "mouseenter",
                handleMouseEnter
            );
            containerRef.current?.addEventListener(
                "mouseleave",
                handleMouseLeave
            );
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            containerRef.current?.removeEventListener(
                "mouseenter",
                handleMouseEnter
            );
            containerRef.current?.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            containerRef.current?.removeEventListener(
                "mouseenter",
                handleMouseEnter
            );
            containerRef.current?.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, [showReactions, closeReactions]);

    return (
        <div
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setShowReactions(true)}
        >
            {showReactions && !hasReacted && (
                <form
                    onSubmit={createReaction}
                    className="absolute top-[-40px] left-0 flex mb-1 px-4 py-2 z-10 bg-white text-black rounded shadow-md space-x-2"
                    onMouseLeave={() => {
                        if (timeoutIdRef.current) {
                            clearTimeout(timeoutIdRef.current);
                        }
                        timeoutIdRef.current = setTimeout(closeReactions, 1000);
                    }}
                >
                    {reactions.map((reaction) => (
                        <button
                            type="submit"
                            key={reaction}
                            className="cursor-pointer text-xl"
                            onClick={() => handleReactionClick(reaction)}
                        >
                            {reaction}
                        </button>
                    ))}
                </form>
            )}
            {hasReacted ? (
                <form onSubmit={deleteReaction}>
                    <button type="submit" className="text-red-500 font-bold">
                        👍 Zrušit reakci
                    </button>
                </form>
            ) : (
                <p className="text-red-500 font-bold cursor-pointer">
                    👍 Reagovat
                </p>
            )}
        </div>
    );
};

export default PostReactionForm;
