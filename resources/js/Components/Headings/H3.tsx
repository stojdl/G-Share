import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H3 = (props: Props) => {
    const { children } = props;

    return (
        <h3 className="text-xl sm:text-2xl font-extrabold text-red-500 mb-4">
            {children}
        </h3>
    );
};
export default H3;
