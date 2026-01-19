"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./events.module.css";

// Event Data with Images
const eventsData = [
    {
        id: 0,
        icon: "🎵",
        title: "Music Concert",
        date: "Day 1 • 6:00 PM",
        desc: "Live performances by renowned artists and bands. Get ready for an electrifying night of music!",
        tags: ["Live Music", "Concert"],
        image: "/event_night.png"
    },
    {
        id: 1,
        icon: "💻",
        title: "Hackathon",
        date: "Day 1-2 • 9:00 AM",
        desc: "48-hour coding challenge. Build innovative solutions and compete for amazing prizes!",
        tags: ["Coding", "Competition"],
        image: "/hackathon.png"
    },
    {
        id: 2,
        icon: "🎭",
        title: "Drama & Theatre",
        date: "Day 2 • 4:00 PM",
        desc: "Witness captivating performances and theatrical excellence from talented groups.",
        tags: ["Theatre", "Performance"],
        image: "/cultural_fest.png"
    },
    {
        id: 3,
        icon: "🎨",
        title: "Art Exhibition",
        date: "Day 1-3 • All Day",
        desc: "Explore stunning artworks and creative expressions from talented artists.",
        tags: ["Art", "Exhibition"],
        image: "/event_night.png"
    },
    {
        id: 4,
        icon: "🎤",
        title: "Karaoke Night",
        date: "Day 2 • 8:00 PM",
        desc: "Sing your heart out! Join us for an unforgettable karaoke experience.",
        tags: ["Entertainment", "Fun"],
        image: "/cultural_fest.png"
    },
    {
        id: 5,
        icon: "🏆",
        title: "Gaming Tournament",
        date: "Day 2 • 10:00 AM",
        desc: "Compete in exciting gaming tournaments. Show your skills and win prizes!",
        tags: ["Gaming", "Tournament"],
        image: "/hackathon.png"
    },
    {
        id: 6,
        icon: "📚",
        title: "Workshop Series",
        date: "Day 1-3 • Multiple Sessions",
        desc: "Learn from industry experts. Hands-on workshops on various topics.",
        tags: ["Learning", "Workshop"],
        image: "/event_night.png"
    },
    {
        id: 7,
        icon: "🎪",
        title: "Cultural Night",
        date: "Day 3 • 7:00 PM",
        desc: "A grand celebration of culture, dance, and traditions. Don't miss this spectacular finale!",
        tags: ["Culture", "Celebration"],
        image: "/cultural_fest.png"
    }
];

export default function EventsPage() {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(Math.floor(eventsData.length / 2));
    const [isPlaying, setIsPlaying] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    // Simulate Page Loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Navigation Functions
    const prev = useCallback(() => {
        setCurrentIndex((current) => (current - 1 + eventsData.length) % eventsData.length);
        stopAutoplay();
    }, []);

    const next = useCallback(() => {
        setCurrentIndex((current) => (current + 1) % eventsData.length);
        stopAutoplay();
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
        stopAutoplay();
    }, []);

    // Autoplay Functions
    const startAutoplay = useCallback(() => {
        setIsPlaying(true);
        if (autoplayRef.current) clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % eventsData.length);
        }, 3000);
    }, []);

    const stopAutoplay = useCallback(() => {
        setIsPlaying(false);
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const toggleAutoplay = useCallback(() => {
        if (isPlaying) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    }, [isPlaying, startAutoplay, stopAutoplay]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                    prev();
                    break;
                case "ArrowRight":
                    next();
                    break;
                case " ":
                    e.preventDefault();
                    toggleAutoplay();
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [prev, next, toggleAutoplay]);

    // Touch Events
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.changedTouches[0].screenX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        setTouchEndX(e.changedTouches[0].screenX);
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                prev();
            } else {
                next();
            }
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, []);

    // Calculate transform for each card
    const getCardTransform = (index: number) => {
        const offset = index - currentIndex;
        const cardWidth = 400;
        const centerOffset = 0;

        const translateX = centerOffset + offset * 180;
        const translateZ = Math.abs(offset) * -100;
        const rotateY = offset * -15;
        const scale = Math.max(0.8, 1 - Math.abs(offset) * 0.2);
        const opacity = Math.max(0.5, 1 - Math.abs(offset) * 0.3);

        return {
            transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            opacity: opacity,
            zIndex: 100 - Math.abs(offset)
        };
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

            <div className={styles.pageWrapper} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div className={styles.eventsContainer}>
                    <h1 className={styles.pageTitle}>Festival Events</h1>
                    <p className={styles.pageSubtitle}>
                        Experience the magic of Euphonious × Zyzzva '26
                    </p>

                    {/* Carousel Container */}
                    <div className={styles.carouselContainer}>
                        <div className={styles.carousel}>
                            {eventsData.map((event, index) => {
                                const cardStyle = getCardTransform(index);
                                return (
                                    <div
                                        key={event.id}
                                        className={styles.eventCard}
                                        style={cardStyle}
                                        onClick={() => goToSlide(index)}
                                    >
                                        <div className={styles.eventCardInner}>
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className={styles.eventPoster}
                                            />
                                            <div className={styles.eventContent}>
                                                <div className={styles.eventIcon}>{event.icon}</div>
                                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                                <p className={styles.eventDate}>{event.date}</p>
                                                <p className={styles.eventDescription}>{event.desc}</p>
                                                <div className={styles.eventTags}>
                                                    {event.tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex} className={styles.tag}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className={styles.controls}>
                        <button className={styles.controlBtn} onClick={prev} aria-label="Previous event">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <button className={styles.controlBtn} onClick={toggleAutoplay} aria-label="Play/Pause autoplay">
                            {isPlaying ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 3l14 9-14 9V3z" />
                                </svg>
                            )}
                        </button>

                        <button className={styles.controlBtn} onClick={next} aria-label="Next event">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Dots */}
                    <div className={styles.navigation}>
                        {eventsData.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}