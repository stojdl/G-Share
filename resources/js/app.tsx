import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./Contexts/ModalContext";
import { LaravelReactI18nProvider } from "laravel-react-i18n";

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

        const getBrowserLocale = () => {
            if (sessionStorage.getItem("locale")) {
                return sessionStorage.getItem("locale")?.toString();
            } else {
                const language = navigator.language || navigator.languages[0];
                return language.split("-")[0]; // Return only the language code, e.g., "en"
            }
        };

        const browserLocale = getBrowserLocale();

        root.render(
            <LaravelReactI18nProvider
                locale={browserLocale}
                fallbackLocale={"en"}
                files={import.meta.glob(["/lang/**/*.json"])}
            >
                <ModalProvider>
                    <App {...props} />
                </ModalProvider>
            </LaravelReactI18nProvider>
        );
    },

    progress: {
        color: "#4B5563",
    },
});
