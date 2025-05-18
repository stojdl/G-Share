import { useLaravelReactI18n } from "laravel-react-i18n";

const TwitchButton = () => {
    const { t } = useLaravelReactI18n();

    return (
        <div className="fixed inset-0 z-50 h-5 px-4 py-1 flex justify-center items-center text-xs bg-bg-twitch border-b border-border shadow">
            <a
                href="https://twitch.tv/JinochiTR1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:text-red-400 transition"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                {t("layout.twitch")}
            </a>
        </div>
    );
};

export default TwitchButton;
