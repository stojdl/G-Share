const Footer = () => {
    return (
        <footer className="w-full bg-black text-[#f0f0f0] py-4 text-center">
            <div className="max-w-screen-xl mx-auto px-4">
                <p className="mb-2">
                    © {new Date().getFullYear()} Game Share. All rights
                    reserved.
                </p>
                <nav className="flex justify-center space-x-4">
                    <a href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="/terms-of-service" className="hover:underline">
                        Terms of Service
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
