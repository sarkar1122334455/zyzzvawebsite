"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OrnateFrame from "../components/OrnateFrame";
import styles from "./glimpses.module.css";

// Gallery data with categories
const galleryImages = [
    { id: 1, src: "/event_night.png", title: "Pro Nite Magic", category: "Pro Nites" },
    { id: 2, src: "/hackathon.png", title: "Dance Fusion", category: "Natyanjali" },
    { id: 3, src: "/cultural_fest.png", title: "Fashion Extravaganza", category: "FashP" },
    { id: 4, src: "/event_night.png", title: "Battle of Bands", category: "Sea Rock" },
    { id: 5, src: "/hackathon.png", title: "Carnival Games", category: "Informals" },
    { id: 6, src: "/cultural_fest.png", title: "Electric Nights", category: "Pro Nites" },
    { id: 7, src: "/event_night.png", title: "Classical Elegance", category: "Natyanjali" },
    { id: 8, src: "/hackathon.png", title: "Runway Dreams", category: "FashP" },
    { id: 9, src: "/cultural_fest.png", title: "Rock Revolution", category: "Sea Rock" },
];

export default function GalleryPage() {
    const [loading, setLoading] = useState(true);
    const { scrollYProgress } = useScroll();

    // Parallax transforms for different columns
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -75]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Split images into columns for parallax
    const column1 = galleryImages.filter((_, i) => i % 3 === 0);
    const column2 = galleryImages.filter((_, i) => i % 3 === 1);
    const column3 = galleryImages.filter((_, i) => i % 3 === 2);

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

            <div className={styles.galleryPageWrapper}>
                {/* Hero Section */}
                <div className={styles.galleryHero}>
                    <motion.h1
                        className={styles.galleryMainTitle}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.carnivalText}>GALLERY</span>
                    </motion.h1>
                    <motion.p
                        className={styles.gallerySubtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Masquerade of Memories
                    </motion.p>
                </div>

                {/* Masonry Grid with Parallax */}
                <div className={styles.masonryContainer}>
                    {/* Column 1 */}
                    <motion.div className={styles.masonryColumn} style={{ y: y1 }}>
                        {column1.map((image, index) => (
                            <OrnateFrame
                                key={image.id}
                                imageSrc={image.src}
                                title={image.title}
                                category={image.category}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div className={styles.masonryColumn} style={{ y: y2 }}>
                        {column2.map((image, index) => (
                            <OrnateFrame
                                key={image.id}
                                imageSrc={image.src}
                                title={image.title}
                                category={image.category}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div className={styles.masonryColumn} style={{ y: y3 }}>
                        {column3.map((image, index) => (
                            <OrnateFrame
                                key={image.id}
                                imageSrc={image.src}
                                title={image.title}
                                category={image.category}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Floating Particles */}
                <div className={styles.floatingParticles}>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                </div>
            </div>
        </>
    );
}