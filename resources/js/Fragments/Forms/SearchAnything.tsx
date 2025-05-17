const SearchAnything = () => {
    return (
        <form className="w-full md:w-1/2">
            <input
                type="text"
                placeholder="🔍 Hledat cokoliv ..."
                className="w-full bg-bg-input-text border border-border shadow-sm shadow-shadow rounded px-4 py-2 placeholder-placeholder hover:bg-bg-input-text-hover hover:shadow-md hover:shadow-shadow focus:bg-bg-input-text-hover focus:border-border-focus focus:outline-none focus:ring-1 focus:ring-border-focus focus:shadow-lg focus:shadow-shadow transition"
            />
        </form>
    );
};

export default SearchAnything;
