import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import Dropdown from "../Dropdown";

const Index: React.FC = () => {
    const { auth, layout } = usePage<PageProps>().props;

    return (
        <nav className="w-full py-8 flex justify-between">
            <Link
                href="/"
                className="text-3xl font-bold text-[#49ab93] hover:text-[#328573] transition mb-6"
            >
                G-Share
            </Link>
            <div className="flex items-center space-x-2">
                {auth.user ? (
                    <>
                        <Dropdown
                            placeholder={<IoSettingsOutline />}
                            hideCaret
                            items={[
                                {
                                    label: layout.nav.enter,
                                    href: route("share_place"),
                                    type: "link",
                                    id: "enter",
                                },
                                {
                                    type: "divider",
                                    id: "divider",
                                },
                                {
                                    label: "Language",
                                    items: [
                                        {
                                            label: "Čeština",
                                            type: "link",
                                            href: route("lang.change", {
                                                lang: "cs",
                                            }),
                                            method: "post",
                                            preserveScroll: true,
                                            id: "cs",
                                        },
                                        {
                                            label: "English",
                                            type: "link",
                                            href: route("lang.change", {
                                                lang: "en",
                                            }),
                                            method: "post",
                                            preserveScroll: true,
                                            id: "en",
                                        },
                                    ],
                                    type: "submenu",
                                    id: "lang",
                                },

                                {
                                    type: "divider",
                                    id: "divider2",
                                },
                                {
                                    label: layout.sidebar.right.settings.logout,
                                    href: route("logout"),
                                    method: "post",
                                    type: "link",
                                    id: "logout",
                                },
                            ]}
                        />
                    </>
                ) : (
                    <div className="flex items-center space-x-4">
                        <Dropdown
                            placeholder={<IoLanguage />}
                            hideCaret
                            items={[
                                {
                                    label: "Čeština",
                                    type: "link",
                                    href: route("lang.change", {
                                        lang: "cs",
                                    }),
                                    method: "post",
                                    preserveScroll: true,
                                    id: "cs",
                                },
                                {
                                    label: "English",
                                    type: "link",
                                    href: route("lang.change", {
                                        lang: "en",
                                    }),
                                    method: "post",
                                    preserveScroll: true,
                                    id: "en",
                                },
                            ]}
                        />
                        <Link
                            href="/register"
                            className="px-5 py-2 rounded bg-[#49ab93] hover:bg-[#328573] border border-[#49ab93] text-[#141414] hover:text-[#f0f0f0] transition font-semibold shadow"
                        >
                            {layout.nav.button.register}
                        </Link>
                        <Link
                            href="/login"
                            className="px-5 py-2 rounded border border-[#49ab93] hover:border-[#6cb8a2] hover:bg-[#328573] transition text-[#49ab93] hover:text-[#f0f0f0] font-semibold shadow"
                        >
                            {layout.nav.button.login}
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Index;
