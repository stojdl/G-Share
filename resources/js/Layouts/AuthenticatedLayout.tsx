import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/QuickNav/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import DeleteUserModal from "@/Components/Modals/DeleteUserModal";
import { useModal } from "@/Contexts/ModalContext";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const { auth } = usePage().props;
    const user = auth.user;
    const { isOpen } = useModal();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
            <nav className="border-b border-[var(--color-border)] bg-[var(--color-bg-tile)]">
                <div className="mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center">
                    <Link href="/">
                        <ApplicationLogo className="h-10 w-auto" />
                    </Link>

                    <div className="hidden sm:flex gap-6 items-center">
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink href={route("profile.edit")}>Profil</NavLink>

                        <form method="POST" action={route("logout")}>
                            <button
                                type="submit"
                                className="text-[var(--color-text)] hover:underline"
                            >
                                Odhlásit se
                            </button>
                        </form>
                    </div>

                    <div className="sm:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded focus:outline-none text-[var(--color-text)] hover:bg-[var(--color-bg-tile)]"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="sm:hidden px-4 pb-4 space-y-2">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route("profile.edit")}>
                            Profil
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                )}
            </nav>

            {header && (
                <header className="bg-[var(--color-bg-tile)] border-b border-[var(--color-border)] shadow">
                    <div className="max-w-screen-xl mx-auto px-4 py-6">
                        {header}
                    </div>
                </header>
            )}

            <main className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
                {children}
                {isOpen === "DeleteUser" && <DeleteUserModal />}
            </main>
        </div>
    );
}
