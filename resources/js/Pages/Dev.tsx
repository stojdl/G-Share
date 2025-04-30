import React from "react";

interface Props {
    users: any;
    posts: any;
}

export default function Dev(props: Props) {
    const { users, posts } = props;
    console.log("Users:", users);
    console.log("Posts:", posts);
    return (
        <div>
            {users.map((user: any) => (
                <div key={user.id} className="border p-4 mb-4">
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
            {posts.map((post: any) => (
                <div key={post.id} className="border p-4 mb-4">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
            <h1>Development Testing Page</h1>
            <p>This is an empty page for development and testing purposes.</p>
        </div>
    );
}
