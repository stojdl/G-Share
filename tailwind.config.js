import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: false,
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            colors: {
                bg: "var(--color-bg)",
                "bg-aside": "var(--color-bg-aside)",
                "bg-nav": "var(--color-bg-nav)",
                "bg-post-card": "var(--color-bg-post-card)",
                "bg-post-reaction": "var(--color-bg-post-reaction)",
                "bg-comment-card": "var(--color-bg-comment-card)",
                "bg-input-text": "var(--color-bg-input-text)",
                "bg-input-text-hover": "var(--color-bg-input-text-hover)",
                "bg-tile": "var(--color-bg-tile)",
                "bg-tile-hover": "var(--color-bg-tile-hover)",
                "bg-twitch": "var(--color-bg-twitch)",
                border: "var(--color-border)",
                "border-focus": "var(--color-border-focus)",
                shadow: "var(--color-shadow)",
                text: "var(--color-text)",
                "text-light": "var(--color-text-light)",
                placeholder: "var(--color-placeholder)",
                primary: "var(--color-primary)",
                "primary-hover": "var(--color-primary-hover)",
                secondary: "var(--color-secondary)",
                "secondary-hover": "var(--color-secondary-hover)",
                border: "var(--color-border)",

                "bg-add": "var(--color-bg-add)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
