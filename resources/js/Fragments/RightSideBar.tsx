import ThemeSwitcher from "@/Components/ThemeSwitcher";
import { Link } from "@inertiajs/react";

const RightSideBar = () => {
    return (
        <>
            <div className="lg:w-72" />
            <aside className="hidden lg:flex w-72 px-4 py-8 space-y-4 fixed top-0 right-0 h-screen border-l border-border bg-bg-aside shadow-md shadow-shadow z-40 flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <ThemeSwitcher />
                    </div>
                    <Link method="post" href={route("logout")} as="button">
                        Log Out
                    </Link>
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
