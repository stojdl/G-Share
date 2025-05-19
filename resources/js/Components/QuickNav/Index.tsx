import { usePage } from "@inertiajs/react";
import NavLink from "./NavLink";
import { PageProps } from "@/types";

interface NavProps {
    isAnyModalOpen: boolean;
}

const Nav: React.FC<NavProps> = ({ isAnyModalOpen }) => {
    const { layout } = usePage<PageProps>().props;

    if (isAnyModalOpen) return null;

    const { url } = usePage();
    const pathname = url.split("?")[0];

    const Butt = [
        {
            label: `${layout.quickNav.shareplace}`,
            href: "/share-place",
        },
        {
            label: `${layout.quickNav.communities}`,
            href: "/communities",
        },
        {
            label: `${layout.quickNav.groups}`,
            href: "/groups",
        },
        {
            label: `${layout.quickNav.esports}`,
            href: "/esports",
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-bg-nav border-t border-border px-4 py-3 flex flex-wrap justify-around sm:justify-evenly lg:justify-center gap-2 lg:gap-6 backdrop-blur-md">
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
