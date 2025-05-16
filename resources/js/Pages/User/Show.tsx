import FriendshipForm from "@/Fragments/Forms/FriendshipForm";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";

const Show = () => {
    const { user } = usePage<PageProps>().props;

    console.log("user: ", user);

    return (
        <div>
            <h1>User Profile Page</h1>
            <div className="">
                <button onClick={() => window.history.back()}>back</button>
            </div>
            <div className="flex flex-col items-center space-y-2 mt-6">
                <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9865bd5-9256-461e-9cad-595da83f5964/d884qiy-a305329c-9f47-4b75-a7c0-ba603075ebc2.png/v1/fit/w_400,h_400,q_70,strp/request__zed_avatar_by_soulivium_d884qiy-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvZDg4NHFpeS1hMzA1MzI5Yy05ZjQ3LTRiNzUtYTdjMC1iYTYwMzA3NWViYzIucG5nIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvc291bGl2aXVtLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ovwlBbubWp7eWHdb39FUNBKxcXhzUZiigf5aKFmMupk"
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full object-cover shadow-md border border-gray-700"
                />
                <div className="text-base font-semibold">{user.username}</div>
                <div className="text-sm text-green-400">● online</div>
                <div className="border p-6">
                    <FriendshipForm />
                    friends:
                    <div>
                        {user.friends.map((friend: any) => (
                            <div className="border p-4">
                                <Link
                                    href={route("user_profile", {
                                        user: friend.id,
                                    })}
                                >
                                    {friend.username}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
