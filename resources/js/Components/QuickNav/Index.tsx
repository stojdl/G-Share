import { usePage } from "@inertiajs/react";
import NavLink from "./NavLink";

interface NavProps {
    isAnyModalOpen: boolean;
}

const Nav: React.FC<NavProps> = ({ isAnyModalOpen }) => {
    if (isAnyModalOpen) return null;

    const { url } = usePage();
    const pathname = url.split("?")[0];

    const Butt = [
        {
            label: "Share Place",
            href: "/share-place",
        },
        {
            label: "Komunity",
            href: "/communities",
        },
        {
            label: "Skupiny",
            href: "/groups",
        },
        {
            label: "Esports",
            href: "/esports",
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 px-4 py-3 flex flex-wrap justify-around sm:justify-evenly lg:justify-center gap-2 lg:gap-6 shadow-inner backdrop-blur-md">
            {Butt.map(({ label, href }, index) => {
                const isActive = pathname.startsWith(href);

                return (
                    <NavLink key={index} href={href} active={isActive}>
                        {label}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default Nav;
