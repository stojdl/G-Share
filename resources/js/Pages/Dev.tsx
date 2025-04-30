import React from "react";

interface Props {
    users: any;
    posts: any;
}

export default function Dev(props: Props) {
    const { users } = props;
    console.log("Users:", users);
    return (
        <div>
            <h1>Development Testing Page</h1>
            <p>This page for development and testing purposes.</p>
            {users.data.map((user: any, i: number) => (
                <div key={user.id} className="border p-4 m-4 bg-gray-50">
                    {i + 1}.
                    <h2>
                        username: {user.username} #{user.hashtag}
                    </h2>
                    <p>email: {user.email}</p>
                    <p>premium: {user.premium}</p>
                    <p>
                        prispevky:
                        {user.posts &&
                            user.posts.map((post: any, j: number) => (
                                <p className="border p-4 mb-4" key={post.id}>
                                    <p className="font-bold">
                                        {j + 1}. {post.title}
                                    </p>
                                    <p>{post.body}</p>
                                </p>
                            ))}
                    </p>
                </div>
            ))}
        </div>
    );
}
