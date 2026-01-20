"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./glimpses.module.css";

/**
 * Image data structure
 */
const imageData = [
    { id: 0, src: "/event_night.png", title: "Event Night" },
    { id: 1, src: "/hackathon.png", title: "Hackathon" },
    { id: 2, src: "/cultural_fest.png", title: "Cultural Fest" },
    { id: 3, src: "/event_night.png", title: "Workshop" },
    { id: 4, src: "/hackathon.png", title: "Tech Talk" }
];

export default function GlimpsesPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [galleryOpen, setGalleryOpen] = useState(false);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const totalImages = imageData.length;

    // Calculate positions
    const getPrevIndex = useCallback(() => {
        return (currentIndex - 1 + totalImages) % totalImages;
    }, [currentIndex, totalImages]);

    const getNextIndex = useCallback(() => {
        return (currentIndex + 1) % totalImages;
    }, [currentIndex, totalImages]);

    // Go to specific slide
    const goToSlide = useCallback((index: number) => {
        if (index === currentIndex) return;
        setCurrentIndex(index);
    }, [currentIndex]);

    // Auto-play functionality
    const startAutoPlay = useCallback(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalImages);
        }, 4000);
    }, [totalImages]);

    const stopAutoPlay = useCallback(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    }, []);

    // Initialize auto-play
    useEffect(() => {
        startAutoPlay();
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [startAutoPlay]);

    // Mouse move effect
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePos({ x, y });
    }, []);

    // Get class name for each image
    const getImageClass = (index: number) => {
        if (index === currentIndex) return styles.center;
        if (index === getPrevIndex()) return styles.left;
        if (index === getNextIndex()) return styles.right;
        return styles.hidden;
    };

    return (
        <div
            className={styles.carouselContainer}
            onMouseMove={handleMouseMove}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
        >
            <div className={styles.reflectionFloor}></div>

            <h1 className={styles.pageTitle}>Glimpses</h1>
            <p className={styles.pageSubtitle}>A sneak peek into our journey</p>

            <div className={styles.carouselWrapper}>
                {imageData.map((image, index) => (
                    <div
                        key={image.id}
                        className={`${styles.imageContainer} ${getImageClass(index)}`}
                        data-index={index}
                    >
                        <img src={image.src} alt={image.title} />
                        <div className={styles.imageTitle}>{image.title}</div>
                    </div>
                ))}
            </div>

            <div className={styles.reflectionFloor}></div>

            <div className={styles.navigation}>
                {imageData.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                        onClick={() => goToSlide(index)}
                        data-slide={index}
                    />
                ))}
            </div>

            {/* View More Button */}
            <button
                className={styles.viewMoreBtn}
                onClick={() => setGalleryOpen(true)}
            >
                View All Glimpses
            </button>

            {/* Gallery Modal */}
            {galleryOpen && (
                <div
                    className={styles.galleryOverlay}
                    onClick={() => setGalleryOpen(false)}
                >
                    <div
                        className={styles.galleryContainer}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeBtn}
                            onClick={() => setGalleryOpen(false)}
                            aria-label="Close gallery"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className={styles.galleryTitle}>All Glimpses</h2>

                        <div className={styles.galleryGrid}>
                            {imageData.map((image) => (
                                <div key={image.id} className={styles.galleryItem}>
                                    <img src={image.src} alt={image.title} />
                                    <div className={styles.galleryItemTitle}>{image.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}