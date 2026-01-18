"use client";

import React, { useState, useEffect } from "react";
import styles from "./events.module.css";
// import Navbar from "@/components/Navbar"; 

export default function EventsPage() {
    const [loading, setLoading] = useState(true);

    // Simulate Page Loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Event Data
    const eventsData = [
        {
            icon: "🎵",
            title: "Music Concert",
            date: "Day 1 • 6:00 PM",
            desc: "Live performances by renowned artists and bands. Get ready for an electrifying night of music!",
            tags: ["Live Music", "Concert"],
        },
        {
            icon: "💻",
            title: "Hackathon",
            date: "Day 1-2 • 9:00 AM",
            desc: "48-hour coding challenge. Build innovative solutions and compete for amazing prizes!",
            tags: ["Coding", "Competition"],
        },
        {
            icon: "🎭",
            title: "Drama & Theatre",
            date: "Day 2 • 4:00 PM",
            desc: "Witness captivating performances and theatrical excellence from talented groups.",
            tags: ["Theatre", "Performance"],
        },
        {
            icon: "🎨",
            title: "Art Exhibition",
            date: "Day 1-3 • All Day",
            desc: "Explore stunning artworks and creative expressions from talented artists.",
            tags: ["Art", "Exhibition"],
        },
        {
            icon: "🎤",
            title: "Karaoke Night",
            date: "Day 2 • 8:00 PM",
            desc: "Sing your heart out! Join us for an unforgettable karaoke experience.",
            tags: ["Entertainment", "Fun"],
        },
        {
            icon: "🏆",
            title: "Gaming Tournament",
            date: "Day 2 • 10:00 AM",
            desc: "Compete in exciting gaming tournaments. Show your skills and win prizes!",
            tags: ["Gaming", "Tournament"],
        },
        {
            icon: "📚",
            title: "Workshop Series",
            date: "Day 1-3 • Multiple Sessions",
            desc: "Learn from industry experts. Hands-on workshops on various topics.",
            tags: ["Learning", "Workshop"],
        },
        {
            icon: "🎪",
            title: "Cultural Night",
            date: "Day 3 • 7:00 PM",
            desc: "A grand celebration of culture, dance, and traditions. Don't miss this spectacular finale!",
            tags: ["Culture", "Celebration"],
        },
    ];

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

            {/* NAVBAR */}
            {/* <Navbar /> */}

            <div className={styles.pageWrapper}>
                <div className={styles.eventsContainer}>
                    <h1 className={styles.pageTitle}>Festival Events</h1>
                    <p className={styles.pageSubtitle}>
                        Experience the magic of Euphonious × Zyzzva '26
                    </p>

                    <div className={styles.eventsGrid}>
                        {eventsData.map((event, index) => (
                            <div key={index} className={styles.eventCard}>
                                <div className={styles.eventIcon}>{event.icon}</div>
                                <h3>{event.title}</h3>
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
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}