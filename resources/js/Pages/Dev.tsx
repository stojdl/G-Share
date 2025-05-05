import { spawn } from "child_process";
import React from "react";

interface Props {
    users: any;
    posts: any;
    comments: any;
    views: any;
    reactions: any;
}

export default function Dev(props: Props) {
    const { users, posts, comments, views, reactions } = props;
    console.log(
        "Users:",
        users,
        posts && posts,
        comments && comments,
        views && views,
        reactions && reactions
    );
    return (
        <div>
            <h1>Development Testing Page</h1>
            <p>This page for development and testing purposes.</p>
            {users.map((user: any, i: number) => (
                <div key={user.id} className="border p-4 m-4 bg-gray-50">
                    {i + 1}.<p>id: {user.id}</p>
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
                                    <p>id: {post.id}</p>
                                    <p className="font-bold">
                                        {j + 1}. {post.title}
                                    </p>
                                    <p>{post.body}</p>
                                    <p>
                                        pocet zobrazeni:{" "}
                                        {post.views && post.views.length}
                                    </p>
                                    <p>
                                        reakce:{" "}
                                        {post.reactions &&
                                            post.reactions.map(
                                                (reaction: any, k: number) => (
                                                    <span>
                                                        {reaction.reaction_type}
                                                        ,
                                                    </span>
                                                )
                                            )}
                                    </p>
                                    <p>
                                        pocet sdileni:{" "}
                                        {post.shares && post.shares.length}
                                    </p>
                                    <p>
                                        komenty:
                                        {post.comments &&
                                            post.comments.map(
                                                (comment: any, k: number) => (
                                                    <p
                                                        className="border p-4 mb-4"
                                                        key={comment.id}
                                                    >
                                                        <p>id: {comment.id}</p>
                                                        <p className="font-bold">
                                                            {k + 1}.{" "}
                                                            {comment.body}
                                                        </p>
                                                        <p>
                                                            by:{" "}
                                                            {
                                                                comment.user
                                                                    .username
                                                            }
                                                        </p>
                                                        <p>
                                                            likes:{" "}
                                                            {
                                                                comment.likes
                                                                    .length
                                                            }
                                                        </p>
                                                        <p>replies:</p>
                                                        <p>
                                                            {comment.children &&
                                                                comment.children.map(
                                                                    (
                                                                        reply: any,
                                                                        l: number
                                                                    ) => (
                                                                        <p
                                                                            className="border p-4 mb-4"
                                                                            key={
                                                                                reply.id
                                                                            }
                                                                        >
                                                                            <p className="font-bold">
                                                                                {l +
                                                                                    1}

                                                                                .{" "}
                                                                                {
                                                                                    reply.body
                                                                                }
                                                                            </p>
                                                                            <p>
                                                                                by:{" "}
                                                                                {
                                                                                    reply
                                                                                        .user
                                                                                        .username
                                                                                }
                                                                            </p>
                                                                            <p>
                                                                                likes:{" "}
                                                                                {
                                                                                    reply
                                                                                        .likes
                                                                                        .length
                                                                                }
                                                                            </p>
                                                                        </p>
                                                                    )
                                                                )}
                                                        </p>
                                                    </p>
                                                )
                                            )}
                                        <p></p>
                                    </p>
                                </p>
                            ))}
                    </p>
                </div>
            ))}
        </div>
    );
}
