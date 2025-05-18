import PostCard from "@/Components/Cards/PostCard";
import H2 from "@/Components/Headings/H2";
import SharePost from "@/Components/SharePost";
import { useModal } from "@/Contexts/ModalContext";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { BiWorld } from "react-icons/bi";

const Explore = () => {
    const { posts } = usePage<PageProps>().props;
    console.log("posts: ", posts);

    const { t } = useLaravelReactI18n();

    const { openModal } = useModal();

    return (
        <div className="w-full max-w-screen-xl space-y-2">
            <H2>
                <BiWorld /> <span>{t("share-place.title")}</span>
            </H2>
            <SharePost onClick={() => openModal("SharePostModal")} />
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
