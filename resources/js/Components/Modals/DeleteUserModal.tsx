import { useModal } from "@/Contexts/ModalContext";
import DeleteUserForm from "@/Fragments/Forms/DeleteUserForm";

const DeleteUserModal = () => {
    const { closeModal } = useModal();
    return (
        <div className="w-screen h-screen fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 lg:p-12">
            <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-white">
                <button
                    onClick={() => closeModal()}
                    className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-2xl font-bold"
                    aria-label="Zavřít"
                >
                    ✕
                </button>
                <DeleteUserForm />
            </div>
        </div>
    );
};

export default DeleteUserModal;
