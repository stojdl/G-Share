import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

const RightSideBar = () => {
    const [theme, setTheme] = useState("dark");

    const switchTheme = (newTheme: string) => {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <div className="lg:w-72" />
            <aside className="hidden lg:flex w-72 px-4 py-8 space-y-4 fixed top-0 right-0 h-screen border-l border-border bg-bg-aside shadow-md shadow-shadow z-40 flex-col">
                <div className="flex items-center justify-end">
                    {/* <div>
                        <ThemeSwitcher />
                    </div> */}

                    <Dropdown
                        placeholder={<IoSettingsOutline />}
                        hideCaret
                        items={[
                            {
                                label: "Profil",
                                href: route("profile.edit"),
                                type: "link",
                                id: "profile",
                            },
                            {
                                type: "divider",
                                id: "divider",
                            },
                            {
                                label: "Téma",
                                items: [
                                    {
                                        label: "Světlé téma",
                                        onClick: () => switchTheme("light"),
                                        type: "button",
                                        id: "lightmode",
                                    },
                                    {
                                        label: "Tmavé téma",
                                        onClick: () => switchTheme("dark"),
                                        type: "button",
                                        id: "darkmode",
                                    },
                                    {
                                        label: "Neon téma",
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
                                id: "divider",
                            },
                            {
                                label: "Odhlásit se",
                                href: route("logout"),
                                method: "POST",
                                type: "link",
                                id: "logout",
                            },
                        ]}
                    />
                </div>
                <div className="sticky top-6 space-y-4">
                    <h2 className="text-xl font-semibold">📢 Reklama</h2>
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
