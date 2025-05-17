interface Props extends React.HTMLProps<HTMLTextAreaElement> {}

const SharePost = (props: Props) => {
    return (
        <textarea
            name=""
            placeholder="📝 Napiš, co chceš sdílet..."
            className="w-full h-16 bg-bg-input-text border border-border shadow-sm shadow-shadow rounded p-5  placeholder-placeholder resize-none cursor-pointer hover:bg-bg-input-text-hover hover:shadow-md hover:shadow-shadow transition-all focus:bg-bg-input-text-hover focus:outline-none focus:border-border-focus focus:ring-1 focus:ring-border-focus"
            rows={4}
            readOnly
            {...props}
        />
    );
};

export default SharePost;
