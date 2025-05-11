import { createContext, useContext, useState, ReactNode } from "react";

// Typy pro kontext
interface ModalContextType {
    isOpen:
        | false
        | "AddFriendModal"
        | "NotificationModal"
        | "ChatModal"
        | "PostModal"
        | "SharePostModal"
        | "DeleteUser";
    openModal: (
        modal:
            | "AddFriendModal"
            | "NotificationModal"
            | "ChatModal"
            | "PostModal"
            | "SharePostModal"
            | "DeleteUser"
    ) => void;
    closeModal: () => void;
}

// Výchozí hodnota kontextu
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider komponenta
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<
        | false
        | "AddFriendModal"
        | "NotificationModal"
        | "ChatModal"
        | "PostModal"
        | "SharePostModal"
        | "DeleteUser"
    >(false);

    const openModal = (
        modal:
            | "AddFriendModal"
            | "NotificationModal"
            | "ChatModal"
            | "PostModal"
            | "SharePostModal"
            | "DeleteUser"
    ) => setIsOpen(modal);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// Vlastní hook pro snadnější přístup ke kontextu
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
