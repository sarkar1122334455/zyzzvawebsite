"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./team.module.css";

// Team structure with members
const teamsData = [
    {
        id: 0,
        name: "Marketing",
        icon: "📢",
        gradient: "linear-gradient(135deg, #0cf0b4, #08a67d)",
        members: [
            { id: 0, name: "Alex Chen", role: "Marketing Lead", image: "/event_night.png" },
            { id: 1, name: "Sarah Kim", role: "Social Media Manager", image: "/hackathon.png" },
            { id: 2, name: "Mike Johnson", role: "Content Strategist", image: "/cultural_fest.png" },
            { id: 3, name: "Emma Davis", role: "Brand Manager", image: "/event_night.png" }
        ]
    },
    {
        id: 1,
        name: "Designing",
        icon: "🎨",
        gradient: "linear-gradient(135deg, #0cf0b4, #06d9a0)",
        members: [
            { id: 0, name: "David Lee", role: "Design Lead", image: "/hackathon.png" },
            { id: 1, name: "Lisa Wang", role: "UI/UX Designer", image: "/cultural_fest.png" },
            { id: 2, name: "Chris Brown", role: "Graphic Designer", image: "/event_night.png" },
            { id: 3, name: "Nina Patel", role: "Motion Designer", image: "/hackathon.png" }
        ]
    },
    {
        id: 2,
        name: "Media",
        icon: "📸",
        gradient: "linear-gradient(135deg, #0cf0b4, #04c9a3)",
        members: [
            { id: 0, name: "Ryan Taylor", role: "Media Lead", image: "/cultural_fest.png" },
            { id: 1, name: "Jessica Liu", role: "Photographer", image: "/event_night.png" },
            { id: 2, name: "Tom Wilson", role: "Videographer", image: "/hackathon.png" },
            { id: 3, name: "Sophia Martinez", role: "Social Media", image: "/cultural_fest.png" }
        ]
    },
    {
        id: 3,
        name: "Core",
        icon: "⚙️",
        gradient: "linear-gradient(135deg, #0cf0b4, #02b894)",
        members: [
            { id: 0, name: "James Anderson", role: "Core Lead", image: "/event_night.png" },
            { id: 1, name: "Olivia Garcia", role: "Technical Lead", image: "/hackathon.png" },
            { id: 2, name: "Daniel Moore", role: "Operations Head", image: "/cultural_fest.png" },
            { id: 3, name: "Ava Thompson", role: "Strategy Lead", image: "/event_night.png" }
        ]
    }
];

export default function TeamPage() {
    const [viewMode, setViewMode] = useState<"teams" | "members">("teams");
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const currentData = viewMode === "teams" ? teamsData : (selectedTeam !== null ? teamsData[selectedTeam].members : []);
    const totalItems = currentData.length;

    // Calculate positions
    const getPrevIndex = useCallback(() => {
        return (currentIndex - 1 + totalItems) % totalItems;
    }, [currentIndex, totalItems]);

    const getNextIndex = useCallback(() => {
        return (currentIndex + 1) % totalItems;
    }, [currentIndex, totalItems]);

    // Go to specific slide
    const goToSlide = useCallback((index: number) => {
        if (index === currentIndex) return;
        setCurrentIndex(index);
    }, [currentIndex]);

    // Handle team click
    const handleTeamClick = useCallback((teamId: number) => {
        console.log('Team clicked:', teamId);
        setSelectedTeam(teamId);
        setViewMode("members");
        setCurrentIndex(0);
    }, []);

    // Back to teams view
    const handleBackToTeams = useCallback(() => {
        console.log('Back to teams clicked');
        setViewMode("teams");
        setSelectedTeam(null);
        setCurrentIndex(0);
    }, []);

    // Auto-play functionality
    const startAutoPlay = useCallback(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalItems);
        }, 4000);
    }, [totalItems]);

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

    // Get class name for each item
    const getItemClass = (index: number) => {
        if (index === currentIndex) return styles.center;
        if (index === getPrevIndex()) return styles.left;
        if (index === getNextIndex()) return styles.right;
        return styles.hidden;
    };

    return (
        <>
            {/* Back Button - Outside carousel container */}
            {viewMode === "members" && (
                <button
                    className={styles.backButton}
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleBackToTeams();
                    }}
                    style={{ position: 'fixed', zIndex: 99999 }}
                >
                    ← Back to Teams
                </button>
            )}

            <div
                className={styles.carouselContainer}
                onMouseMove={handleMouseMove}
                onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay}
                style={{
                    background: `radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, #1a3a3a 0%, #0a0a0a 100%)`
                }}
            >

                {/* Header */}
                <div className={styles.header}>
                    <h1>{viewMode === "teams" ? "Our Teams" : teamsData[selectedTeam!].name + " Team"}</h1>
                </div>

                <div className={styles.carouselWrapper}>
                    {viewMode === "teams" ? (
                        // Teams View
                        teamsData.map((team, index) => (
                            <div
                                key={team.id}
                                className={`${styles.teamCard} ${getItemClass(index)}`}
                                onClick={() => handleTeamClick(team.id)}
                                data-index={index}
                            >
                                <div className={styles.teamIcon}>{team.icon}</div>
                                <div className={styles.teamName}>{team.name}</div>
                                <div className={styles.teamCount}>{team.members.length} Members</div>
                                <div className={styles.clickHint}>Click to view team</div>
                            </div>
                        ))
                    ) : (
                        // Members View
                        currentData.map((member: any, index: number) => (
                            <div
                                key={member.id}
                                className={`${styles.memberCard} ${getItemClass(index)}`}
                                data-index={index}
                            >
                                <img src={member.image} alt={member.name} />
                                <div className={styles.memberInfo}>
                                    <div className={styles.memberName}>{member.name}</div>
                                    <div className={styles.memberRole}>{member.role}</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.reflectionFloor}></div>

                <div className={styles.navigation}>
                    {currentData.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                            onClick={() => goToSlide(index)}
                            data-slide={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
