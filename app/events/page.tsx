"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./events.module.css";

// Event Data with Images
const eventsData = [
    {
        id: 0,
        icon: "🎸",
        title: "Collision",
        date: "Band Performance",
        desc: "Feel the rhythm and energy as bands collide in a spectacular musical showdown.",
        tags: ["Band", "Music", "Live"],
        image: "/event_night.png",
        registrationLink: "#" // Manual Entry
    },
    {
        id: 1,
        icon: "💃",
        title: "The Red Carpet",
        date: "Fashion Show",
        desc: "Strut your style and witness the epitome of glamour and creativity on the ramp.",
        tags: ["Fashion", "Style", "Glamour"],
        image: "/cultural_fest.png",
        registrationLink: "#"
    },
    {
        id: 2,
        icon: "🗣️",
        title: "Wings of Words",
        date: "Recitation",
        desc: "Let your voice take flight with the power of poetry and expression.",
        tags: ["Recitation", "Poetry", "Speech"],
        image: "/cultural_fest.png",
        registrationLink: "#"
    },
    {
        id: 3,
        icon: "⏱️",
        title: "Flash Talk",
        date: "Extempore",
        desc: "Think on your feet! A test of wit, spontaneity, and articulate speech.",
        tags: ["Extempore", "Speaking", "Wit"],
        image: "/hackathon.png",
        registrationLink: "#"
    },
    {
        id: 4,
        icon: "✍️",
        title: "Inkspire",
        date: "Creative Writing",
        desc: "Weave magic with words and let your imagination flow onto the paper.",
        tags: ["Writing", "Creative", "Literature"],
        image: "/event_night.png",
        registrationLink: "#"
    },
    {
        id: 5,
        icon: "🎤",
        title: "Gandhar",
        date: "Solo Singing",
        desc: "A solo singing competition to showcase your melodious voice and musical talent.",
        tags: ["Singing", "Solo", "Music"],
        image: "/event_night.png",
        registrationLink: "#"
    },
    {
        id: 6,
        icon: "🩰",
        title: "Mudra",
        date: "Solo Dance",
        desc: "Express emotions through movement in this captivating solo dance performance.",
        tags: ["Dance", "Solo", "Performance"],
        image: "/cultural_fest.png",
        registrationLink: "#"
    },
    {
        id: 7,
        icon: "🎨",
        title: "Creative Strokes",
        date: "Drawing",
        desc: "Unleash your artistic vision and bring your imagination to life with colors.",
        tags: ["Drawing", "Art", "Creativity"],
        image: "/event_night.png",
        registrationLink: "#"
    },
    {
        id: 8,
        icon: "🎭",
        title: "Prangan",
        date: "Drama",
        desc: "The stage is set! Compete in a dramatic display of acting and storytelling.",
        tags: ["Drama", "Theatre", "Acting"],
        image: "/cultural_fest.png",
        registrationLink: "#"
    },
    {
        id: 9,
        icon: "📷",
        title: "Lenscape",
        date: "Photography",
        desc: "Capture the world through your lens and freeze moments in time.",
        tags: ["Photography", "Visuals", "Camera"],
        image: "/hackathon.png",
        registrationLink: "#"
    },
    {
        id: 10,
        icon: "🖌️",
        title: "Beyond the Canvas",
        date: "Painting Without Paper",
        desc: "Challenge conventional art by painting on surfaces beyond just paper.",
        tags: ["Painting", "Art", "Unconventional"],
        image: "/event_night.png",
        registrationLink: "#"
    },
    {
        id: 11,
        icon: "🏵️",
        title: "Rangreza",
        date: "Rangoli Making",
        desc: "Celebrate tradition with vibrant colors and intricate Rangoli designs.",
        tags: ["Rangoli", "Art", "Tradition"],
        image: "/cultural_fest.png",
        registrationLink: "#"
    },
    {
        id: 12,
        icon: "🎬",
        title: "Mind in Motion",
        date: "Reel Making",
        desc: "Create engaging short-form video content that moves minds and hearts.",
        tags: ["Reels", "Video", "Content"],
        image: "/hackathon.png",
        registrationLink: "#"
    },
    {
        id: 13,
        icon: "🧠",
        title: "Intellectia",
        date: "Quiz",
        desc: "Test your knowledge and intellect in this ultimate battle of brains.",
        tags: ["Quiz", "Knowledge", "Trivia"],
        image: "/hackathon.png",
        registrationLink: "#"
    }
];

