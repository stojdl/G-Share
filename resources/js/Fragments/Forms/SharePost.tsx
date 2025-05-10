import React from "react";

interface Props extends React.HTMLProps<HTMLTextAreaElement> {}

const SharePost = (props: Props) => {
    return (
        <textarea
            placeholder="📝 Napiš, co chceš sdílet..."
            className="w-full bg-gray-900 border border-gray-800 rounded p-5 text-white placeholder-gray-500 resize-none shadow cursor-pointer hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={4}
            readOnly
            {...props}
        />
    );
};

export default SharePost;
