import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";

interface Props {
    users: any;
    posts: any[];
    comments: any[];
    views: any[];
    reactions: any[];
}

export default function SharePlace({
    users,
    posts,
    comments,
    views,
    reactions,
}: Props) {
    return (
        <Layout users={users}>
            <Explore
                users={users}
                posts={posts}
                comments={comments}
                views={views}
                reactions={reactions}
            />
        </Layout>
    );
}
