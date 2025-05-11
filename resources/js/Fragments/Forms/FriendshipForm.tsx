import { PageProps } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

const FriendshipForm: React.FC = () => {
    const { user, auth } = usePage<PageProps>().props;

    console.log("logged in user: ", auth.user);

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
                router.reload({ only: ["all_friends"] });
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
                router.reload({ only: ["all_friends"] });
            },
        });
    };

    return (
        <div>
            {user.all_friends.find(
                (friend: any) => friend.id === auth.user.id
            ) ? (
                <form onSubmit={deleteFriendship}>
                    <button type="submit">Odebrat z přátel</button>
                </form>
            ) : (
                <form onSubmit={createFriendship}>
                    <button type="submit">Vytvorit přátelství</button>
                </form>
            )}
        </div>
    );
};

export default FriendshipForm;
