const SearchAnything = () => {
    return (
        <form className="w-full md:w-1/2">
            <input
                type="text"
                placeholder="🔍 Hledat cokoliv ..."
                className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
        </form>
    );
};

export default SearchAnything;
