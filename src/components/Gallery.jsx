import React, { useState } from "react";

const images = [
    "image1.webp", "image2.webp", "image3.webp", "image4.webp",
    "image5.webp", "image6.webp", "image7.webp", "image8.webp",
    "image9.webp", "image10.webp", "image11.webp", "image12.webp",
    "image13.webp", "image14.webp", "image15.webp", "image16.webp",
    "image17.webp", "image18.webp", "image19.webp", "image20.webp",
    "image21.webp", "image22.webp"
];

const Gallery = () => {
    const [showFullGallery, setShowFullGallery] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImg, setLightboxImg] = useState("");

    const openLightbox = (img) => {
        setLightboxImg(img);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const openFullGallery = () => {
        setShowFullGallery(true);
        document.body.style.overflow = "hidden";
    };

    const closeFullGallery = () => {
        setShowFullGallery(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="masonary-grid">
            <h1>खुसुर - फुसुर Gallery</h1>

            {/* Highlight Grid */}
            <div className="grid" id="highlight-grid">
                {images.slice(0, 3).map((img, i) => (
                    <div className="grid-item" key={i}>
                        <img
                            src={`/khusur phusur image/${img}`}
                            alt={`Image ${i + 1}`}
                            onClick={() => openLightbox(`/khusur phusur image/${img}`)}
                        />
                    </div>
                ))}
            </div>

            <button id="show-more-btn" onClick={openFullGallery}>+ Show More</button>

            {/* Full Gallery Modal */}
            {showFullGallery && (
                <div className="gallery-modal">
                    <span className="close" onClick={closeFullGallery}>&times;</span>
                    <div className="full-grid">
                        {images.map((img, i) => (
                            <div className="grid-item" key={i}>
                                <img
                                    src={`/khusur phusur image/${img}`}
                                    alt={`Image ${i + 1}`}
                                    onClick={() => openLightbox(`/khusur phusur image/${img}`)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Lightbox */}
            {lightboxOpen && (
                <div id="lightbox" onClick={(e) => e.target === e.currentTarget && closeLightbox()}>
                    <span className="close" onClick={closeLightbox}>&times;</span>
                    <img className="lightbox-content" src={lightboxImg} alt="Lightbox" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
