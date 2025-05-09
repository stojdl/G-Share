import { useModal } from "@/Contexts/ModalContext";
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
    users: any[];
}

const Layout = ({ children, users }: Props) => {
    const modal = useModal();

    return (
        <div className="min-h-screen flex flex-col bg-black text-white relative lg:flex-row">
            <LeftSideBar />
            <RightSideBar />
            {children}
            <Nav isAnyModalOpen={modal.isOpen != false} />

            {modal.isOpen === "AddFriendModal" && (
                <AddFriendModal users={users} />
            )}
            {modal.isOpen === "NotificationModal" && <NotificationModal />}
            {modal.isOpen === "ChatModal" && <ChatModal />}
            {modal.isOpen === "PostModal" && <PostModal />}
        </div>
    );
};

export default Layout;
