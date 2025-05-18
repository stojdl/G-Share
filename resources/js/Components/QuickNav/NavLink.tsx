import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href: string;
    className?: string;
    active?: boolean;
}

const NavLink = (props: Props) => {
    const { children, href, className, active } = props;

    return (
        <Link
            href={href}
            className={`text-xs sm:text-sm px-4 py-2 rounded font-semibold transition-all shadow-md ${
                active
                    ? "bg-primary hover:bg-primary-hover"
                    : "bg-secondary hover:bg-secondary-hover"
            }`}
        >
            {children}
        </Link>
    );
};
export default NavLink;
