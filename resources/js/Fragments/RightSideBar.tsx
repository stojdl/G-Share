import Dropdown from "@/Components/Dropdown";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { FaAdversal } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const RightSideBar = () => {
    const { layout } = usePage<PageProps>().props;

    const switchTheme = (newTheme: string) => {
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <div className="w-full lg:max-w-72 xl:max-w-80 2xl:max-w-96" />
            <aside className="hidden lg:flex w-full max-w-72 px-4 py-8 space-y-4 fixed top-0 right-0 h-screen border-l border-border bg-bg-aside shadow-md shadow-shadow z-40 flex-col  xl:max-w-80 2xl:max-w-96">
                <div className="flex items-center justify-end">
                    {/* <div>
                        <ThemeSwitcher />
                    </div> */}

                    <Dropdown
                        placeholder={<IoSettingsOutline />}
                        hideCaret
                        items={[
                            {
                                label: layout.sidebar.right.settings.profile,
                                href: route("profile.edit"),
                                type: "link",
                                id: "profile",
                            },
                            {
                                type: "divider",
                                id: "divider1",
                            },
                            {
                                label: layout.sidebar.right.settings.language,
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
                                label: layout.sidebar.right.settings.themes
                                    .theme,
                                items: [
                                    {
                                        label: layout.sidebar.right.settings
                                            .themes.light,
                                        onClick: () => switchTheme("light"),
                                        type: "button",
                                        id: "lightmode",
                                    },
                                    {
                                        label: layout.sidebar.right.settings
                                            .themes.dark,
                                        onClick: () => switchTheme("dark"),
                                        type: "button",
                                        id: "darkmode",
                                    },
                                    {
                                        label: layout.sidebar.right.settings
                                            .themes.neon,
                                        onClick: () => switchTheme("neon"),
                                        type: "button",
                                        id: "neonmode",
                                    },
                                ],
                                type: "submenu",
                                id: "theme",
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
                </div>
                <div className="sticky top-6 space-y-4">
                    <h2 className="flex items-center space-x-2 text-xl font-semibold">
                        <FaAdversal />
                        <span>{layout.sidebar.right.ad}</span>
                    </h2>
                    <div className="w-full h-64 bg-bg-add border border-border rounded flex items-center justify-center shadow-md">
                        Reklamní prostor
                    </div>
                    <div className="w-full h-80 bg-bg-add border border-border rounded flex items-center justify-center shadow-md">
                        Další reklama
                    </div>
                </div>
            </aside>
        </>
    );
};
export default RightSideBar;
