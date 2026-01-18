"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./glimpses.module.css";
// If you have a separate Navbar component, import it here:
// import Navbar from "@/components/Navbar"; 

const data = [
    { title: "Event Night", text: "Memorable night with lights & energy" },
    { title: "Hackathon", text: "Innovation meets collaboration" },
    { title: "Workshop", text: "Hands-on learning experience" },
    { title: "Cultural Fest", text: "Music, dance and celebration" },
    { title: "Guest Talk", text: "Insights from industry leaders" },
];

export default function GlimpsesPage() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(0);

    // --- Logic to Calculate Classes ---
    const getCardClass = (index: number) => {
        const total = data.length;
        const diff = (index - current + total) % total;

        if (diff === 0) return styles.center;
        if (diff === 1) return styles.right;
        if (diff === total - 1) return styles.left;

        // For a 5-item list, diff 2 is hidden right, diff 3 (or total-2) is hidden left
        // If we had more items, we might want a generic 'hidden' for those in back, 
        // but distinguishing left/right hidden sides helps animation direction.
        if (diff === 2) return styles.hiddenRight;
        if (diff === total - 2) return styles.hiddenLeft;

        // Fallback or generic hidden for larger sets
        return diff < total / 2 ? styles.hiddenRight : styles.hiddenLeft;
    };

    const next = () => {
        setCurrent((prev) => (prev + 1) % data.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + data.length) % data.length);
    };

    // --- Swipe Handling ---
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (dx > 60) prev();
        if (dx < -60) next();
    };

    // --- Keyboard Handling (Optional but good for UX) ---
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className={styles.pageWrapper}>

            {/* If you have a <Navbar /> component from the previous prompt, 
        you should render it here to keep the navigation consistent.
        <Navbar />
      */}

            <div
                className={styles.glimpseWrapper}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={prev}
                    aria-label="Previous Glimpse"
                >
                    ‹
                </button>

                <button
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={next}
                    aria-label="Next Glimpse"
                >
                    ›
                </button>

                <div className={styles.cardContainer} id="container">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${getCardClass(index)}`}
                        >
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}