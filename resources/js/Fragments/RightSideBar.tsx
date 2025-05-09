import LeftSideBar from "@/Fragments/LeftSideBar";
import { ReactNode } from "react";

const RightSideBar = () => {
    return (
        <aside className="hidden lg:flex w-72 fixed right-0 top-0 h-screen p-6  border-l border-gray-800 bg-gray-900/60 backdrop-blur-md shadow-xl z-40 flex-col">
            <div className="sticky top-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-200">
                    📢 Reklama
                </h2>
                <div className="w-full h-80 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-gray-500 shadow-md">
                    Reklamní prostor
                </div>
                <div className="w-full h-80 bg-gray-800 border border-gray-700 rounded flex items-center justify-center text-gray-500 shadow-md">
                    Další reklama
                </div>
            </div>
        </aside>
    );
};
export default RightSideBar;
