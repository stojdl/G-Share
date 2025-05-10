import DangerButton from "@/Components/DangerButton";
import { useModal } from "@/Contexts/ModalContext";

export default function DeleteUser() {
    const { openModal } = useModal();

    return (
        <section className={`space-y-6`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <DangerButton
                onClick={() => openModal("DeleteUser")}
                className="w-full sm:w-max"
            >
                Delete Account
            </DangerButton>
        </section>
    );
}
