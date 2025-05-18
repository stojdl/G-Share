import Dropdown from "@/Components/Dropdown";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { FaAdversal } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const RightSideBar = () => {
    const { t } = useLaravelReactI18n();

    const switchTheme = (newTheme: string) => {
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const switchLanguage = (newLanguage: string) => {
        sessionStorage.setItem("locale", newLanguage);
        window.location.reload();
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
                                label: t("right-sidebar.settings.profile"),
                                href: route("profile.edit"),
                                type: "link",
                                id: "profile",
                            },
                            {
                                type: "divider",
                                id: "divider",
                            },
                            {
                                label: t("right-sidebar.settings.language"),
                                items: [
                                    {
                                        label: "Čeština",
                                        onClick: () => switchLanguage("cs"),
                                        type: "button",
                                        id: "cs",
                                    },
                                    {
                                        label: "English",
                                        onClick: () => switchLanguage("en"),
                                        type: "button",
                                        id: "en",
                                    },
                                ],
                                type: "submenu",
                                id: "lang",
                            },
                            {
                                label: t("right-sidebar.settings.theme"),
                                items: [
                                    {
                                        label: t(
                                            "right-sidebar.settings.theme.light"
                                        ),
                                        onClick: () => switchTheme("light"),
                                        type: "button",
                                        id: "lightmode",
                                    },
                                    {
                                        label: t(
                                            "right-sidebar.settings.theme.dark"
                                        ),
                                        onClick: () => switchTheme("dark"),
                                        type: "button",
                                        id: "darkmode",
                                    },
                                    {
                                        label: t(
                                            "right-sidebar.settings.theme.neon"
                                        ),
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
                                label: t("right-sidebar.settings.logout"),
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
                        <span>{t("right-sidebar.ad")}</span>
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
