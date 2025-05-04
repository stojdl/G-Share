import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href: string;
    className?: string;
    active?: boolean;
}

const LinkButton = (props: Props) => {
    const { children, href, className, active } = props;

    return (
        <Link
            href={href}
            className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-semibold transition-all shadow-md ${
                active
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
        >
            {children}
        </Link>
    );
};
export default LinkButton;
