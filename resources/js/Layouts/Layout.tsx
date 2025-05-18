import AddFriendModal from "@/Components/Modals/AddFriendModal";
import ChatModal from "@/Components/Modals/ChatModal";
import NotificationModal from "@/Components/Modals/NotificationModal";
import SharePostModal from "@/Components/Modals/SharePostModal";
import Nav from "@/Components/QuickNav/Index";
import TwitchButton from "@/Components/TwitchButton";
import { useModal } from "@/Contexts/ModalContext";
import SearchAnything from "@/Fragments/Forms/SearchAnything";
import LeftSideBar from "@/Fragments/LeftSideBar";
import RightSideBar from "@/Fragments/RightSideBar";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;
    const { users } = usePage<PageProps>().props;

    const modal = useModal();

    return (
        <main className="relative min-h-screen px-4 pb-28 flex flex-col bg-bg text-text lg:flex-row">
            <TwitchButton />

            <LeftSideBar />
            <section className="flex-1 pt-8 space-y-4 ">
                <div className="flex items-center justify-between">
                    <SearchAnything />
                    {/* <div className="hidden lg:flex border px-4 py-2 rounded">
                        dropdown {"<"}
                    </div> */}
                </div>
                {children}
            </section>
            <RightSideBar />

            <Nav isAnyModalOpen={modal.isOpen != false} />

            {modal.isOpen === "AddFriendModal" && (
                <AddFriendModal users={users} />
            )}
            {modal.isOpen === "NotificationModal" && <NotificationModal />}
            {modal.isOpen === "ChatModal" && <ChatModal />}
            {modal.isOpen === "SharePostModal" && <SharePostModal />}
        </main>
    );
};

export default Layout;
