import ThemeSwitcher from "@/Components/ThemeSwitcher";
import { Link } from "@inertiajs/react";

const RightSideBar = () => {
    return (
        <>
            <div className="lg:w-72" />
            <aside className="hidden lg:flex w-72 px-4 py-8 space-y-4 fixed top-0 right-0 h-screen  border-l border-gray-800 bg-bg backdrop-blur-md shadow-xl z-40 flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <ThemeSwitcher />
                    </div>
                    <Link method="post" href={route("logout")} as="button">
                        Log Out
                    </Link>
                </div>
                <div className="sticky top-6 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-200">
                        📢 Reklama
                    </h2>
                    <div className="w-full h-64 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-gray-500 shadow-md">
                        Reklamní prostor
                    </div>
                    <div className="w-full h-80 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-gray-500 shadow-md">
                        Další reklama
                    </div>
                </div>
            </aside>
        </>
    );
};
export default RightSideBar;
