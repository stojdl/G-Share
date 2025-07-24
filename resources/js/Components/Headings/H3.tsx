import React from "react";

type H3Props = React.HTMLAttributes<HTMLHeadingElement>;

const H3: React.FC<H3Props> = ({ children, className = "", ...props }) => (
    <h3
        className={`text-xl sm:text-2xl font-extrabold text-primary mb-4 ${className}`}
        {...props}
    >
        {children}
    </h3>
);

export default H3;
