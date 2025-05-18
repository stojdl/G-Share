import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
} from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import { VscReactions } from "react-icons/vsc";
import { FaHeart, FaHeartCircleMinus } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaAngry, FaLaughSquint, FaSadCry, FaSurprise } from "react-icons/fa";
import { useLaravelReactI18n } from "laravel-react-i18n";

interface Props {
    post: any;
}

const PostReactionForm: React.FC<Props> = (props) => {
    const { t } = useLaravelReactI18n();

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
                    className="absolute top-[-40px] left-0 flex items-center space-x-2 mb-1 px-4 py-2 z-10 bg-bg-post-reaction border border-border text-black rounded shadow-md shadow-shadow"
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
                            className="cursor-pointer font-bold text-xl text-text-light hover:text-text transition"
                            onClick={() => handleReactionClick(reaction)}
                        >
                            {(() => {
                                switch (reaction) {
                                    case "like":
                                        return <AiFillLike />;
                                    case "GG":
                                        return (
                                            <span className="text-lg ">GG</span>
                                        );
                                    case "BG":
                                        return (
                                            <span className="text-lg ">BG</span>
                                        );
                                    case "love":
                                        return <FaHeart />;
                                    case "haha":
                                        return <FaLaughSquint />;
                                    case "wow":
                                        return <FaSurprise />;
                                    case "sad":
                                        return <FaSadCry />;
                                    case "angry":
                                        return <FaAngry />;
                                    default:
                                        return reaction;
                                }
                            })()}
                        </button>
                    ))}
                </form>
            )}
            {hasReacted ? (
                <form onSubmit={deleteReaction}>
                    <button
                        type="submit"
                        className="text-primary font-bold flex items-center space-x-2"
                    >
                        <FaHeartCircleMinus />
                        <span>{t("share-place.post.reaction.remove")}</span>
                    </button>
                </form>
            ) : (
                <p className="flex items-center space-x-2 text-primary font-bold cursor-pointer">
                    <VscReactions className="text-xl" />{" "}
                    <span>{t("share-place.post.reaction.add")}</span>
                </p>
            )}
        </div>
    );
};

export default PostReactionForm;
