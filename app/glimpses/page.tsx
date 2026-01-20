"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./glimpses.module.css";

/**
 * Image data structure
 */
const imageData = [
    { id: 0, src: "/event_night.png", title: "Event Night", description: "Memorable moments from our events" },
    { id: 1, src: "/hackathon.png", title: "Hackathon", description: "Innovation and coding challenges" },
    { id: 2, src: "/cultural_fest.png", title: "Cultural Fest", description: "Celebrating diverse cultures" },
    { id: 3, src: "/event_night.png", title: "Workshop", description: "Learning and skill development" },
    { id: 4, src: "/hackathon.png", title: "Tech Talk", description: "Knowledge sharing sessions" },
    { id: 5, src: "/cultural_fest.png", title: "Performances", description: "Music, dance, and drama" },
    { id: 6, src: "/event_night.png", title: "Competitions", description: "Showcasing talent and creativity" },
    { id: 7, src: "/hackathon.png", title: "Guest Artists", description: "Celebrity performances" },
    { id: 8, src: "/cultural_fest.png", title: "Food Fest", description: "Culinary delights and treats" },
    { id: 9, src: "/event_night.png", title: "Art Exhibition", description: "Creative masterpieces on display" },
    { id: 10, src: "/hackathon.png", title: "Closing Ceremony", description: "Grand finale celebration" }
];

export default function GlimpsesPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
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

    // Gallery navigation handlers
    const handlePrev = useCallback(() => {
        setActiveImage((prev) => Math.max(0, prev - 1));
    }, []);

    const handleNext = useCallback(() => {
        setActiveImage((prev) => Math.min(imageData.length - 1, prev + 1));
    }, []);

    const handleThumbnailClick = useCallback((index: number) => {
        setActiveImage(index);
    }, []);

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

            {galleryOpen && (
                <div
                    className={styles.galleryOverlay}
                    onClick={() => setGalleryOpen(false)}
                >
                    <div className={styles.popupWrapper} onClick={(e) => e.stopPropagation()}>

                        <div className={styles.popupHeader}>
                            <h2 className={styles.galleryTitle}>All Glimpses</h2>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setGalleryOpen(false)}
                                aria-label="Close gallery"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div
                            className={styles.galleryContainer}
                        >
                            <div className={styles.sliderGallery}>
                                {/* Large Images */}
                                <div className={styles.bigImages}>
                                    {imageData.map((image, index) => (
                                        <div
                                            key={image.id}
                                            className={styles.bigImage}
                                            data-active={index === activeImage ? 'true' : undefined}
                                        >
                                            <img src={image.src} alt={image.title} />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Section: Thumbnails + Content */}
                                <div className={styles.galleryBottom}>
                                    {/* Thumbnails */}
                                    <div className={styles.thumbnails}>
                                        {imageData.map((image, index) => (
                                            <div
                                                key={image.id}
                                                className={styles.thumbnail}
                                                data-active={index === activeImage ? 'true' : undefined}
                                                onClick={() => handleThumbnailClick(index)}
                                            >
                                                <img src={image.src} alt={image.title} />
                                                <div className={styles.cuticle}></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Content Panel */}
                                    <div className={styles.contentPanel}>
                                        {/* Nav Buttons */}
                                        <nav className={styles.navButtons}>
                                            <button
                                                onClick={handlePrev}
                                                disabled={activeImage === 0}
                                                title="Previous"
                                            >
                                                &lt;
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                disabled={activeImage === imageData.length - 1}
                                                title="Next"
                                            >
                                                &gt;
                                            </button>
                                        </nav>

                                        {/* Articles */}
                                        <div className={styles.articles}>
                                            {imageData.map((image, index) => (
                                                <article
                                                    key={image.id}
                                                    className={styles.article}
                                                    data-active={index === activeImage ? 'true' : undefined}
                                                >
                                                    <h2>{image.title}</h2>
                                                    <p>{image.description}</p>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}