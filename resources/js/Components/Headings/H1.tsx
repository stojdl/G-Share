import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H1 = (props: Props) => {
    const { children } = props;

    return (
        <h1 className="text-4xl sm:text-6xl font-extrabold text-red-500 mb-4">
            {children}
        </h1>
    );
};
export default H1;
