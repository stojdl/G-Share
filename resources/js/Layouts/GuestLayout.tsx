import { PropsWithChildren, useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Footer from "@/Fragments/Footers/Footer";
import Nav from "@/Components/Nav/Index";

export default function Guest({ children }: PropsWithChildren) {
    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        let lastScroll = 0;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 50) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
            lastScroll = currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <main className="min-h-screen bg-[#141414] text-[#f0f0f0] flex flex-col items-center px-6">
                <header className="w-full max-w-7xl">
                    <Nav />
                </header>

                <div className="w-full max-w-7xl grid place-items-center rounded bg-[#1f1f1f] border border-[#262626] p-6 sm:p-8 shadow-2xl">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}
