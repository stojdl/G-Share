import { useLaravelReactI18n } from "laravel-react-i18n";
import { IoIosSearch } from "react-icons/io";

const SearchAnything = () => {
    const { t } = useLaravelReactI18n();

    return (
        <form className="w-full md:w-1/2 relative">
            <input
                type="text"
                placeholder={t("layout.search")}
                className="w-full bg-bg-input-text border border-border shadow-sm shadow-shadow rounded px-4 py-2 placeholder-placeholder hover:bg-bg-input-text-hover hover:shadow-md hover:shadow-shadow focus:bg-bg-input-text-hover focus:border-border-focus focus:outline-none focus:ring-1 focus:ring-border-focus focus:shadow-lg focus:shadow-shadow transition pr-10"
            />
            <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
                <IoIosSearch className="text-lg" />
            </div>
        </form>
    );
};

export default SearchAnything;
