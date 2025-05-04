import { Link } from "@inertiajs/react";
import React from "react";

interface BottomNavProps {
    isAnyModalOpen: boolean;
    activePath: string; // např. "/share-place"
}

const BottomNav: React.FC<BottomNavProps> = ({
    isAnyModalOpen,
    activePath,
}) => {
    if (isAnyModalOpen) return null;

    const navItems = [
        { label: "Share Place", href: "/share-place" },
        { label: "Komunity", href: "/communities" },
        { label: "Skupiny", href: "/groups" },
        { label: "Esports", href: "/esports" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 px-4 py-3 flex flex-wrap justify-around sm:justify-evenly lg:justify-center gap-2 lg:gap-6 shadow-inner backdrop-blur-md">
            {navItems.map(({ label, href }, index) => {
                const isActive = activePath === href;

                return (
                    <Link
                        key={index}
                        href={href}
                        className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-semibold transition-all shadow-md ${
                            isActive
                                ? "bg-red-600 text-white hover:bg-red-700"
                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                        }`}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
};

export default BottomNav;
