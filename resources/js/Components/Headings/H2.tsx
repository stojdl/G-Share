import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H2 = (props: Props) => {
    const { children } = props;

    return (
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-500 mb-4">
            {children}
        </h2>
    );
};
export default H2;
