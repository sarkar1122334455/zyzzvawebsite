"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./team.module.css";

// Team Members Data
const teamMembers = [
    {
        id: 1,
        name: "Arpit Das",
        role: "Core Team",
        image: "/event_night.png",
        description: "Leading the team with passion and dedication"
    },
    {
        id: 2,
        name: "Team Member 2",
        role: "Core Team",
        image: "/hackathon.png",
        description: "Innovating and executing events flawlessly"
    },
    {
        id: 3,
        name: "Team Member 3",
        role: "Technical Team",
        image: "/cultural_fest.png",
        description: "Managing technical infrastructure and development"
    },
    {
        id: 4,
        name: "Team Member 4",
        role: "Creative Team",
        image: "/event_night.png",
        description: "Bringing creative visions to life"
    },
    {
        id: 5,
        name: "Team Member 5",
        role: "Operations Team",
        image: "/hackathon.png",
        description: "Ensuring smooth operations and logistics"
    },
    {
        id: 6,
        name: "Team Member 6",
        role: "Marketing Team",
        image: "/cultural_fest.png",
        description: "Promoting and spreading the word"
    },
    {
        id: 7,
        name: "Team Member 7",
        role: "Design Team",
        image: "/event_night.png",
        description: "Crafting stunning visual experiences"
    },
    {
        id: 8,
        name: "Team Member 8",
        role: "Content Team",
        image: "/hackathon.png",
        description: "Creating engaging content and stories"
    },
    {
        id: 9,
        name: "Team Member 9",
        role: "Sponsorship Team",
        image: "/cultural_fest.png",
        description: "Building partnerships and collaborations"
    },
];

export default function TeamPage() {
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

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

            <div className={styles.teamPageWrapper}>
                {/* Hero Section */}
                <div className={styles.teamHero}>
                    <motion.div
                        className={styles.teamTitleContainer}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/team.png" alt="Our Team" className={styles.teamTitleImage} />
                    </motion.div>
                    <motion.p
                        className={styles.teamSubtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Meet the Dream Team Behind the Magic
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className={styles.teamCard}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className={styles.cardImage}>
                                <img src={member.image} alt={member.name} />
                                <div className={styles.cardOverlay}>
                                    <span className={styles.viewMore}>View Profile</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Member Popup */}
                {selectedMember && (
                    <div
                        className={styles.popupOverlay}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className={styles.popupContent}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeButton}
                                onClick={() => setSelectedMember(null)}
                            >
                                ×
                            </button>
                            <div className={styles.popupImageContainer}>
                                <img src={selectedMember.image} alt={selectedMember.name} />
                            </div>
                            <div className={styles.popupInfo}>
                                <h2>{selectedMember.name}</h2>
                                <p className={styles.popupRole}>{selectedMember.role}</p>
                                <p className={styles.popupDescription}>{selectedMember.description}</p>
                            </div>
                        </motion.div>
                    </div>
                )}

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