import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 rounded-md font-semibold text-sm 
                bg-[#49ab93] border border-transparent 
                hover:bg-[#328573] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                disabled:opacity-50 disabled:cursor-not-allowed transition ` +
                className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
