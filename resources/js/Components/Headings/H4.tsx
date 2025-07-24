import React from "react";

type H4Props = React.HTMLAttributes<HTMLHeadingElement>;

const H4: React.FC<H4Props> = ({ children, className = "", ...props }) => (
    <h4 className={`font-bold text-lg text-text ${className}`} {...props}>
        {children}
    </h4>
);

export default H4;
