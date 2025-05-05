import React, { useEffect, useState } from "react";
import LeftSideBar from "@/Fragments/LeftSideBar";
import RightSideBar from "@/Fragments/RightSideBar";
import { ReactNode } from "react";
import AddFriendModal from "@/Components/Modals/AddFriendModal";
import NotificationModal from "@/Components/Modals/NotificationModal";
import ChatModal from "@/Components/Modals/ChatModal";
import PostModal from "@/Components/Modals/PostModal";
import Nav from "@/Components/Nav/Index";
import { useModal } from "@/Contexts/ModalContext";

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;

    // const [isAddFriendModalOpen, setAddFriendModalOpen] = useState(false);
    //const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
    //const [isChatModalOpen, setChatModalOpen] = useState(false);

    //const [isPostModalOpen, setPostModalOpen] = useState(false);

    const [hideHeader, setHideHeader] = useState(false);

    const modal = useModal();
    console.log(modal);

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

    return (
        <div className="min-h-screen flex flex-col bg-black text-white relative lg:flex-row">
            <LeftSideBar />
            <RightSideBar />
            {children}
            <Nav isAnyModalOpen={modal.isOpen != false} />

            {modal.isOpen === "AddFriendModal" && <AddFriendModal />}
            {modal.isOpen === "NotificationModal" && <NotificationModal />}
            {modal.isOpen === "ChatModal" && <ChatModal />}
            {modal.isOpen === "PostModal" && <PostModal />}
        </div>
    );
};
export default Layout;
