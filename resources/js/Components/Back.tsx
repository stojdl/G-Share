import React from "react";

const Back: React.FC = () => (
    <button
        onClick={() => window.history.back()}
        className="text-text hover:text-text-light transition"
    >
        ← Zpět
    </button>
);

export default Back;
