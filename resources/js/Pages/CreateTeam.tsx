import TwitchButton from "@/Components/TwitchButton";
import Layout from "@/Layouts/Layout";

export default function CreateTeam() {
    return (
        <Layout>
            <main className="w-full rounded h-full space-y-2">
                <div className="flex flex-col md:flex-row justify-between bg-[var(--color-bg-tile)] border border-[var(--color-border)] items-center gap-4 p-4 rounded shadow">
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="bg-[var(--color-button)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] px-4 py-2 rounded font-semibold text-sm transition">
                            Vytvořit tým
                        </button>
                        <button className="bg-[var(--color-button)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] px-4 py-2 rounded font-semibold text-sm transition">
                            Najít tým
                        </button>
                    </div>
                    <select className="bg-[var(--color-bg-input-text)] text-[var(--color-text)] border border-[var(--color-border)] px-4 py-2 pr-10 w-full md:w-auto rounded shadow">
                        <option>Vyber hru</option>
                    </select>
                </div>
                <div className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] rounded-xl p-4 sm:p-6 space-y-4 shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 border border-[var(--color-border)] rounded-full bg-[var(--color-bg-input-text)]" />
                        <div className="flex-1 space-y-2">
                            <p className="text-[var(--color-text)] text-sm">
                                Popisek týmu (hledáme hráče na hraní večer po
                                práci nebo na víkendové hraní a tak)
                            </p>
                            <input
                                type="text"
                                placeholder="Název týmu"
                                className="w-full px-4 py-2 border border-[var(--color-border)] rounded bg-[var(--color-bg-input-text)] text-[var(--color-text)] placeholder-[var(--color-placeholder)] shadow"
                            />
                            <div className="flex flex-wrap justify-between items-center gap-2">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded text-xs bg-[var(--color-badge)] text-[var(--color-text)]">
                                        Region
                                    </span>
                                    <span className="px-3 py-1 rounded text-xs bg-[var(--color-badge)] text-[var(--color-text)]">
                                        Jazyk
                                    </span>
                                    <span className="px-3 py-1 rounded text-xs bg-[var(--color-badge)] text-[var(--color-text)]">
                                        Herní mód
                                    </span>
                                </div>
                                <button className="bg-[var(--color-button)] text-[var(--color-button-text)] border border-[var(--color-border)] px-6 py-2 rounded text-xs font-semibold transition hover:bg-[var(--color-button-hover)]">
                                    Vytvořit tým
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-[var(--color-bg-tile)] border border-[var(--color-border)] text-[var(--color-text)] rounded-xl min-h-[160px] flex items-center justify-center text-sm px-4 shadow"
                    >
                        Výpis týmů bude zde #{i + 1}
                    </div>
                ))}
            </main>
        </Layout>
    );
}
