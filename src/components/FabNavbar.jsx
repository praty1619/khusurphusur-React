import { useState } from "react";

function FabNavbar() {
    const [active, setActive] = useState(null);

    // Map each menu item to your existing sections
    const menuItems = [
        { icon: "fa-home", label: "Home", link: "#container" }, // Hero
        { icon: "fa-user", label: "About", link: "#personal-section" }, // PersonalSection
        { icon: "fa-info-circle", label: "Details", link: "#details-section" }, // DetailsSection
        { icon: "fa-images", label: "Gallery", link: "#gallery" }, // Gallery
        { icon: "fa-video", label: "Video Reviews", link: "#video" }, // VideoReviews
        { icon: "fa-envelope", label: "Contact Us", link: "#footer-section" }, // Footer
    ];

    return (
        <nav className="fab-navbar">
            {menuItems.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className={`fab-item ${active === index ? "active" : ""}`}
                    onClick={() => setActive(index)}
                >
                    <i className={`fas ${item.icon}`}></i>
                    <span className="fab-label">{item.label}</span>
                </a>
            ))}
        </nav>
    );
}

export default FabNavbar;
