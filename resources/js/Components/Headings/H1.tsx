import React from "react";

type H2Props = React.HTMLAttributes<HTMLHeadingElement>;

const H2: React.FC<H2Props> = ({ children, className = "", ...props }) => (
    <h2
        className={`text-4xl sm:text-6xl font-extrabold text-primary mb-4 ${className}`}
        {...props}
    >
        {children}
    </h2>
);

export default H2;