export default function EventsPage() {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(Math.floor(eventsData.length / 2));
    const [isPlaying, setIsPlaying] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const eventsCarouselRef = useRef<HTMLDivElement>(null);

    // Simulate Page Loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Start autoplay on mount
    useEffect(() => {
        startAutoplay();
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

    // Handle event card click to show/hide popup
    const handleEventClick = useCallback((eventId: number, index: number) => {
        // If clicking the same event, toggle popup; otherwise show new popup
        if (selectedEventId === eventId) {
            setSelectedEventId(null);
        } else {
            setSelectedEventId(eventId);
            // Also navigate to this slide if not already there
            if (index !== currentIndex) {
                setCurrentIndex(index);
            }
        }
        stopAutoplay();
    }, [selectedEventId, currentIndex]);

    // Scroll to popup when it opens
    useEffect(() => {
        if (selectedEventId !== null && popupRef.current) {
            // Small delay to ensure popup is rendered
            setTimeout(() => {
                popupRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }, [selectedEventId]);

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
        const opacity = 1;

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
                    <h1 className={styles.pageTitle}>Events</h1>
                    <p className={styles.pageSubtitle}>
                        Experience the magic of Euphonious × Zyzzva '26
                    </p>

                    {/* Carousel Container */}
                    <div className={styles.carouselContainer} ref={eventsCarouselRef}>
                        <div className={styles.carousel}>
                            {eventsData.map((event, index) => {
                                const cardStyle = getCardTransform(index);
                                return (
                                    <div
                                        key={event.id}
                                        className={styles.eventCard}
                                        style={cardStyle}
                                        onClick={() => handleEventClick(event.id, index)}
                                    >
                                        <div className={styles.eventCardInner}>
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className={styles.eventPoster}
                                            />
                                            <div className={styles.eventContent}>
                                                <h3 className={styles.eventTitle}>{event.title}</h3>
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

                    {/* Event Description Popup */}
                    {selectedEventId !== null && (
                        <div className={styles.popupContainer} ref={popupRef}>
                            {(() => {
                                const selectedEvent = eventsData.find(e => e.id === selectedEventId);
                                if (!selectedEvent) return null;
                                return (
                                    <div className={styles.popupContent}>
                                        <button
                                            className={styles.closeBtn}
                                            onClick={() => {
                                                // Scroll back to events carousel
                                                if (eventsCarouselRef.current) {
                                                    eventsCarouselRef.current.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start'
                                                    });
                                                }
                                                // Small delay before closing to allow scroll to start
                                                setTimeout(() => {
                                                    setSelectedEventId(null);
                                                    startAutoplay();
                                                }, 100);
                                            }}
                                            aria-label="Close description"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 6L6 18M6 6l12 12" />
                                            </svg>
                                        </button>
                                        <div className={styles.popupHeader}>
                                            <span className={styles.popupIcon}>{selectedEvent.icon}</span>
                                            <h2 className={styles.popupTitle}>{selectedEvent.title}</h2>
                                            <p className={styles.popupDate}>{selectedEvent.date}</p>
                                        </div>
                                        <div className={styles.popupBody}>
                                            <p className={styles.popupDescription}>{selectedEvent.desc}</p>
                                            <div className={styles.popupTags}>
                                                {selectedEvent.tags.map((tag, tagIndex) => (
                                                    <span key={tagIndex} className={styles.popupTag}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* REGISTER BUTTON */}
                                            <a
                                                href={selectedEvent.registrationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.registerBtn}
                                            >
                                                Register
                                            </a>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}