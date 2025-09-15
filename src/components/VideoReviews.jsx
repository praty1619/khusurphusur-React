import { useState, useRef, useEffect } from "react";

const videos = [
    { src: "/videos/review1.mp4", title: "Student Feedback" },
    { src: "/videos/review2.mp4", title: "Student Feedback" },
    { src: "/videos/review3.mp4", title: "Student Feedback" },
];

function VideoReviews() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);
    const videoRef = useRef(null);

    // when activeVideo changes, reload and play
    useEffect(() => {
        if (lightboxOpen && activeVideo && videoRef.current) {
            videoRef.current.src = activeVideo; // set src
            videoRef.current.load();            // reload
            videoRef.current.play().catch(() => {
                console.warn("Autoplay blocked, user must click play.");
            });
        }
    }, [activeVideo, lightboxOpen]);

    const openLightbox = (src) => {
        setActiveVideo(src);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.removeAttribute("src"); // clear src
            videoRef.current.load();
        }
        setLightboxOpen(false);
        setActiveVideo(null);
    };

    return (
        <section className="video-reviews" id="video">
            <h1>From Our Hearts to Yours</h1>

            <div className="video-grid">
                {videos.map((video, i) => (
                    <div
                        key={i}
                        className="video-card"
                        onClick={() => openLightbox(video.src)}
                    >
                        <div className="video-content">
                            <video src={video.src} muted playsInline preload="metadata" />
                            <span className="play-icon">▶</span>
                        </div>
                        <div className="video-info">
                            <h3>{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <div
                    id="videoLightbox"
                    onClick={(e) => e.target.id === "videoLightbox" && closeLightbox()}
                    style={{ display: "flex" }}
                >
                    <span className="close" onClick={closeLightbox}>
                        &times;
                    </span>
                    <video
                        ref={videoRef}
                        controls
                        controlsList="nodownload"
                        autoPlay
                        muted
                        playsInline
                        style={{ maxWidth: "90%", maxHeight: "80vh" }}
                    />
                </div>
            )}
        </section>
    );
}

export default VideoReviews;
