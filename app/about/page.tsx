"use client";

import React, { useState, useEffect } from "react";
import styles from "./about.module.css";
// import Navbar from "@/components/Navbar"; // Uncomment if using a shared Navbar component

export default function AboutPage() {
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    // --- 1. DEFINE YOUR MEDIA HERE ---
    // Ensure these files exist in your public folder (e.g., public/slider1.jpg)
    const mediaData = [
        { type: "image", src: "/slider1.jpg" }, // Replace with actual filenames
        { type: "video", src: "/laptop2.mp4" },
        { type: "image", src: "/slider2.jpg" },
    ];

    // Loading Simulation
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Slider Logic
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % mediaData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + mediaData.length) % mediaData.length);
    };

    // Render the current media item
    const renderMedia = () => {
        const item = mediaData[currentSlide];

        // Safety check if data is empty
        if (!item) return null;

        if (item.type === "video") {
            return (
                <video
                    key={item.src} // Key forces re-render/animation when slide changes
                    className={styles.mediaItem}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={item.src} type="video/mp4" />
                </video>
            );
        } else {
            return (
                <img
                    key={item.src}
                    src={item.src}
                    className={styles.mediaItem}
                    alt="About slider"
                />
            );
        }
    };

    return (
        <>
            {/* LOADER */}
            {loading && (
                <div id="loader">
                    <img src="/logo.png" className="logo-img" alt="Logo" />
                    <div className="loading-text">
                        Loading<span className="dots"></span>
                    </div>
                </div>
            )}

            {/* NAVBAR: Include your component here if not in layout.tsx */}
            {/* <Navbar /> */}

            <div className={styles.pageWrapper}>
                <div className={styles.aboutContainer}>
                    <div className={styles.contentWrapper}>

                        {/* SLIDER SECTION */}
                        <div className={styles.sliderBox}>
                            <div className={styles.mediaContainer}>
                                {renderMedia()}
                            </div>

                            <button
                                className={`${styles.arrow} ${styles.arrowLeft}`}
                                onClick={prevSlide}
                                aria-label="Previous slide"
                            >
                                ‹
                            </button>

                            <button
                                className={`${styles.arrow} ${styles.arrowRight}`}
                                onClick={nextSlide}
                                aria-label="Next slide"
                            >
                                ›
                            </button>

                            <div className={styles.sliderOverlay}></div>
                        </div>

                        {/* TEXT SECTION */}
                        <div className={styles.storySide}>
                            <h1 className={styles.title}>Euphonious × Zyzzva '26</h1>
                            <div className={styles.storyBox}>
                                <h2>Our Story</h2>
                                <p>
                                    Since its inception in 2004, EUPHONIOUSXZYZZVA has been more
                                    than just a cultural fest—it's a celebration of creativity,
                                    talent, and youthful energy. Hosted at GNIT Kolkata, this
                                    iconic event brings together students, artists, and performers
                                    from all walks of life.
                                </p>
                                <p className={styles.storyExtra}>
                                    Join us for an unforgettable experience filled with music,
                                    dance, competitions, and memories that last a lifetime.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}