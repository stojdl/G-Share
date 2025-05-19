import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./Contexts/ModalContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const pages = import.meta.glob([
            "./Pages/**/*.tsx",
            "./Fragments/**/*.tsx", // ✅ teď bude hledat i mimo Pages
        ]);

        const importPage =
            pages[`./Pages/${name}.tsx`] || pages[`./Fragments/${name}.tsx`];

        if (!importPage) {
            throw new Error(`Page not found: ${name}`);
        }

        return await importPage();
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ModalProvider>
                <App {...props} />
            </ModalProvider>
        );
    },

    progress: {
        color: "#4B5563",
    },
});
