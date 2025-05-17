import { MdOutlinePostAdd } from "react-icons/md";

interface Props extends React.HTMLProps<HTMLTextAreaElement> {}

const SharePost = (props: Props) => {
    return (
        <div className="relative w-full">
            <textarea
                name=""
                placeholder="Napiš, co chceš sdílet..."
                className="w-full h-16 bg-bg-input-text border border-border shadow-sm shadow-shadow rounded p-5  placeholder-placeholder resize-none cursor-pointer hover:bg-bg-input-text-hover hover:shadow-md hover:shadow-shadow transition-all focus:bg-bg-input-text-hover focus:outline-none focus:border-border-focus focus:ring-1 focus:ring-border-focus"
                rows={4}
                readOnly
                {...props}
            />
            <div className="absolute top-0 right-5 h-16 flex items-center pointer-events-none">
                <MdOutlinePostAdd className="text-2xl text-placeholder" />
            </div>
        </div>
    );
};

export default SharePost;
