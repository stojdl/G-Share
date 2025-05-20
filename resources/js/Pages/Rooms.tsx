import TwitchButton from "@/Components/TwitchButton";
import Layout from "@/Layouts/Layout";

export default function Rooms() {
    return (
        <Layout>
            <main className="w-full max-w-screen-xl space-y-6 px-6 py-6">
                <TwitchButton />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <input
                        type="text"
                        placeholder="🔍 Hledat místnosti..."
                        className="w-full md:w-1/2 bg-[var(--color-bg-input-text)] border border-[var(--color-border)] rounded-md px-4 py-2 text-[var(--color-text)] placeholder-[var(--color-placeholder)] shadow-md focus:outline-none focus:border-[var(--color-border-focus)]"
                    />
                </div>

                <h1 className="text-3xl font-extrabold text-[var(--color-text)]">
                    ROOMS
                </h1>

                <div className="flex flex-wrap gap-3">
                    {["🎮 podle hry", "👥 podle přátel", "💬 text/hlas"].map(
                        (filter, i) => (
                            <button
                                key={i}
                                className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] hover:bg-[var(--color-bg-tile-hover)] px-4 py-2 rounded-md text-sm text-[var(--color-text)] shadow-md transition"
                            >
                                {filter}
                            </button>
                        )
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-md min-h-[150px] flex items-center justify-center text-[var(--color-text-light)] shadow-md hover:shadow-lg transition"
                        >
                            Místnost #{i + 1}
                        </div>
                    ))}
                </div>
            </main>
        </Layout>
    );
}
