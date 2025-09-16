function FabNavbar({ setPage }) {
    const menuItems = [
        { label: "Home", page: "home" },
        { label: "About", page: "about" },
        { label: "Details", page: "details" },
        { label: "Gallery", page: "gallery" },
        { label: "Video Reviews", page: "video" },
        { label: "Contact", page: "contact" },
    ];

    return (
        <nav className="fab-navbar">
            {menuItems.map((item, index) => (
                <button
                    key={index}
                    onClick={() => setPage(item.page)}
                    className="fab-item"
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
}
 export default FabNavbar