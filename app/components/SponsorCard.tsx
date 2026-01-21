"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../sponsor/sponsor.module.css";

interface SponsorCardProps {
    name: string;
    tier: string;
    logoUrl?: string;
    description?: string;
    delay?: number;
}

export default function SponsorCard({ name, tier, logoUrl, description, delay = 0 }: SponsorCardProps) {
    // Generate random float parameters for organic movement
    const floatY = Math.random() * 10 + 10; // Random between 10-20px
    const duration = Math.random() * 2 + 3; // Random between 3-5 seconds

    return (
        <motion.div
            className={styles.floatingCard}
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
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
            }}
        >
            <div className={styles.cardGlassEffect}>
                <div className={styles.cardContent}>
                    {logoUrl ? (
                        <div className={styles.logoContainer}>
                            <img src={logoUrl} alt={name} className={styles.sponsorLogoImg} />
                        </div>
                    ) : (
                        <div className={styles.logoPlaceholder}>
                            <span className={styles.sponsorName}>{name}</span>
                        </div>
                    )}
                    {description && <p className={styles.sponsorDesc}>{description}</p>}
                    <div className={styles.tierBadge}>{tier}</div>
                </div>
                <div className={styles.cardGlow}></div>
            </div>
        </motion.div>
    );
}
