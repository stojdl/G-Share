import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";

const Nav = () => {
    const Butt = [
        {
            label: "Share Place",
            href: "/share-place",
            active: true,
        },
        { label: "Komunity", href: "/communities" },
        { label: "Skupiny", href: "/groups" },
        { label: "Esports", href: "/esports" },
    ];

    return (
        <div className="text-white bg-blue-500">
            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 px-4 py-3 flex flex-wrap justify-around sm:justify-evenly lg:justify-center gap-2 lg:gap-6 shadow-inner backdrop-blur-md">
                {Butt.map(({ label, href, active }, index) => (
                    <NavLink key={index} href={href} active={active}>
                        {label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Nav;
