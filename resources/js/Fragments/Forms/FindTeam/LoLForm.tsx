import { useForm } from "@inertiajs/react";
import TextField from "@/Components/Forms/Inputs/TextField";
import { GiSwordsEmblem } from "react-icons/gi";

export default function LoLForm() {
    const { data, setData, get, processing, errors } = useForm({
        game: "LoL",
        name: "",
        slug: "",
        description: "",
        size: "",
        lang: "",
        region: "",
        membership_type: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        get(route("team.find"), {
            onSuccess: (teams) => {
                console.log("Team search initiated:", teams);
            },
            preserveState: true,
        });
    };

    return (
        <form className="space-y-1" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-center bg-bg-tile border border-border items-center gap-4 p-4 rounded shadow">
                <div className="flex gap-1 justify-end">
                    <select
                        className="w-max px-3 py-1 bg-bg-input-text rounded text-text cursor-pointer text-right"
                        name="region"
                        value={data.region}
                        onChange={(e) => setData("region", e.target.value)}
                    >
                        <option value="">Region</option>
                        <option value="euw">EU West (EUW)</option>
                        <option value="eune">EU Nordic & East (EUNE)</option>
                        <option value="na">North America (NA)</option>
                        <option value="kr">Korea (KR)</option>
                        <option value="lan">Latin America North (LAN)</option>
                        <option value="las">Latin America South (LAS)</option>
                        <option value="oce">Oceania (OCE)</option>
                        <option value="ru">Russia (RU)</option>
                        <option value="tr">Turkey (TR)</option>
                        <option value="jp">Japan (JP)</option>
                        <option value="br">Brazil (BR)</option>
                    </select>
                    <span className="px-2 py-1 rounded bg-badge text-text cursor-not-allowed text-right">
                        Jazyk
                    </span>
                    <span className="px-2 py-1 rounded bg-badge text-text cursor-not-allowed text-right">
                        Herní mód
                    </span>
                </div>
            </div>
            <div className="px-4 border border-border rounded bg-bg-tile space-y-4 shadow sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <GiSwordsEmblem className="p-3 text-9xl text-text-light border border-text-light rounded-full cursor-not-allowed" />
                    <div className="space-y-2">
                        <TextField
                            label="Název týmu"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="třeba Banda kokotů"
                            className="w-full px-4 py-2 border bordercolor-border rounded bgcolor-bg-input-text textcolor-text placeholdercolor-placeholder shadow"
                            error={errors.name}
                        />
                    </div>
                    <div className="flex flex-col flex-wrap items-end justify-end gap-2">
                        <button
                            type="submit"
                            className="bg-button text-button-text border border-border px-6 py-2 rounded text-xs font-semibold transition hover:bg-button-hover"
                            disabled={processing}
                        >
                            Hledat tým
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
