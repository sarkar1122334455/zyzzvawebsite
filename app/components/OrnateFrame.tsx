"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../glimpses/glimpses.module.css";

interface OrnateFrameProps {
    imageSrc: string;
    title: string;
    category: string;
    index: number;
}

export default function OrnateFrame({ imageSrc, title, category, index }: OrnateFrameProps) {
    // Random floating parameters for organic movement
    const floatY = Math.random() * 6 + 8; // 8-14px
    const duration = Math.random() * 2 + 4; // 4-6 seconds
    const delay = index * 0.1;

    return (
        <motion.div
            className={styles.ornateFrameWrapper}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1,
                y: [0, -floatY, 0],
            }}
            transition={{
                opacity: { duration: 0.6, delay },
                y: {
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                },
            }}
            whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
            }}
        >
            <div className={styles.ornateFrame}>
                {/* Golden Frame Border */}
                <div className={styles.frameBorder}>
                    <div className={styles.frameCornerTL}></div>
                    <div className={styles.frameCornerTR}></div>
                    <div className={styles.frameCornerBL}></div>
                    <div className={styles.frameCornerBR}></div>
                </div>

                {/* Image Container */}
                <div className={styles.imageContainer}>
                    <motion.img
                        src={imageSrc}
                        alt={title}
                        className={styles.frameImage}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                {/* Museum Placard */}
                <div className={styles.placard}>
                    <div className={styles.placardContent}>
                        <h3 className={styles.placardTitle}>{title}</h3>
                        <p className={styles.placardCategory}>{category}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
