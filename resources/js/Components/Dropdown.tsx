import { Link } from "@inertiajs/react";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface DropdownItemBase {
    id: string | number;
}

interface DropdownLinkItem extends DropdownItemBase {
    type: "link";
    method?: "get" | "post" | "put" | "patch" | "delete";
    preserveScroll?: boolean;
    label: string;
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

interface DropdownButtonItem extends DropdownItemBase {
    type: "button";
    label: string;
    onClick: () => void;
}

interface DropdownDividerItem extends DropdownItemBase {
    type: "divider";
}

interface DropdownSubmenuItem extends DropdownItemBase {
    type: "submenu";
    label: string;
    items: DropdownItem[];
}

type DropdownItem =
    | DropdownLinkItem
    | DropdownButtonItem
    | DropdownDividerItem
    | DropdownSubmenuItem;

interface DropdownProps {
    items: DropdownItem[];
    placeholder?: ReactNode;
    hideCaret?: boolean;
    triggerClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    items,
    hideCaret,
    placeholder = "Vyberte...",
    triggerClassName,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<string | number | null>(
        null
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setActiveSubmenu(null);
            }
        }

        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
                setActiveSubmenu(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                type="button"
                className={`w-full px-4 py-2 flex items-center bg-bg-tile hover:bg-bg-tile-hover border border-border rounded-md shadow-sm text-left focus:outline-none ${triggerClassName}`}
                onClick={handleToggle}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                {placeholder}
                {!hideCaret && (
                    <span className="float-right ml-2">&#x25BC;</span>
                )}
            </button>

            {isOpen && (
                <ul className="absolute right-0 z-50 mt-1 w-max bg-bg-tile shadow-lg max-h-60 rounded-md py-1 text-base border border-border">
                    {items.map((item) => {
                        switch (item.type) {
                            case "link":
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            className="block pl-4 pr-8 py-2 hover:bg-bg-tile-hover "
                                            method={item.method}
                                            preserveScroll={item.preserveScroll}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            case "button":
                                return (
                                    <li key={item.id}>
                                        <button
                                            className="block w-full text-left pl-4 pr-8 py-2 hover:bg-bg-tile-hover"
                                            onClick={item.onClick}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                );
                            case "divider":
                                return (
                                    <li key={item.id}>
                                        <hr className="border-border" />
                                    </li>
                                );
                            case "submenu": {
                                const isActive = activeSubmenu === item.id;
                                return (
                                    <li
                                        key={item.id}
                                        className="relative"
                                        onMouseEnter={() =>
                                            setActiveSubmenu(item.id)
                                        }
                                        onMouseLeave={() =>
                                            setActiveSubmenu(null)
                                        }
                                    >
                                        <button className="w-full text-left pl-4 pr-8 py-2 hover:bg-bg-tile-hover flex items-center justify-between">
                                            {item.label}
                                            {/* <span>&#x25B6;</span> */}
                                        </button>
                                        {isActive && (
                                            <ul className="absolute right-full top-0 ml-1 w-max bg-bg-tile shadow-lg rounded-md py-1 text-base border border-border">
                                                {item.items.map((subItem) => {
                                                    switch (subItem.type) {
                                                        case "link":
                                                            return (
                                                                <li
                                                                    key={
                                                                        subItem.id
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        method={
                                                                            subItem.method
                                                                        }
                                                                        preserveScroll={
                                                                            subItem.preserveScroll
                                                                        }
                                                                        className="block pl-4 pr-8 py-2 hover:bg-bg-tile-hover "
                                                                    >
                                                                        {
                                                                            subItem.label
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            );
                                                        case "button":
                                                            return (
                                                                <li
                                                                    key={
                                                                        subItem.id
                                                                    }
                                                                >
                                                                    <button
                                                                        className="block w-full text-left pl-4 pr-8 py-2 hover:bg-bg-tile-hover"
                                                                        onClick={
                                                                            subItem.onClick
                                                                        }
                                                                    >
                                                                        {
                                                                            subItem.label
                                                                        }
                                                                    </button>
                                                                </li>
                                                            );
                                                        case "divider":
                                                            return (
                                                                <li
                                                                    key={
                                                                        subItem.id
                                                                    }
                                                                >
                                                                    <hr className="border-border" />
                                                                </li>
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                );
                            }
                            default:
                                return null;
                        }
                    })}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
