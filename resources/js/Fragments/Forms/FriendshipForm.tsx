import { PageProps } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

const FriendshipForm: React.FC = () => {
    const { user, loggedUser } = usePage<PageProps>().props;

    console.log("logged in user: ", loggedUser);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
        post,
    } = useForm();

    const createFriendship: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("friendship.store", { user: user.id }), {
            onSuccess: () => {
                reset();
                router.reload({ only: ["friendships"] });
            },
            preserveScroll: true,
        });
    };

    const acceptFriendship: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("friendship.accept", { user: user.id }), {
            onSuccess: () => {
                reset();
                router.reload({ only: ["friendships"] });
            },
            preserveScroll: true,
        });
    };

    const deleteFriendship: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("friendship.remove", { user: user.id }), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                router.reload({ only: ["friends", "friendships"] });
            },
        });
    };

    const isFriend = user.friendships.find(
        (friendship: any) =>
            friendship.friend_id === loggedUser.id &&
            friendship.status === "accepted"
    );

    const hasPendingRequest = user.friendship_requests.find(
        (friendship_request: any) =>
            friendship_request.user_id === loggedUser.id &&
            friendship_request.status === "pending"
    );

    const acceptRequest = loggedUser.friendship_requests.find(
        (friendship_request: any) =>
            friendship_request.friend_id === loggedUser.id &&
            friendship_request.status === "pending"
    );

    return (
        <div>
            {isFriend ? (
                <form onSubmit={deleteFriendship}>
                    <button type="submit">Odebrat z přátel</button>
                </form>
            ) : hasPendingRequest ? (
                <p>Žádost o přátelství odeslána</p>
            ) : acceptRequest ? (
                <form onSubmit={acceptFriendship}>
                    <button type="submit">Přijmout žádost o přátelství</button>
                </form>
            ) : (
                <form onSubmit={createFriendship}>
                    <button type="submit">Odeslat žádost o přátelství</button>
                </form>
            )}
        </div>
    );
};

export default FriendshipForm;
