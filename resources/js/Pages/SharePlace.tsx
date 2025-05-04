import Explore from "@/Fragments/SharePlace/Explore";
import Layout from "@/Layouts/Layout";

interface Props {
    users: any;
    posts: any;
}

export default function SharePlace({ users, posts }: Props) {
    return (
        <Layout>
            <Explore />
        </Layout>
    );
}
