function Footer() {
    return (
        <footer className="footer-section" id="footer-section">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-about">
                    <h2>Get in Touch</h2>
                    <p>
                        For collaboration, participation in workshop & personal training kindly
                        contact on :-
                    </p>
                </div>

                {/* Social Links */}
                <div className="footer-socials">
                    <a
                        href="https://www.instagram.com/khusurphusurofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shantam-pandit-457752229/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a
                        href="mailto:khusurphusur2024@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <p>
                        <i className="fas fa-phone"></i> +91 7735231158
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> Mumbai, India
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>&copy; 2025 Shantam Pandit. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
