import React, { useEffect, useState } from "react";
import LeftSideBar from "@/Fragments/LeftSideBar";
import RightSideBar from "@/Fragments/RightSideBar";
import { ReactNode } from "react";
import AddFriendModal from "@/Components/Modals/AddFriendModal";
import NotificationModal from "@/Components/Modals/NotificationModal";
import ChatModal from "@/Components/Modals/ChatModal";
import PostModal from "@/Components/Modals/PostModal";
import Nav from "@/Components/Nav/Index";

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;

    const [isAddFriendModalOpen, setAddFriendModalOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
    const [isChatModalOpen, setChatModalOpen] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        let lastScroll = 0;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 50) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
            lastScroll = currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isAnyModalOpen =
        isAddFriendModalOpen ||
        isNotificationModalOpen ||
        isPostModalOpen ||
        isChatModalOpen;

    return (
        <div className="min-h-screen flex flex-col bg-black text-white relative lg:flex-row">
            <LeftSideBar
                isAddFriendModalOpen={isAddFriendModalOpen}
                setAddFriendModalOpen={setAddFriendModalOpen}
                isNotificationModalOpen={isNotificationModalOpen}
                setNotificationModalOpen={setNotificationModalOpen}
                isChatModalOpen={setChatModalOpen}
                setChatModalOpen={setChatModalOpen}
            />
            <RightSideBar />
            {children}
            {!isAnyModalOpen && (
                <Nav
                //isAnyModalOpen={isAnyModalOpen}
                //activePath="/share-place"
                />
            )}
            {isAddFriendModalOpen && (
                <AddFriendModal setAddFriendModalOpen={setAddFriendModalOpen} />
            )}
            {isNotificationModalOpen && (
                <NotificationModal
                    setNotificationModalOpen={setNotificationModalOpen}
                />
            )}
            {isChatModalOpen && (
                <ChatModal setChatModalOpen={setChatModalOpen} />
            )}
            {isPostModalOpen && (
                <PostModal setPostModalOpen={setPostModalOpen} />
            )}
        </div>
    );
};
export default Layout;
