import { useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";

import { useModal } from "@/Contexts/ModalContext";
import { PageProps } from "@/types";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { FaUserPlus } from "react-icons/fa";

const LeftSideBar = () => {
    const { auth } = usePage<PageProps>().props;

    const { t } = useLaravelReactI18n();

    const modal = useModal();
    const [showFriendsDropdown, setShowFriendsDropdown] = useState(false);

    return (
        <>
            <div className="lg:w-72" />
            <aside className="w-full px-4 pt-8 pb-20 flex flex-col justify-between space-y-6 bg-bg-aside border-b border-border shadow-md shadow-shadow lg:fixed lg:inset-0 lg:w-72 lg:h-screen lg:border-b-0 lg:border-r z-40">
                <Link
                    href="/"
                    className="text-3xl text-center font-extrabold text-primary tracking-wider hover:text-primary-hover transition"
                >
                    G-Share
                </Link>

                <div className="flex flex-col items-center space-y-2 mt-6">
                    <Link
                        href={route("profile.show")}
                        className="flex justify-center"
                    >
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9865bd5-9256-461e-9cad-595da83f5964/d884qiy-a305329c-9f47-4b75-a7c0-ba603075ebc2.png/v1/fit/w_400,h_400,q_70,strp/request__zed_avatar_by_soulivium_d884qiy-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvZDg4NHFpeS1hMzA1MzI5Yy05ZjQ3LTRiNzUtYTdjMC1iYTYwMzA3NWViYzIucG5nIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2Q5ODY1YmQ1LTkyNTYtNDYxZS05Y2FkLTU5NWRhODNmNTk2NFwvc291bGl2aXVtLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.ovwlBbubWp7eWHdb39FUNBKxcXhzUZiigf5aKFmMupk"
                            alt="User Avatar"
                            className="w-20 h-20 rounded-full object-cover shadow-md border border-border"
                        />
                    </Link>
                    <div className="text-base font-bold tracking-wide">
                        <Link href={route("profile.show")}>
                            {auth.user.username}
                        </Link>
                    </div>
                    <div className="text-sm text-green-400">
                        ● {t("left-sidebar.user.status.online")}
                    </div>
                    <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className="w-3 h-3 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => modal.openModal("AddFriendModal")}
                        className="mt-3 text-sm px-4 py-1 flex items-center space-x-2 rounded shadow transition-all text-primary border border-primary"
                    >
                        <span>{t("left-sidebar.user.friend.add")}</span>{" "}
                        <FaUserPlus className="text-base" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mt-8">
                    {[
                        t("left-sidebar.user.notification"),
                        t("left-sidebar.user.chat"),
                        t("left-sidebar.user.team.create"),
                        t("left-sidebar.user.team.find"),
                    ].map((label, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (
                                    label ===
                                    t("left-sidebar.user.notification")
                                )
                                    modal.openModal("NotificationModal");
                                if (label === t("left-sidebar.user.chat"))
                                    modal.openModal("ChatModal");
                                if (
                                    label === t("left-sidebar.user.team.create")
                                )
                                    router.visit("/create-team");
                                if (label === t("left-sidebar.user.team.find"))
                                    router.visit("/find-team");
                            }}
                            className="bg-bg-tile hover:bg-bg-tile-hover border border-border rounded py-2 shadow transition"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-3 text-sm mt-8">
                    <div className="relative">
                        <button
                            onClick={() =>
                                setShowFriendsDropdown(!showFriendsDropdown)
                            }
                            className="bg-bg-tile hover:bg-bg-tile-hover border border-border rounded p-4 text-left transition w-full"
                        >
                            <p className="font-medium">
                                {t("left-sidebar.friends-online")}
                            </p>
                            <p className="text-xs text-text-light">dropdown</p>
                        </button>
                        {showFriendsDropdown && (
                            <div className="absolute z-50 w-48 bg-bg-tile border border-border rounded shadow-xl overflow-hidden top-full mt-2 lg:left-full lg:top-0 lg:ml-2 lg:mt-0">
                                {[
                                    "PlayerOne",
                                    "ShadowWolf",
                                    "ZedKiller",
                                    "NovaXD",
                                ].map((friend, i) => (
                                    <div
                                        key={i}
                                        className="px-4 py-2 text-sm bg-bg-tile hover:bg-bg-tile-hover transition cursor-pointer"
                                    >
                                        🟢 {friend}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {[
                        t("left-sidebar.rooms"),
                        t("left-sidebar.tournaments"),
                        t("left-sidebar.challenges"),
                    ].map((label, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (label === t("left-sidebar.rooms"))
                                    router.visit("/rooms");
                                if (label === t("left-sidebar.tournaments"))
                                    router.visit("/tournaments");
                                if (label === t("left-sidebar.challenges"))
                                    router.visit("/challenges");
                            }}
                            className="bg-bg-tile hover:bg-bg-tile-hover border border-border rounded p-4 text-left shadow transition"
                        >
                            <p className="font-medium">{label}</p>
                            <p className="text-xs text-text-light">odkaz</p>
                        </button>
                    ))}
                </div>

                <div className="text-sm flex items-center justify-center space-x-1 text-text-light">
                    <MdOutlineWorkspacePremium className="text-xl" />
                    <span>{t("left-sidebar.premium")}</span>
                    <span className="text-primary">0,99 €</span>
                </div>
            </aside>
        </>
    );
};
export default LeftSideBar;
