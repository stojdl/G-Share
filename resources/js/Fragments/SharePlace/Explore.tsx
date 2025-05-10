import PostCard from "@/Components/Cards/PostCard";
import H2 from "@/Components/Headings/H2";
import { useModal } from "@/Contexts/ModalContext";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import SharePost from "../Forms/SharePost";

const Explore = () => {
    const { posts } = usePage<PageProps>().props;
    console.log("posts: ", posts);

    const { openModal } = useModal();

    return (
        <div className="w-full max-w-screen-xl space-y-2">
            <H2>🌍 Objevuj herní svět</H2>
            <SharePost onClick={() => openModal("PostModal")} />
            <div className="flex flex-col gap-6">
                {posts &&
                    posts.map((post: any) => (
                        <PostCard post={post} key={post.id} />
                    ))}
            </div>
        </div>
    );
};

export default Explore;
