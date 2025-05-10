import React from "react";

const TwitchButton = () => {
    return (
        <div className="bg-gray-950 border border-gray-800 px-4 py-2 text-sm flex justify-center items-center rounded-l shadow">
            <a
                href="https://twitch.tv/JinochiTR1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-white hover:text-red-400 transition"
            >
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                LIVE ON TWITCH
            </a>
        </div>
    );
};

export default TwitchButton;
