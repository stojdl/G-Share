import React from "react";

type H2Props = React.HTMLAttributes<HTMLHeadingElement>;

const H2: React.FC<H2Props> = ({ children, className = "", ...props }) => (
    <h2
        className={`text-3xl sm:text-4xl font-extrabold text-primary mb-4 flex items-center space-x-2 ${className}`}
        {...props}
    >
        {children}
    </h2>
);

export default H2;
