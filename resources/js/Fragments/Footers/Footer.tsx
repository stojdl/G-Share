const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-4 text-center">
            <div className="max-w-screen-xl mx-auto px-4">
                <p className="mb-2">
                    © {new Date().getFullYear()} Your App Name. All rights
                    reserved.
                </p>
                <nav className="flex justify-center space-x-4">
                    <a
                        href="/privacy-policy"
                        className="text-white hover:underline"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/terms-of-service"
                        className="text-white hover:underline"
                    >
                        Terms of Service
                    </a>
                    <a href="/contact" className="text-white hover:underline">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
